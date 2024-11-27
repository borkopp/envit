import {Event} from "@/app/utils/interface";
import {client} from "@/sanity/lib/client";
import {PortableText} from "@portabletext/react";
import Image from "next/image";
import SubpageTemplate from "@/app/components/SubpageTemplate";
import {Badge} from "@/components/ui/badge";
import {Calendar, MapPin, Users, Link as LinkIcon} from "lucide-react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/app/components/Map"), {ssr: false});

interface Params {
  params: {
    slug: string;
  };
}

async function getEvent(slug: string) {
  const query = `
    *[_type == "event" && slug.current == "${slug}"][0] {
      title,
      slug,
      startDate,
      endDate,
      eventType,
      description,
      _id,
      thumbnail {
        asset-> {
          url
        }
      },
      address,
      registrationLink,
      capacity,
      organizer
    }
  `;
  const event = await client.fetch(query);
  return event;
}

export const revalidate = 10;

const EventPage = async ({params}: Params) => {
  const event: Event = await getEvent(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-12 py-8 bg-white">
      <div className="mb-8">
        {event?.thumbnail?.asset.url && (
          <Image src={event.thumbnail.asset.url} alt={event.title} width={1200} height={600} className="w-full h-[400px] object-cover rounded-lg" />
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {event.eventType.map((type) => (
          <Badge key={type} variant="secondary" className="capitalize">
            {type}
          </Badge>
        ))}
      </div>

      <h1 className="text-4xl font-bold mb-6">{event.title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-gray-500" />
            <div>
              <p className="font-semibold">Date & Time</p>
              <p>{new Date(event.startDate).toLocaleDateString()}</p>
              {event.endDate && <p>to {new Date(event.endDate).toLocaleDateString()}</p>}
            </div>
          </div>

          {event.address && (
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-gray-500" />
              <div>
                <p className="font-semibold">Location</p>
                <p>{event.address.streetAddress}</p>
                <p>
                  {event.address.city}, {event.address.country}
                </p>
              </div>
            </div>
          )}

          {event.capacity && (
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-gray-500" />
              <div>
                <p className="font-semibold">Capacity</p>
                <p>{event.capacity} attendees</p>
              </div>
            </div>
          )}

          {event.registrationLink && (
            <div className="flex items-center">
              <LinkIcon className="w-5 h-5 mr-2 text-gray-500" />
              <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Register for Event
              </a>
            </div>
          )}
        </div>

        {event.address?.coordinates && (
          <div className="h-[300px] rounded-lg overflow-hidden">
            <Map
              center={[event.address.coordinates.lat, event.address.coordinates.lng]}
              marker={[event.address.coordinates.lat, event.address.coordinates.lng]}
            />
          </div>
        )}
      </div>

      <div className="prose max-w-none">
        <PortableText value={event.description} />
      </div>
    </article>
  );
};

export default EventPage;
