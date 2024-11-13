"use client";
import React, { useState } from "react";
import dynamic from 'next/dynamic';
import { Mail, Send, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Team from "@/app/components/Team";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import SubpageTemplate from '@/app/components/SubpageTemplate';

const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);

export default function AboutUs() {
  const companyLocation = {
    latitude: 46.189,
    longitude: 14.521,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <SubpageTemplate>
      <div className="container mx-auto px-4 py-16 space-y-24">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="text-muted-foreground">
                Envit Ltd. is a research & development SME company for
                environmental technology and engineering. It was established in
                2009 as a spin-out company of University of Ljubljana, Slovenia.
              </p>
              <p className="text-muted-foreground">
                The founding of Envit Ltd. was initiated by prof. Domen Leštan and
                his fellow two PhD students, following the development of
                innovative soil washing technology (ReSoil) at UL to the level
                which attested the feasibility and commercial potential of the
                technology.
              </p>
              <p className="text-muted-foreground">
                In 2015 the majority of shares of Envit Ltd. were acquired by
                Arhel Ltd. In 2017 the construction of a demonstration-al
                soil-washing plant with ReSoil technology commenced in the city of
                Prevalje, nearby Pb, Zn and Cd contaminated Meza Valley, Slovenia,
                co-financed from EU LIFE + Programme and a corporate investment
                fund from Arhel Ltd. ReSoil was awarded Seal of Excellence from
                the EU Commission which allows projects with ReSoil technology to
                access EU structural and cohesion funds.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <address className="not-italic text-muted-foreground">
                  Pod lipami 35
                  <br />
                  1218 Komenda
                  <br />
                  Slovenia
                </address>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Contact</h3>
                <p className="text-muted-foreground flex items-center">
                  <Mail className="mr-2 h-4 w-4" /> info@envit.si
                </p>
                <p className="text-muted-foreground flex items-center">
                  <FaLinkedin className="mr-2 h-4 w-4" />{" "}
                  <Link
                    className="underline"
                    href="https://www.linkedin.com/company/envit/"
                    target="_blank"
                  >
                    ENVIT Ltd.
                  </Link>
                </p>
                <p className="text-muted-foreground flex items-center">
                  <FaXTwitter className="mr-2 h-4 w-4" />{" "}
                  <Link
                    className="underline"
                    href="https://x.com/EnvitLtd"
                    target="_blank"
                  >
                    ENVIT Ltd.
                  </Link>
                </p>
              </div>
            </div>
            <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 z-0">
                <MapContainer 
                  center={[companyLocation.latitude, companyLocation.longitude]} 
                  zoom={14} 
                  style={{ height: '100%', width: '100%' }}
                  zoomControl={false}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  <Marker position={[companyLocation.latitude, companyLocation.longitude]}>
                    <Popup>
                      Envit Ltd. <br /> Pod lipami 35, 1218 Komenda, Slovenia
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Team backgroundColor="bg-gray-50" />
        </section>

        <section className=" rounded-lg  p-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
                  <p className="text-gray-600 mb-6">
                    Prefer to reach out directly? Feel free to contact us through any of the following methods:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Us</h4>
                      <p className="text-gray-600">
                        Send us an email at{" "}
                        <a href="mailto:info@envit.si" className="text-primary hover:underline">
                          info@envit.si
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FaLinkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Connect with Us</h4>
                      <div className="space-y-2">
                        <Link
                          href="https://www.linkedin.com/company/envit/"
                          target="_blank"
                          className="text-gray-600 hover:text-primary flex items-center"
                        >
                          LinkedIn <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                        <Link
                          href="https://x.com/EnvitLtd"
                          target="_blank"
                          className="text-gray-600 hover:text-primary flex items-center"
                        >
                          Twitter <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Visit Us</h4>
                      <address className="not-italic text-gray-600">
                        Pod lipami 35<br />
                        1218 Komenda<br />
                        Slovenia
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SubpageTemplate>
  );
}
