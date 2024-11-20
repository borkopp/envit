import { Rule } from "sanity";

export const event = {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Conference', value: 'conference'},
          {title: 'Demonstration', value: 'demonstration'},
          {title: 'Exhibition', value: 'exhibition'},
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        {
          name: 'streetAddress',
          title: 'Street Address',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    },
    {
      name: 'capacity',
      title: 'Event Capacity',
      type: 'number',
    },
    {
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
    },
  ],
} 