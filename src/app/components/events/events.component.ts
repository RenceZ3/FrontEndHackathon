import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  eventData: any[] = [];
  constructor(private _event: EventService){}

  data = {
    "data": [
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA1LTE5fDQ1OTcxNTE5MjkxNzQ4MDI5NjM=",
            "event_mid": "/g/11vkbq3w3r",
            "name": "International Conference on Water Pollution Control, Technology and Water Quality",
            "description": "Environmental engineeringWater pollutionPoint sourcesNon-point sourcesGroundwater pollutionEnvironmental impacts and controlControl of pollutionControl of urban runoff (storm water)Emerging concerns MeasurementWastewater treatment technologiesModeling AssessmentSafe water Water qualityCausesPathogensOrganic, inorganic and macroscopic contaminantsThermal pollutionTransport and chemical reactions of water pollutantsWater reclamationWater cycleSamplingPhysical testingChemical testingBiological testingSewage treatmentIndustrial wastewater treatmentAgricultural wastewater treatmentErosion and sediment control from construction sitesWater pollution by country",
            "start_time": "2024-05-19 14:00:00",
            "end_time": "2024-05-20 14:00:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "Conference Index",
                    "link": "https://conferenceindex.org/conferences/quality-control/vancouver-ca"
                }
            ],
            "tags": [
                "conference"
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA4LTA1fF83MDM4Nzg3ODU2ODExNDk3MzE4",
            "event_mid": "/g/11vs6j85rg",
            "name": "International Conference on Water Pollution and Solutions ICWPS on August 05-06, 2024 in Vancouver, Canada",
            "description": "International Conference on Water Pollution and Solutions ICWPS on August 05-06, 2024 in Vancouver, Canada 2024 happens in Vancouver, Aug, 2024 focus on . The cycle of the trade fair is , organize by World Academy of Science, Engineering and Technology at Vancouver, Canada.",
            "start_time": "2024-08-05 08:24:00",
            "end_time": "2024-08-06 08:24:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "eWorldTrade",
                    "link": "https://www.eworldtrade.com/events/international-conference-on-water-pollution-and-solutions-icwps-on-august-05-06-2024-in-vancouver-canada/"
                }
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA1LTIzfF8xNDY0MzM0NDY3NDg0MDMzMjU0MQ==",
            "event_mid": "/g/11y1t09_lf",
            "name": "International Conference on Sustainable Energy Economics and Management",
            "description": "Sustainable energy economicsSustainable energy consumptionEnergy modelingSustainable electricity supply and demand analysisSustainable economic growth and energy consumptionEnergy policy, planning and forecastingEnergy pricingRenewable energy economicsBiomass and bioenergyEnergy storageEnvironmental effects, emissions and sustainabilityEnergy and greenhouse gas mitigationFinancing of energy sector in developing countriesInteraction between energy and environmentToday and future of nanotechnology applications",
            "start_time": "2024-05-23 17:00:00",
            "end_time": "2024-05-24 17:00:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "Conference Index",
                    "link": "https://conferenceindex.org/conferences/energy-economics/canada"
                }
            ],
            "tags": [
                "conference"
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA3LTExfF8xMjczOTIwNzE2MTE1MTk1OTgzNA==",
            "event_mid": "/g/11l6xb30pr",
            "name": "International Conference on Environmental and Water Resources Engineering",
            "description": "Arid Environments and their Natural ResourcesAssessment and Control of Radioactive Contamination in GroundwaterAtmospheric physics and chemistryBiofuelsBiotechnologyCarbon capture and storageClimate and climatic changesClimate Change and its Impact on the Desert EnvironmentClimate change impacts on hydrology and water resourcesComputational Modeling and SimulationConservation of Biodiversity in Arid EnvironmentsDesalination of water without energyEmerging Technologies and Methods for Water ConservationEnvironment engineeringEnvironmental and Water Resources Engineering Environmental dynamicsEnvironmental managementEnvironmental pollutionEnvironmental science and technologyEnvironmental Systems EngineeringErosion and sediment transportExtremes: drought, and floodingGeographical Information Systems GeophysicsGlobal environmental change and ecosystems managementGlobal Positioning Systems Global warmingHydraulics Engineering Hydro Power Engineering HydrologyInnovative Methods for Rain and …",
            "start_time": "2024-07-11 17:00:00",
            "end_time": "2024-07-12 17:00:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "Conference Index",
                    "link": "https://conferenceindex.org/conferences/water-resources-engineering/ottawa-ca"
                }
            ],
            "tags": [
                "conference"
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA1LTI0fDcyMzY3ODgxMzE0NzY1NDUyNjY=",
            "event_mid": "/g/11vpg7hb80",
            "name": "International Conference on Sustainable Water Management and Pollution Control ICSWMPC on May 24-25, 2023 in Montreal, Canada",
            "description": "International Conference on Sustainable Water Management and Pollution Control ICSWMPC on May 24-25, 2023 in Montreal, Canada 2023 happens in Montreal, May, 2023 focus on . The cycle of the trade fair is , organize by World Academy of Science, Engineering and Technology at Montreal, Canada.",
            "start_time": "2024-05-24 11:23:00",
            "end_time": "2024-05-25 11:23:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "eWorldTrade",
                    "link": "https://www.eworldtrade.com/events/international-conference-on-sustainable-water-management-and-pollution-control-icswmpc-on-may-24-25-2023-in-montreal-canada/"
                }
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA2LTE1fDk2NjkxMTQ0OTg4Njk0MzU3MTI=",
            "event_mid": "/g/11vpfg31bh",
            "name": "International Conference on Water Resources, Hydrology, Ecology and Environment ICWRHEE on June 15-16, 2023 in Toronto, Canada",
            "description": "International Conference on Water Resources, Hydrology, Ecology and Environment ICWRHEE on June 15-16, 2023 in Toronto, Canada 2023 happens in Toronto, Jun, 2023 focus on . The cycle of the trade fair is , organize by World Academy of Science, Engineering and Technology at Toronto, Canada.",
            "start_time": "2024-06-15 11:23:00",
            "end_time": "2024-06-16 11:23:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "eWorldTrade",
                    "link": "https://www.eworldtrade.com/events/international-conference-on-water-resources-hydrology-ecology-and-environment-icwrhee-on-june-15-16-2023-in-toronto-canada/"
                }
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA1LTE1fDE1OTc4NzU3MTA5MDk4NTM4MTIy",
            "event_mid": "/g/11vrmbjcpx",
            "name": "International Conference on Water, Energy and Environmental Management ICWEEM on May 15-16, 2023 in Montreal, Canada",
            "description": "International Conference on Water, Energy and Environmental Management ICWEEM on May 15-16, 2023 in Montreal, Canada 2023 happens in Montreal, May, 2023 focus on . The cycle of the trade fair is , organize by World Academy of Science, Engineering and Technology at Montreal, Canada.",
            "start_time": "2024-05-15 11:23:00",
            "end_time": "2024-05-16 11:23:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "eWorldTrade",
                    "link": "https://www.eworldtrade.com/events/international-conference-on-water-energy-and-environmental-management-icweem-on-may-15-16-2023-in-montreal-canada/"
                }
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA1LTI0fDE0NTQ5MzgzMzE1Mzc2MzE3MDEy",
            "event_mid": "/g/11vskwshln",
            "name": "International Conference on Environment, Water and Wetlands ICEWW on May 24-25, 2023 in Montreal, Canada",
            "description": "International Conference on Environment, Water and Wetlands ICEWW on May 24-25, 2023 in Montreal, Canada 2023 happens in Montreal, May, 2023 focus on . The cycle of the trade fair is , organize by World Academy of Science, Engineering and Technology at Montreal, Canada.",
            "start_time": "2024-05-24 11:23:00",
            "end_time": "2024-05-25 11:23:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "eWorldTrade",
                    "link": "https://www.eworldtrade.com/events/international-conference-on-environment-water-and-wetlands-iceww-on-may-24-25-2023-in-montreal-canada/"
                }
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA5LTIwfF8xMzM2MzExNjk4MDQ2MTAxMDkwMQ==",
            "event_mid": "/g/11vrzg38xs",
            "name": "International Conference on Soil and Water Contamination, Remediation, Conservation and Water Conservation ICSWCRCWC on September 20-21, 2023 in Toronto, Canada",
            "description": "International Conference on Soil and Water Contamination, Remediation, Conservation and Water Conservation ICSWCRCWC on September 20-21, 2023 in Toronto, Canada 2023 happens in Toronto, Sep, 2023 focus on . The cycle of the trade fair is , organize by World Academy of Science, Engineering and Technology at Toronto, Canada.",
            "start_time": "2024-09-20 11:23:00",
            "end_time": "2024-09-21 11:23:00",
            "is_virtual": false,
            "info_links": [
                {
                    "source": "eWorldTrade",
                    "link": "https://www.eworldtrade.com/events/international-conference-on-soil-and-water-contamination-remediation-conservation-and-water-conservation-icswcrcwc-on-september-20-21-2023-in-toronto-canada/"
                }
            ],
            "language": "en"
        },
        {
            "event_id": "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI0LTA1LTE5fF8xNjk2MDg5MjU3NTI1MTkxMzk0MA==",
            "event_mid": "/g/11vkshc5xh",
            "name": "2024 World Environmental & Water Resources Congress",
            "description": "Climate change is impacting society and the natural and built environment. Migration of people away from highly impacted areas toward more climate-resilient locations has already started. Design methods and parameters […]",
            "start_time": "2024-05-19 00:00:00",
            "end_time": "2024-05-24 00:00:00",
            "is_virtual": false,
            "thumbnail": "https://c1.10times.com/industry/27.jpg",
            "info_links": [
                {
                    "source": "ASCE",
                    "link": "https://www.asce.org/education-and-events/events/meetings/2024-world-environmental-and-water-resources-congress"
                },
                {
                    "source": "ewricongress",
                    "link": "https://www.ewricongress.org/"
                },
                {
                    "source": "WEST Consultants, Inc.",
                    "link": "https://www.westconsultants.com/event/environmental-water-resources-institute-ewri-2024-world-environmental-water-resources-congress/"
                },
                {
                    "source": "10Times",
                    "link": "https://10times.com/e1z3-f1x5-x0sd"
                }
            ],
            "venue": {
                "google_id": "0x880519758a970079:0x939affd8bbc869c5",
                "name": "Baird Center",
                "phone_number": "+14149086000",
                "website": "https://bairdcenter.com/",
                "review_count": 1829,
                "rating": 4.5,
                "subtype": "convention_center",
                "subtypes": [
                    "convention_center",
                    "banquet_hall",
                    "business_related",
                    "business_service",
                    "conference_center",
                    "establishment",
                    "establishment_poi",
                    "event_venue",
                    "feature",
                    "hall",
                    "meeting_and_conference_facilities",
                    "places_of_interest",
                    "public_api_establishment",
                    "rental",
                    "services"
                ],
                "full_address": "400 West Wisconsin Avenue, Milwaukee, WI 53203, United States",
                "latitude": 43.039757,
                "longitude": -87.91725,
                "street_number": "400",
                "street": "West Wisconsin Avenue",
                "city": "Milwaukee",
                "state": "Wisconsin",
                "country": "US",
                "timezone": "America/Chicago",
                "google_mid": "/m/0bzp4b"
            },
            "tags": [
                "conference"
            ],
            "language": "en"
        }
    ]
}

  ngOnInit(): void {
      const list = this.data;
    //   this.eventData = list.data;
    this.getEventListData();
  }

  getEventListData() {
    this._event.getEventLists().subscribe(event => {
        // console.log(event.data);
        
        this.eventData = event.data;
        
    })
  }
}
