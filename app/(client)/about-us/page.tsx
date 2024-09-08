"use client";
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Team from "@/app/components/Team";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export default function AboutUs() {
  const companyLocation = {
    latitude: 46.189,
    longitude: 14.521,
    zoom: 14,
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
    // Implement your form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
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
          <div className="h-[400px] md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Map
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
              initialViewState={companyLocation}
              style={{ width: "100%", height: "100%" }}
              mapStyle="mapbox://styles/mapbox/light-v11"
            >
              <Marker
                longitude={companyLocation.longitude}
                latitude={companyLocation.latitude}
                anchor="bottom"
              >
                <MapPin className="w-8 h-8 text-primary" />
              </Marker>
            </Map>
          </div>
        </div>
      </section>

      <section>
        <Team backgroundColor="bg-white" />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
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
            className="w-full bg-green-500 hover:bg-green-600"
          >
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </form>
      </section>
    </div>
  );
}
