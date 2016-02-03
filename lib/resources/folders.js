"use strict";

var jsonApi = require('jsonapi-server');

module.exports = {
      namespace: "json:api",
      resource: "folders",
      description: "Folders that will be used to organise and categorise files.",
      handlers: new jsonApi.MemoryHandler(),
      searchParams: { },
      attributes: {
        name: jsonApi.Joi.string().required(),
        parent: jsonApi.Joi.one("folders"),
        children: jsonApi.Joi.belongsToMany({
            resource: "folders",
            as: "parent"
        }).allow(null)
      },
      examples: [
        {
          id: "6b017640-827c-4d50-8dcc-79d766abb408",
          type: "folders",
          name: "Root Folder without any parent",
          parent: null
        },
        {
          id: "3f1a89c2-eb85-4799-a048-6735db24b7eb",
          type: "folders",
          name: "First Child",
          parent: {
              type: "folders",
              id: "6b017640-827c-4d50-8dcc-79d766abb408"
          }
        },
        {
          id: "de305d54-75b4-431b-adb2-eb6b9e546014",
          type: "folders",
          name: "Second Child",
          parent: {
              type: "folders",
              id: "6b017640-827c-4d50-8dcc-79d766abb408"
          }
        },
        {
          id: "1be0913c-3c25-4261-98f1-e41174025ed5",
          type: "folders",
          name: "First Child of Second Child",
          parent: {
              type: "folders",
              id: "de305d54-75b4-431b-adb2-eb6b9e546014"
          }
        },
        {
          id: "d850ea75-4427-4f81-8595-039990aeede5",
          type: "folders",
          name: "Second Child of Second Child",
          parent: {
              type: "folders",
              id: "de305d54-75b4-431b-adb2-eb6b9e546014"
          }
        }
      ]
};
