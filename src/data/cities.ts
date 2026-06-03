/**
 * Cities data fetched from Notion at build time
 * This data is used to render city markers on the interactive map
 */

export interface Project {
  name: string;
  description: string;
  client: string;
}

export interface City {
  name: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
  projects: Project[];
}

// City data from Notion database
// Last synced: 2026-06-03
// All cities shown have Active or Done projects only
export const cities: City[] = [
  {
    name: "Tucson",
    state: "Arizona",
    country: "USA",
    latitude: 32.22177,
    longitude: -110.96977,
    projects: [
      {
        name: "City Gun Violence Dashboards",
        description: "Working with cities to build and publish gun violence data dashboards.",
        client: "Everytown for Gun Safety"
      }
    ]
  },
  {
    name: "Tempe",
    state: "Arizona",
    country: "USA",
    latitude: 33.42554,
    longitude: -111.93722,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "San Diego",
    state: "California",
    country: "USA",
    latitude: 32.71568,
    longitude: -117.16171,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "San Francisco",
    state: "California",
    country: "USA",
    latitude: 37.77702,
    longitude: -122.41956,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "San Jose",
    state: "California",
    country: "USA",
    latitude: 37.33865,
    longitude: -121.88542,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Boulder",
    state: "Colorado",
    country: "USA",
    latitude: 40.01574,
    longitude: -105.27924,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Denver",
    state: "Colorado",
    country: "USA",
    latitude: 39.74001,
    longitude: -104.99202,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      },
      {
        name: "CDO-in-Residence",
        description: "Provide strategic guidance, leadership, and intensive problem-solving to GovEx and select cities. Develop field-defining research and publications.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Washington",
    state: "District of Columbia",
    country: "USA",
    latitude: 38.89037,
    longitude: -77.03196,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      },
      {
        name: "CDO-in-Residence",
        description: "Provide strategic guidance, leadership, and intensive problem-solving to GovEx and select cities. Develop field-defining research and publications.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Tampa",
    state: "Florida",
    country: "USA",
    latitude: 27.94653,
    longitude: -82.45927,
    projects: [
      {
        name: "City Gun Violence Dashboards",
        description: "Working with cities to build and publish gun violence data dashboards.",
        client: "Everytown for Gun Safety"
      }
    ]
  },
  {
    name: "Miami",
    state: "Florida",
    country: "USA",
    latitude: 25.77481,
    longitude: -80.19773,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Naperville",
    state: "Illinois",
    country: "USA",
    latitude: 41.77083,
    longitude: -88.15302,
    projects: [
      {
        name: "Bloomberg Harvard City Leadership Initiative",
        description: "Coaching for city leaders building a data-driven culture in City Hall.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "South Bend",
    state: "Indiana",
    country: "USA",
    latitude: 41.67907,
    longitude: -86.25405,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Louisville",
    state: "Kentucky",
    country: "USA",
    latitude: 38.25489,
    longitude: -85.76666,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Baltimore",
    state: "Maryland",
    country: "USA",
    latitude: 39.29058,
    longitude: -76.60926,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      },
      {
        name: "Public Impact Initiatives Data Support",
        description: "Develop metrics, data pipelines, data products, and documentation that measure and communicate the impacts of the university on surrounding neighborhoods and the Baltimore community at large.",
        client: "Johns Hopkins University"
      },
      {
        name: "Eds & Meds Local Investment Dashboard",
        description: "Dashboard for Baltimore education & medical institution investments in Baltimore community.",
        client: "Johns Hopkins University"
      },
      {
        name: "CDO-in-Residence",
        description: "Provide strategic guidance, leadership, and intensive problem-solving to GovEx and select cities. Develop field-defining research and publications.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Boston",
    state: "Massachusetts",
    country: "USA",
    latitude: 42.35866,
    longitude: -71.05674,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Detroit",
    state: "Michigan",
    country: "USA",
    latitude: 42.33168,
    longitude: -83.048,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Minneapolis",
    state: "Minnesota",
    country: "USA",
    latitude: 44.97902,
    longitude: -93.26494,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Kansas City",
    state: "Missouri",
    country: "USA",
    latitude: 39.10344,
    longitude: -94.58311,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Moncton",
    state: "New Brunswick",
    country: "Canada",
    latitude: 46.0891,
    longitude: -64.77592,
    projects: [
      {
        name: "City Data Alliance",
        description: "Intensive city leadership and management coaching, facilitation, and technical support to cities prototyping AI-powered city services and data products.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Westchester County",
    state: "New York",
    country: "USA",
    latitude: 41.15166,
    longitude: -73.75333,
    projects: [
      {
        name: "City Gun Violence Dashboards",
        description: "Create platform for multiple law enforcement jurisdictions to submit gun violence data to county for aggregation and dashboard.",
        client: "Everytown for Gun Safety"
      }
    ]
  },
  {
    name: "Rochester",
    state: "New York",
    country: "USA",
    latitude: 43.1558,
    longitude: -77.61632,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Cleveland",
    state: "Ohio",
    country: "USA",
    latitude: 41.50473,
    longitude: -81.69074,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Allegheny County",
    state: "Pennsylvania",
    country: "USA",
    latitude: 40.46882,
    longitude: -79.98118,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Philadelphia",
    state: "Pennsylvania",
    country: "USA",
    latitude: 39.95222,
    longitude: -75.16218,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Pittsburgh",
    state: "Pennsylvania",
    country: "USA",
    latitude: 40.43851,
    longitude: -79.99734,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Chattanooga",
    state: "Tennessee",
    country: "USA",
    latitude: 35.04672,
    longitude: -85.30947,
    projects: [
      {
        name: "City Gun Violence Dashboards",
        description: "Working with cities to build and publish gun violence data dashboards.",
        client: "Everytown for Gun Safety"
      }
    ]
  },
  {
    name: "Memphis",
    state: "Tennessee",
    country: "USA",
    latitude: 35.14976,
    longitude: -90.04925,
    projects: [
      {
        name: "Bloomberg Innovation Team Data Support",
        description: "Data analysis and coaching support to I-Teams.",
        client: "Bloomberg Center for Public Innovation"
      }
    ]
  },
  {
    name: "Dallas",
    state: "Texas",
    country: "USA",
    latitude: 32.77823,
    longitude: -96.7951,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Seattle",
    state: "Washington",
    country: "USA",
    latitude: 47.60357,
    longitude: -122.32945,
    projects: [
      {
        name: "Civic Analytics Network",
        description: "Facilitating group of city Chief Data Officers from across the country to develop best practices, shared problem-solving, and field-defining research on the role of the CDO in local government.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  },
  {
    name: "Green Bay",
    state: "Wisconsin",
    country: "USA",
    latitude: 44.5132,
    longitude: -88.00987,
    projects: [
      {
        name: "City Data Alliance",
        description: "Intensive city leadership and management coaching, facilitation, and technical support to cities prototyping AI-powered city services and data products.",
        client: "Bloomberg Center for Government Excellence"
      }
    ]
  }
];
