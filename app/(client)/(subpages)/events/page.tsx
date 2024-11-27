"use client";

import {useState, useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {client} from "@/sanity/lib/client";
import {Event} from "@/app/utils/interface";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Search, Calendar} from "lucide-react";
import SubpageTemplate from "@/app/components/SubpageTemplate";
import {Badge} from "@/components/ui/badge";

const EventItem = ({title, startDate, endDate, eventType, slug, thumbnail, address}: Event) => (
  <div className="w-full md:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:scale-[0.98] transition-all duration-300 h-full flex flex-col">
      <Image
        className="w-full h-56 object-cover"
        src={thumbnail?.asset?.url || "/logo-resoil.png"}
        alt={title}
        width={400}
        height={200}
        quality={100}
      />
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-3">
          {eventType.map((type) => (
            <Badge key={type} variant="secondary" className="capitalize">
              {type}
            </Badge>
          ))}
        </div>
        <div className="flex items-center mb-2">
          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
          <p className="text-sm text-gray-500">
            {new Date(startDate).toLocaleDateString()}
            {endDate && ` - ${new Date(endDate).toLocaleDateString()}`}
          </p>
        </div>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
        {address && (
          <p className="text-sm text-gray-600 mb-4">
            {address.city}, {address.country}
          </p>
        )}
        <div className="relative h-8 mt-auto">
          <Link href={`/events/${slug.current}`}>
            <span className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-primary-dark transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 text-center">
              View Event
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    async function fetchEvents() {
      const query = `
      *[_type == "event"] | order(startDate asc) {
        title,
        slug,
        startDate,
        endDate,
        eventType,
        _id,
        thumbnail {
          asset-> {
            url
          }
        },
        address
      }
      `;
      const data = await client.fetch(query);
      setEvents(data);
    }
    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || event.eventType.includes(filterType);
    return matchesSearch && matchesType;
  });

  return (
    <SubpageTemplate>
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative mb-4 md:mb-0 md:mr-4 max-w-xs">
              <Input
                type="text"
                placeholder="Search events..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" size={18} />
            </div>
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[180px] border">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="conference">Conference</SelectItem>
                <SelectItem value="demonstration">Demonstration</SelectItem>
                <SelectItem value="exhibition">Exhibition</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-wrap -mx-4">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => <EventItem key={event._id} {...event} />)
            ) : (
              <p className="text-center w-full text-gray-500">No events found.</p>
            )}
          </div>
        </div>
      </section>
    </SubpageTemplate>
  );
}
