import type { Schema, Attribute } from '@strapi/strapi';

export interface SocialsSocials extends Schema.Component {
  collectionName: 'components_socials_socials';
  info: {
    displayName: 'Socials';
  };
  attributes: {
    instagram: Attribute.String;
    linkedIn: Attribute.String;
    twitter: Attribute.String;
    facebook: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'socials.socials': SocialsSocials;
    }
  }
}
