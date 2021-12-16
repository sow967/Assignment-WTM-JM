var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice_lee_plaza",
      "name": "Alice_Lee_Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.9563279437704804,
        "pitch": -0.24725093353118055,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -2.944452539158835,
          "pitch": -0.057681906102256875,
          "rotation": 0.7853981633974483,
          "target": "1-conservatory_foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.158050369459586,
          "pitch": -0.16263932561308359,
          "title": "About 'Alice Lee Plaza'",
          "text": "This is Alice Lee Plaza at the YSTCM at NUS, Singapore<div><br></div><div>Find the arrow to enter</div>"
        }
      ]
    },
    {
      "id": "1-conservatory_foyer",
      "name": "Conservatory_Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.445237054080188,
        "pitch": 0.0914828454065244,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 3.0366233338772197,
          "pitch": -0.3524135708381202,
          "rotation": 5.497787143782138,
          "target": "2-conservatory_lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6262364360333272,
          "pitch": 0.06681595822737663,
          "title": "About 'Conservatory Foyer'",
          "text": "This is the Conservatory Foyer at YSTCM, NUS.&nbsp;<div><br></div><div><br></div><div>Come take a walk in the serene halls, then head to the conservatory lounge (find the arrow)</div>"
        }
      ]
    },
    {
      "id": "2-conservatory_lounge",
      "name": "Conservatory_Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 3.125674100235523,
        "pitch": 0.5563713275403792,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.3286708362579347,
          "pitch": 0.12451863096129046,
          "rotation": 0,
          "target": "0-alice_lee_plaza"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0930323829545596,
          "pitch": 0.6083673491487822,
          "title": "About 'Conservatory Lounge'",
          "text": "This is the Conservatory Lounge at YSTCM , NUS.<div><br></div><div>Relax, listen to some music or get work done here...and then, find the arrow to return to Alice Lee Plaza.</div>"
        }
      ]
    }
  ],
  "name": "YSTCM NUS",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
