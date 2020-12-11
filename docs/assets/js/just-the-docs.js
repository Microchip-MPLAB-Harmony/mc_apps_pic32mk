var myVariable = `
{"0": {
    "doc": "Hardware Setup",
    "title": "Hardware Setup",
    "content": "dsPICDEM™ MCHV-3 Development Board (High Voltage) . | Board | Plug In Module | Description | . | MCHV3 Setup for Sensorless Mode | PIC32MK Motor Control Plug In Module | Hardware setup of MCHV3 development board for sensorless mode | . | MCHV3 Setup for Sensorless Mode | PIC32MK MCM Motor Control Plug In Module | Hardware setup of MCHV3 development board for sensorless mode | . | MCHV3 Setup for Quadrature Encoder Mode | PIC32MK Motor Control Plug In Module | Hardware setup of MCHV3 development board for encoder mode | . | MCHV3 Setup for Quadrature Encoder Mode | PIC32MK MCM Motor Control Plug In Module | Hardware setup of MCHV3 development board for encoder mode | . |   |   |   | . dsPICDEM™ MCLV-2 Development Board (Motor Control Low-Voltage) . | Board | Plug In Module | Description | . | MCLV2 Setup for Sensorless Mode | PIC32MK Motor Control Plug In Module | Hardware setup of MCLV2 development board for sensorless mode | . | MCLV2 Setup for Sensorless Mode | PIC32MK MCM Motor Control Plug In Module | Hardware setup of MCLV2 development board for sensorless mode | . | MCLV2 Setup for Quadrature Encoder Mode | PIC32MK Motor Control Plug In Module | Hardware setup of MCLV2 development board for encoder mode | . | MCLV2 Setup for Quadrature Encoder Mode | PIC32MK MCM Motor Control Plug In Module | Hardware setup of MCLV2 development board for encoder mode | . |   |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/hardware_setup.html",
    "relUrl": "/apps/docs/hardware_setup.html"
  },"1": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCF",
    "title": "MCHV3 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html#mchv3-development-board",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html#mchv3-development-board"
  },"2": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCF",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mchv3_pic32mk_mcf_pim.X | MCHV3 Development BoardPIC32MK MCF Motor Plugin ModuleLeadshine EL5-M0400-1-24 Motor | . |   |   | . Setting up MCHV3 Development Board . | Mount the PIC32MK MCF Motor Control Plug In Module on U11 header. | Place the “External Opamp Configuration” Matrix board at J4. | Motor Connections: . | Phase U - M1 | Phase V - M2 | Phase W - M3 | . | Encoder Connections: . | A+ : HA | B+ : HB | 5V : +5V | 0V : GND | . | Jumper Settings: . | J11 - VAC ( Short Pin 3 - 4) | J12 - IA ( Short Pin 1 - 2) | J13 - IB ( Short Pin 1 - 2) | J14 - Fault_IP/IBUS ( Short Pin 1 - 2) | . | Power the board with (110V/220V) AC mains. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html#setting-up-the-hardware"
  },"3": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCF",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch PUSHBUTTON to start the motor | Vary potentiometer to change the speed of the motor | Press switch to stop the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | PUSHBUTTON | To start or stop the motor | . |   |   | . | LED D2 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html#running-the-application",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html#running-the-application"
  },"4": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCF",
    "title": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCF",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensored.html"
  },"5": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "MCHV3 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html#mchv3-development-board",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html#mchv3-development-board"
  },"6": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mchv3_pic32mk_mcf_pim.X | MCHV3 Development BoardPIC32MK MCF Motor Plugin ModuleLeadshine EL5-M0400-1-24 Motor | . |   |   | . Setting up MCHV3 Development Board . | Mount the PIC32MK MCF Motor Control Plug In Module on U11 header. | Place the “External Opamp Configuration” Matrix board at J4. | Motor Connections: . | Phase U - M1 | Phase V - M2 | Phase W - M3 | . | Jumper Settings: . | J11 - VAC ( Short Pin 3 - 4) | J12 - IA ( Short Pin 1 - 2) | J13 - IB ( Short Pin 1 - 2) | J14 - Fault_IP/IBUS ( Short Pin 1 - 2) | . | Power the board with (110V/220V) AC mains. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html#setting-up-the-hardware"
  },"7": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch PUSHBUTTON to start the motor | Vary potentiometer to change the speed of the motor | Press switch to stop the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | PUSHBUTTON | To start or stop the motor | . |   |   | . | LED D2 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html#running-the-application",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html#running-the-application"
  },"8": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcf_pim_sensorless.html"
  },"9": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCM",
    "title": "MCHV3 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html#mchv3-development-board",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html#mchv3-development-board"
  },"10": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCM",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mchv3_pic32mk_mcm_pim.X | MCHV3 Development BoardPIC32MK MCM Motor Plugin ModuleLeadshine EL5-M0400-1-24 Motor | . |   |   | . Setting up MCHV3 Development Board . | Mount the PIC32MK MCM Motor Control Plug In Module on U11 header. | Place the “External Opamp Configuration” Matrix board at J4. | Motor Connections: . | Phase U - M1 | Phase V - M2 | Phase W - M3 | . | Encoder Connections: . | A+ : HA | B+ : HB | 5V : +5V | 0V : GND | . | Jumper Settings: . | J11 - VAC ( Short Pin 3 - 4) | J12 - IA ( Short Pin 1 - 2) | J13 - IB ( Short Pin 1 - 2) | J14 - Fault_IP/IBUS ( Short Pin 1 - 2) | . | Power the board with (110V/220V) AC mains. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html#setting-up-the-hardware"
  },"11": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCM",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch PUSHBUTTON to start the motor | Vary potentiometer to change the speed of the motor | Press switch to stop the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | PUSHBUTTON | To start or stop the motor | . |   |   | . | LED D2 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html#running-the-application",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html#running-the-application"
  },"12": {
    "doc": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCM",
    "title": "MCHV3 Development Board Setup for Encoder Mode PIC32MK MCM",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensored.html"
  },"13": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "MCHV3 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html#mchv3-development-board",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html#mchv3-development-board"
  },"14": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mchv3_pic32mk_mcm_pim.X | MCHV3 Development BoardPIC32MK MCM Motor Plugin ModuleLeadshine EL5-M0400-1-24 Motor | . |   |   | . Setting up MCHV3 Development Board . | Mount the PIC32MK MCM Motor Control Plug In Module on U11 header. | Place the “External Opamp Configuration” Matrix board at J4. | Motor Connections: . | Phase U - M1 | Phase V - M2 | Phase W - M3 | . | Jumper Settings: . | J11 - VAC ( Short Pin 3 - 4) | J12 - IA ( Short Pin 1 - 2) | J13 - IB ( Short Pin 1 - 2) | J14 - Fault_IP/IBUS ( Short Pin 1 - 2) | . | Power the board with (110V/220V) AC mains. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html#setting-up-the-hardware"
  },"15": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch PUSHBUTTON to start the motor | Vary potentiometer to change the speed of the motor | Press switch to stop the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | PUSHBUTTON | To start or stop the motor | . |   |   | . | LED D2 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html#running-the-application",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html#running-the-application"
  },"16": {
    "doc": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html",
    "relUrl": "/apps/docs/mchv3_pic32mk_mcm_pim_sensorless.html"
  },"17": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCF",
    "title": "MCLV2 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html#mclv2-development-board",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html#mclv2-development-board"
  },"18": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCF",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mclv2_pic32mk_mcf_pim.X | MCLV2 Development BoardPIC32MK MCF Motor Plugin ModuleHurst Motor with encoder | . |   |   | . Setting up MCLV2 Development Board . | Mount the PIC32MK MCF Motor Control Plug In Module on U9 header. | Place the “External Opamp Configuration” Matrix board at J14. | Motor Connections with MCLV2 Board: . | Motor | MCLV2 Board | . | Phase U | M1 | . | Phase V | M2 | . | Phase W | M3 | . | +5V | +5V | . | -5V | GND | . | A | HA | . | B | HB | . | Jumper Settings: . | JP1 - Curr, JP2 - Curr, JP3 - Curr | In order to use RS232 port for X2CScope Communication JP4 - UART, JP5 - UART | In order to use USB port for X2CScope Communication JP4 - USB, JP5 - USB | . | Power the board with a 24V DC supply using J2 or BP1-BP2. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html#setting-up-the-hardware"
  },"19": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCF",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch S2 to start the motor | Vary potentiometer to change the speed of the motor | Press switch S2 to stop the motor | Press switch S3 to change the direction of the motor | Press switch S2 again to start the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | Switch S2 | To start or stop the motor | . | Switch S3 | To change the direction of rotation. Direction toggle command is accepted only when motor is stationary. | . |   |   | . | LED D2 Status | Description | . | OFF | Motor spin direction is “positive” | . | ON | Motor spin direction is “negative” | . |   |   | . | LED D17 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html#running-the-application",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html#running-the-application"
  },"20": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCF",
    "title": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCF",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensored.html"
  },"21": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "MCLV2 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html#mclv2-development-board",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html#mclv2-development-board"
  },"22": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mclv2_pic32mk_mcf_pim.X | MCLV2 Development BoardPIC32MK MCF Motor Plugin ModuleHurst Motor with encoder | . |   |   | . Setting up MCLV2 Development Board . | Mount the PIC32MK MCF Motor Control Plug In Module on U9 header. | Place the “External Opamp Configuration” Matrix board at J14. | Motor Connections: . | Phase U - M1 | Phase V - M2 | Phase W - M3 | . | Jumper Settings: . | JP1 - Curr, JP2 - Curr, JP3 - Curr | In order to use RS232 port for X2CScope Communication JP4 - UART, JP5 - UART | In order to use USB port for X2CScope Communication JP4 - USB, JP5 - USB | . | Power the board with a 24V DC supply using J2 or BP1-BP2. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html#setting-up-the-hardware"
  },"23": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch S2 to start the motor | Vary potentiometer to change the speed of the motor | Press switch S2 to stop the motor | Press switch S3 to change the direction of the motor | Press switch S2 again to start the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | Switch S2 | To start or stop the motor | . | Switch S3 | To change the direction of rotation. Direction toggle command is accepted only when motor is stationary. | . |   |   | . | LED D2 Status | Description | . | OFF | Motor spin direction is “positive” | . | ON | Motor spin direction is “negative” | . |   |   | . | LED D17 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html#running-the-application",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html#running-the-application"
  },"24": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "title": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCF",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcf_pim_sensorless.html"
  },"25": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCM",
    "title": "MCLV2 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html#mclv2-development-board",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html#mclv2-development-board"
  },"26": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCM",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mclv2_pic32mk_mcm_pim.X | MCLV2 Development BoardPIC32MK MCM Motor Plugin ModuleHurst Motor with encoder | . |   |   | . Setting up MCLV2 Development Board . | Mount the PIC32MK MCM Motor Control Plug In Module on U9 header. | Place the “External Opamp Configuration” Matrix board at J14. | Motor Connections with MCLV2 Board: . | Motor | MCLV2 Board | . | Phase U | M1 | . | Phase V | M2 | . | Phase W | M3 | . | +5V | +5V | . | -5V | GND | . | A | HA | . | B | HB | . | Jumper Settings: . | JP1 - Curr, JP2 - Curr, JP3 - Curr | In order to use RS232 port for X2CScope Communication JP4 - UART, JP5 - UART | In order to use USB port for X2CScope Communication JP4 - USB, JP5 - USB | . | Power the board with a 24V DC supply using J2 or BP1-BP2. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html#setting-up-the-hardware"
  },"27": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCM",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch S2 to start the motor | Vary potentiometer to change the speed of the motor | Press switch S2 to stop the motor | Press switch S3 to change the direction of the motor | Press switch S2 again to start the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | Switch S2 | To start or stop the motor | . | Switch S3 | To change the direction of rotation. Direction toggle command is accepted only when motor is stationary. | . |   |   | . | LED D2 Status | Description | . | OFF | Motor spin direction is “positive” | . | ON | Motor spin direction is “negative” | . |   |   | . | LED D17 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html#running-the-application",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html#running-the-application"
  },"28": {
    "doc": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCM",
    "title": "MCLV2 Development Board Setup for Sensored Mode PIC32MK MCM",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensored.html"
  },"29": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "MCLV2 Development Board",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html#mclv2-development-board",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html#mclv2-development-board"
  },"30": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "Setting up the hardware",
    "content": "The following table shows the target hardware for the application projects. | Project Name | Hardware | . | mclv2_pic32mk_mcm_pim.X | MCLV2 Development BoardPIC32MK MCM Motor Plugin ModuleHurst Motor with encoder | . |   |   | . Setting up MCLV2 Development Board . | Mount the PIC32MK MCM Motor Control Plug In Module on U9 header. | Place the “External Opamp Configuration” Matrix board at J14. | Motor Connections: . | Phase U - M1 | Phase V - M2 | Phase W - M3 | . | Jumper Settings: . | JP1 - Curr, JP2 - Curr, JP3 - Curr | In order to use RS232 port for X2CScope Communication JP4 - UART, JP5 - UART | In order to use USB port for X2CScope Communication JP4 - USB, JP5 - USB | . | Power the board with a 24V DC supply using J2 or BP1-BP2. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. | Complete Setup . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html#setting-up-the-hardware",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html#setting-up-the-hardware"
  },"31": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "Running the Application",
    "content": ". | Build and Program the application using its IDE | Press switch S2 to start the motor | Vary potentiometer to change the speed of the motor | Press switch S2 to stop the motor | Press switch S3 to change the direction of the motor | Press switch S2 again to start the motor | Monitor graphs on X2C Scope | . Refer to the following tables for switch and LED details: . | Switch | Description | . | Switch S2 | To start or stop the motor | . | Switch S3 | To change the direction of rotation. Direction toggle command is accepted only when motor is stationary. | . |   |   | . | LED D2 Status | Description | . | OFF | Motor spin direction is “positive” | . | ON | Motor spin direction is “negative” | . |   |   | . | LED D17 Status | Description | . | OFF | No fault | . | ON | Fault is detected | . |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html#running-the-application",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html#running-the-application"
  },"32": {
    "doc": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "title": "MCLV2 Development Board Setup for Sensorless Mode PIC32MK MCM",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html",
    "relUrl": "/apps/docs/mclv2_pic32mk_mcm_pim_sensorless.html"
  },"33": {
    "doc": "License",
    "title": "License",
    "content": "IMPORTANT: READ CAREFULLY . MICROCHIP IS WILLING TO LICENSE THIS INTEGRATED SOFTWARE FRAMEWORK SOFTWARE AND ACCOMPANYING DOCUMENTATION OFFERED TO YOU ONLY ON THE CONDITION THAT YOU ACCEPT ALL OF THE FOLLOWING TERMS. TO ACCEPT THE TERMS OF THIS LICENSE, CLICK “I ACCEPT” AND PROCEED WITH THE DOWNLOAD OR INSTALL. IF YOU DO NOT ACCEPT THESE LICENSE TERMS, CLICK “I DO NOT ACCEPT,” AND DO NOT DOWNLOAD OR INSTALL THIS SOFTWARE. NON-EXCLUSIVE SOFTWARE LICENSE AGREEMENT FOR MICROCHIP MPLAB HARMONY INTEGRATED SOFTWARE FRAMEWORK . This Nonexclusive Software License Agreement (“Agreement”) is between you, your heirs, agents, successors and assigns (“Licensee”) and Microchip Technology Incorporated, a Delaware corporation, with a principal place of business at 2355 W. Chandler Blvd., Chandler, AZ 85224-6199, and its subsidiary, Microchip Technology (Barbados) II Incorporated (collectively, “Microchip”) for Microchip’s MPLAB Harmony Integrated Software Framework (“Software”) and accompanying documentation (“Documentation”). The Software and Documentation are licensed under this Agreement and not sold. U.S. copyright laws and international copyright treaties, and other intellectual property laws and treaties protect the Software and Documentation. Microchip reserves all rights not expressly granted to Licensee in this Agreement. | License and Sublicense Grant. (a) Definitions. As used this Agreement, the following terms shall have the meanings defined below: . (i) \\\"Licensee Products\\\" means Licensee products that use or incorporate Microchip Products. (ii) \\\"Microchip Product\\\" means Microchip 16-bit and 32-bit microcontrollers, digital signal controllers or other Microchip semiconductor products with PIC16 and PIC18 prefix and specifically excepting the CX870 and CY920, which are not covered under this Agreement, that use or implement the Software. (iii) \\\"Object Code\\\" means the Software computer programming code provided by Microchip that is in binary form (including related documentation, if any) and error corrections, improvements and updates to such code provided by Microchip in its sole discretion, if any. (iv) \\\"Source Code\\\" means the Software computer programming code provided by Microchip that may be printed out or displayed in human readable form (including related programmer comments and documentation, if any), and error corrections, improvements, updates, modifications and derivatives of such code developed by Microchip, Licensee or Third Party. (v) \\\"Third Party\\\" means Licensee's agents, representatives, consultants, clients, customers, or contract manufacturers. (vi) \\\"Third Party Products\\\" means Third Party products that use or incorporate Microchip Products. (b) Software License Grant. Subject to the terms of this Agreement, Microchip grants strictly to Licensee a personal, worldwide, non-exclusive, non-transferable limited license to use, modify (except as limited by Section 1(f) below), copy and distribute the Software only when the Software is embedded on a Microchip Product that is integrated into Licensee Product or Third Party Product pursuant to Section 2(d) below. Any portion of the Software (including derivatives or modifications thereof) may not be: . (i) embedded on a non-Microchip microcontroller or digital signal controller; (ii) distributed (in Source Code or Object Code), except as described in Section 2(d) below. (c) Documentation License Grant. Subject to all of the terms and conditions of this Agreement, Microchip grants strictly to Licensee a perpetual, worldwide, non-exclusive license to use the Documentation in support of Licensee’s use of the Software. (d) Sublicense Grants. Subject to terms of this Agreement, Licensee may grant a limited sublicense to a Third Party to use the Software as described below only if such Third Party expressly agrees to be bound by terms of confidentiality and limited use that are no broader in scope and duration than the confidentiality and limited use terms of this Agreement: . (i) Third Party may modify Source Code for Licensee, except as limited by Section 1(f) below. (ii) Third Party may program Software into Microchip Products for Licensee. (iii) Third Party may use Software to develop and/or manufacture Licensee Product. (iv) Third Party may use Software to develop and/or manufacture Third Party Products where either: (x) the sublicensed Software contains Source Code modified or otherwise optimized by Licensee for Third Party use; or (y) the sublicensed Software is programmed into Microchip Products by Licensee on behalf of such Third Party. (v) Third Party may use the Documentation in support of Third Party's authorized use of the Software in conformance with this Section 2(d). (e) Audit. Authorized representatives of Microchip shall have the right to reasonably inspect Licensee’s premises and to audit Licensee’s records and inventory of Licensee Products, whether located on Licensee’s premises or elsewhere at any time, announced or unannounced, and in its sole and absolute discretion, in order to ensure Licensee’s adherence to the terms of this Agreement. (f) License and Sublicense Limitation. This Section 1 does not grant Licensee or any Third Party the right to modify any dotstack™ Bluetooth® stack, profile, or iAP protocol included in the Software. | Third Party Requirements. Licensee acknowledges that it is Licensee’s responsibility to comply with any third party license terms or requirements applicable to the use of such third party software, specifications, systems, or tools, including but not limited to SEGGER Microcontroller GmbH &amp; Co. KG’s rights in the emWin software and certain libraries included herein. Microchip is not responsible and will not be held responsible in any manner for Licensee’s failure to comply with such applicable terms or requirements. | Open Source Components. Notwithstanding the license grants contained herein, Licensee acknowledges that certain components of the Software may be covered by so-called “open source” software licenses (“Open Source Components”). Open Source Components means any software licenses approved as open source licenses by the Open Source Initiative or any substantially similar licenses, including any license that, as a condition of distribution, requires Microchip to provide Licensee with certain notices and/or information related to such Open Source Components, or requires that the distributor make the software available in source code format. Microchip will use commercially reasonable efforts to identify such Open Source Components in a text file or “About Box” or in a file or files referenced thereby (and will include any associated license agreement, notices, and other related information therein), or the Open Source Components will contain or be accompanied by its own license agreement. To the extent required by the licenses covering Open Source Components, the terms of such licenses will apply in lieu of the terms of this Agreement, and Microchip hereby represents and warrants that the licenses granted to such Open Source Components will be no less broad than the license granted in Section 1(b). To the extent the terms of the licenses applicable to Open Source Components prohibit any of the restrictions in this Agreement with respect to such Open Source Components, such restrictions will not apply to such Open Source Components. | Licensee’s Obligations. (a) Licensee will ensure Third Party compliance with the terms of this Agreement. (b) Licensee will not: (i) engage in unauthorized use, modification, disclosure or distribution of Software or Documentation, or its derivatives; (ii) use all or any portion of the Software, Documentation, or its derivatives except in conjunction with Microchip Products; or (iii) reverse engineer (by disassembly, decompilation or otherwise) Software or any portion thereof; or (iv) copy or reproduce all or any portion of Software, except as specifically allowed by this Agreement or expressly permitted by applicable law notwithstanding the foregoing limitations. (c) Licensee must include Microchip’s copyright, trademark and other proprietary notices in all copies of the Software, Documentation, and its derivatives. Licensee may not remove or alter any Microchip copyright or other proprietary rights notice posted in any portion of the Software or Documentation. (d) Licensee will defend, indemnify and hold Microchip and its subsidiaries harmless from and against any and all claims, costs, damages, expenses (including reasonable attorney’s fees), liabilities, and losses, including without limitation product liability claims, directly or indirectly arising from or related to: (i) the use, modification, disclosure or distribution of the Software, Documentation or any intellectual property rights related thereto; (ii) the use, sale, and distribution of Licensee Products or Third Party Products, and (iii) breach of this Agreement. THE FOREGOING STATES THE SOLE AND EXCLUSIVE LIABILITY OF THE PARTIES FOR INTELLECTUAL PROPERTY RIGHTS INFRINGEMENT. | Confidentiality. (a) Licensee agrees that the Software (including but not limited to the Source Code, Object Code and library files) and its derivatives, Documentation and underlying inventions, algorithms, know-how and ideas relating to the Software and the Documentation are proprietary information belonging to Microchip and its licensors (“Proprietary Information”). Except as expressly and unambiguously allowed herein, Licensee will hold in confidence and not use or disclose any Proprietary Information and shall similarly bind its employees and Third Party(ies) in writing. Proprietary Information shall not include information that: (i) is in or enters the public domain without breach of this Agreement and through no fault of the receiving party; (ii) the receiving party was legally in possession of prior to receiving it; (iii) the receiving party can demonstrate was developed by it independently and without use of or reference to the disclosing party’s Proprietary Information; or (iv) the receiving party receives from a third party without restriction on disclosure. If Licensee is required to disclose Proprietary Information by law, court order, or government agency, such disclosure shall not be deemed a breach of this Agreement provided that Licensee gives Microchip prompt notice of such requirement in order to allow Microchip to object or limit such disclosure, Licensee cooperates with Microchip to protect Proprietary Information, and Licensee complies with any protective order in place and discloses only the information required by process of law. (b) Licensee agrees that the provisions of this Agreement regarding unauthorized use and nondisclosure of the Software, Documentation and related Proprietary Rights are necessary to protect the legitimate business interests of Microchip and its licensors and that monetary damages alone cannot adequately compensate Microchip or its licensors if such provisions are violated. Licensee, therefore, agrees that if Microchip alleges that Licensee or Third Party has breached or violated such provision then Microchip will have the right to petition for injunctive relief, without the requirement for the posting of a bond, in addition to all other remedies at law or in equity. | Ownership of Proprietary Rights. (a) Microchip and its licensors retain all right, title and interest in and to the Software and Documentation (“Proprietary Rights”) including, but not limited to: (i) patent, copyright, trade secret and other intellectual property rights in the Software, Documentation, and underlying technology; (ii) the Software as implemented in any device or system, all hardware and software implementations of the Software technology (expressly excluding Licensee and Third Party code developed and used in conformance with this Agreement solely to interface with the Software and Licensee Products and/or Third Party Products); and (iii) all modifications and derivative works thereof (by whomever produced). Further, modifications and derivative works shall be considered works made for hire with ownership vesting in Microchip on creation. To the extent such modifications and derivatives do not qualify as a “work for hire,” Licensee hereby irrevocably transfers, assigns and conveys the exclusive copyright thereof to Microchip, free and clear of any and all liens, claims or other encumbrances, to the fullest extent permitted by law. Licensee and Third Party use of such modifications and derivatives is limited to the license rights described in Section 1 above. (b) Licensee shall have no right to sell, assign or otherwise transfer all or any portion of the Software, Documentation or any related intellectual property rights except as expressly set forth in this Agreement. | Termination of Agreement. Without prejudice to any other rights, this Agreement terminates immediately, without notice by Microchip, upon a failure by License or Third Party to comply with any provision of this Agreement. Further, Microchip may also terminate this Agreement upon reasonable belief that Licensee or Third Party have failed to comply with this Agreement. Upon termination, Licensee and Third Party will immediately stop using the Software, Documentation, and derivatives thereof, and immediately destroy all such copies, remove Software from any of Licensee’s tangible media and from systems on which the Software exists, and stop using, disclosing, copying, or reproducing Software (even as may be permitted by this Agreement). Termination of this Agreement will not affect the right of any end user or consumer to use Licensee Products or Third Party Products provided that such products were purchased prior to the termination of this Agreement. | Dangerous Applications. The Software is not fault-tolerant and is not designed, manufactured, or intended for use in hazardous environments requiring failsafe performance (“Dangerous Applications”). Dangerous Applications include the operation of nuclear facilities, aircraft navigation, aircraft communication systems, air traffic control, direct life support machines, weapons systems, or any environment or system in which the failure of the Software could lead directly or indirectly to death, personal injury, or severe physical or environmental damage. Microchip specifically disclaims (a) any express or implied warranty of fitness for use of the Software in Dangerous Applications; and (b) any and all liability for loss, damages and claims resulting from the use of the Software in Dangerous Applications. | Warranties and Disclaimers. THE SOFTWARE AND DOCUMENTATION ARE PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION, ANY WARRANTY OF MERCHANTABILITY, TITLE, NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE. MICROCHIP AND ITS LICENSORS ASSUME NO RESPONSIBILITY FOR THE ACCURACY, RELIABILITY OR APPLICATION OF THE SOFTWARE OR DOCUMENTATION. MICROCHIP AND ITS LICENSORS DO NOT WARRANT THAT THE SOFTWARE WILL MEET REQUIREMENTS OF LICENSEE OR THIRD PARTY, BE UNINTERRUPTED OR ERROR-FREE. MICROCHIP AND ITS LICENSORS HAVE NO OBLIGATION TO CORRECT ANY DEFECTS IN THE SOFTWARE. LICENSEE AND THIRD PARTY ASSUME THE ENTIRE RISK ARISING OUT OF USE OR PERFORMANCE OF THE SOFTWARE AND DOCUMENTATION PROVIDED UNDER THIS AGREEMENT. | Limited Liability. IN NO EVENT SHALL MICROCHIP OR ITS LICENSORS BE LIABLE OR OBLIGATED UNDER CONTRACT, NEGLIGENCE, STRICT LIABILITY, CONTRIBUTION, BREACH OF WARRANTY, OR OTHER LEGAL OR EQUITABLE THEORY FOR ANY DIRECT OR INDIRECT DAMAGES OR EXPENSES INCLUDING BUT NOT LIMITED TO INCIDENTAL, SPECIAL, INDIRECT, PUNITIVE OR CONSEQUENTIAL DAMAGES, LOST PROFITS OR LOST DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS, TECHNOLOGY, SERVICES, OR ANY CLAIMS BY THIRD PARTIES (INCLUDING BUT NOT LIMITED TO ANY DEFENSE THEREOF), OR OTHER SIMILAR COSTS. The aggregate and cumulative liability of Microchip and its licensors for damages hereunder will in no event exceed $1000 or the amount Licensee paid Microchip for the Software and Documentation, whichever is greater. Licensee acknowledges that the foregoing limitations are reasonable and an essential part of this Agreement. | General. (a) Governing Law, Venue and Waiver of Trial by Jury. THIS AGREEMENT SHALL BE GOVERNED BY AND CONSTRUED UNDER THE LAWS OF THE STATE OF ARIZONA AND THE UNITED STATES WITHOUT REGARD TO CONFLICTS OF LAWS PROVISIONS. Licensee agrees that any disputes arising out of or related to this Agreement, Software or Documentation shall be brought in the courts of State of Arizona. The parties agree to waive their rights to a jury trial in actions relating to this Agreement. (b) Attorneys’ Fees. If either Microchip or Licensee employs attorneys to enforce any rights arising out of or relating to this Agreement, the prevailing party shall be entitled to recover its reasonable attorneys’ fees, costs and other expenses. (c) Entire Agreement. This Agreement shall constitute the entire agreement between the parties with respect to the subject matter hereof. It shall not be modified except by a written agreement signed by an authorized representative of Microchip. (d) Severability. If any provision of this Agreement shall be held by a court of competent jurisdiction to be illegal, invalid or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect and enforceable. (e) Waiver. No waiver of any breach of any provision of this Agreement shall constitute a waiver of any prior, concurrent or subsequent breach of the same or any other provisions hereof, and no waiver shall be effective unless made in writing and signed by an authorized representative of the waiving party. (f) Export Regulation. Licensee agrees to comply with all export laws and restrictions and regulations of the Department of Commerce or other United States or foreign agency or authority. (g) Survival. The indemnities, obligations of confidentiality, and limitations on liability described herein, and any right of action for breach of this Agreement prior to termination shall survive any termination of this Agreement. (h) Assignment. Neither this Agreement nor any rights, licenses or obligations hereunder, may be assigned by Licensee without the prior written approval of Microchip except pursuant to a merger, sale of all assets of Licensee or other corporate reorganization, provided that assignee agrees in writing to be bound by the Agreement. (i) Restricted Rights. Use, duplication or disclosure by the United States Government is subject to restrictions set forth in subparagraphs (a) through (d) of the Commercial Computer-Restricted Rights clause of FAR 52.227-19 when applicable, or in subparagraph (c)(1)(ii) of the Rights in Technical Data and Computer Software clause at DFARS 252.227-7013, and in similar clauses in the NASA FAR Supplement. Contractor/manufacturer is Microchip Technology Inc., 2355 W. Chandler Blvd., Chandler, AZ 85225-6199. | . If Licensee has any questions about this Agreement, please write to Microchip Technology Inc., 2355 W. Chandler Blvd., Chandler, AZ 85224-6199 USA, ATTN: Marketing. Microchip MPLAB Harmony Integrated Software Framework. Copyright © 2015 Microchip Technology Inc. All rights reserved. License Rev. 11/2015 . Copyright © 2015 Qualcomm Atheros, Inc. All Rights Reserved. Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies. THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE. ",
    "url": "http://localhost:4000/mc_apps_pic32mk/mplab_harmony_license.html",
    "relUrl": "/mplab_harmony_license.html"
  },"34": {
    "doc": "PMSM FOC using PLL Estimator",
    "title": "PMSM FOC using PLL Estimator",
    "content": "This example application shows how to control the Permanent Magnet Synchronous Motor (PMSM) with PLL Estimator based Field Oriented Control (FOC) on a PIC32MK Micro-controller. ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#pmsm-foc-using-pll-estimator",
    "relUrl": "/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#pmsm-foc-using-pll-estimator"
  },"35": {
    "doc": "PMSM FOC using PLL Estimator",
    "title": "Description",
    "content": "Permanent Magnet Synchronous Motor (PMSM) is controlled using Field Oriented Control (FOC). Rotor position and speed is determined using PLL estimator technique. Motor start/stop operation is controlled by the switch and motor speed can be changed by the on-board potentiometer. Waveforms and variables can be monitored runtime using X2CScope. Key features enabled in this project are: . | Dual shunt current measurement | Speed control loop | Field weakening | Flying Start Capability | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#description",
    "relUrl": "/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#description"
  },"36": {
    "doc": "PMSM FOC using PLL Estimator",
    "title": "MHC Project Configurations",
    "content": ". | PMSM_FOC: . This component configures FOC algorithm parameters, motor parameters and motor control board parameters. It connects to underlying peripheral libraries ADCHS and MCPWM. This components auto configures ADC channels and PWM channels as per PMSM_FOC component configurations. | ADCHS Peripheral: . The ADCHS is used to measure analog quantities. Four channels are used to measure the Phase Current U, the Phase Current V, the DC Bus Voltage and the Potentiometer. Conversion is triggered at the PWM (zero match + offset of the switch delay) . | MCPWM Peripheral: . This peripheral is used to generated three phase synchronous PWM waveforms. Fault functionality is also enabled to switch off the output waveforms asynchronously. | X2CScope: . This component adds X2C scope protocol code. This uses UART to communicate to the host PC. X2CScope allows user to monitor variables runtime. | UART Peripheral: . The UART is used for X2CScope communication to observe graphs and variable values in run time . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#mhc-project-configurations",
    "relUrl": "/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#mhc-project-configurations"
  },"37": {
    "doc": "PMSM FOC using PLL Estimator",
    "title": "Control Algorithm",
    "content": "This section briefly explains the FOC control algorithm, software design and implementation. Refer to Application note AN2520 for the PLL estimator based sensor-less FOC technique in detail. Field Oriented Control is the technique used to achieve the decoupled control of torque and flux. This is done by transforming the stator current quantities (phase currents) from stationary reference frame to torque and flux producing currents components in rotating reference frame using mathematical transformations. The Field Oriented Control is done as follows: . | Measure the motor phase currents. | Transform them into the two phase system (a, b) using the Clarke transformation. | Calculate the rotor position angle. | Transform stator currents into the d,q-coordinate system using the Park transformation. | The stator current torque (iq) and flux (id) producing components are controlled separately by the controllers. | The output stator voltage space vector is transformed back from the d,q-coordinate system into the two phase system fixed with the stator by the Inverse Park transformation. | Using the space vector modulation, the three-phase output voltage is generated. | . PLL estimator : . This estimator uses PLL structure to estimate the rotor position and thus speed. Its operating principle is based on the fact that the d-component of the Back Electromotive Force (BEMF) must be equal to zero at a steady state functioning mode. It can not estimate the rotor angle at lower rotor speeds because of very low back EMF. So, open loop startup is used till required minimum speed is achieved. The following block diagram shows the software realization of the FOC algorithm. ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#control-algorithm",
    "relUrl": "/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#control-algorithm"
  },"38": {
    "doc": "PMSM FOC using PLL Estimator",
    "title": "Software Design",
    "content": "Please refer to PMSM_FOC Library for state machine, flow charts and detailed software design. ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#software-design",
    "relUrl": "/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#software-design"
  },"39": {
    "doc": "PMSM FOC using PLL Estimator",
    "title": "Development Kits",
    "content": "MCLV2 with PIC32MK Family Motor Control PIM . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. Path of the application within the repository is apps/pmsm_foc_pll_estimator_pic32_mk . To build the application, refer to the following table and open the project using its IDE. | Project Name | Description | Demo User Guide | . | mclv2_pic32mk_mcf_pim.X | MPLABX project for MCLV2 board with PIC32MK MCF PIM | MCLV2 with PIC32MK MCF PIM | . | mclv2_pic32mk_mcm_pim.X | MPLABX project for MCLV2 board with PIC32MK MCM PIM | MCLV2 with PIC32MK MCM PIM | . |   |   |   | . MCHV3 with PIC32MK Family Motor Control PIM . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. Path of the application within the repository is apps/pmsm_foc_pll_estimator_pic32_mk . To build the application, refer to the following table and open the project using its IDE. | Project Name | Description | Demo User Guide | . | mchv3_pic32mk_mcf_pim.X | MPLABX project for MCHV3 board with PIC32MK MCF PIM | MCHV3 with PIC32MK MCF PIM | . | mchv3_pic32mk_mcm_pim.X | MPLABX project for MCHV3 board with PIC32MK MCM PIM | MCHV3 with PIC32MK MCM PIM | . |   |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#development-kits",
    "relUrl": "/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html#development-kits"
  },"40": {
    "doc": "PMSM FOC using PLL Estimator",
    "title": "PMSM FOC using PLL Estimator",
    "content": ". ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html",
    "relUrl": "/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html"
  },"41": {
    "doc": "PMSM FOC using Quadrature Encoder",
    "title": "PMSM FOC using Quadrature Encoder",
    "content": "This example application shows how to control the Permanent Magnet Synchronous Motor (PMSM) with Quadrature Encoder based Field Oriented Control (FOC) on a PIC32MK Micro-controller. ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html#pmsm-foc-using-quadrature-encoder",
    "relUrl": "/apps/pmsm_foc_encoder_pic32_mk/readme.html#pmsm-foc-using-quadrature-encoder"
  },"42": {
    "doc": "PMSM FOC using Quadrature Encoder",
    "title": "Description",
    "content": "Permanent Magnet Synchronous Motor (PMSM) is controlled using Field Oriented Control (FOC). Rotor position and speed is determined using Quadrature Encoder. Motor start/stop operation is controlled by the switch and motor speed can be changed by the on-board potentiometer. Waveforms and variables can be monitored runtime using X2CScope. Key features enabled in this project are: . | Dual shunt current measurement | Speed control loop | Field weakening | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html#description",
    "relUrl": "/apps/pmsm_foc_encoder_pic32_mk/readme.html#description"
  },"43": {
    "doc": "PMSM FOC using Quadrature Encoder",
    "title": "MHC Project Configurations",
    "content": ". | PMSM_FOC: . This component configures FOC algorithm parameters, motor parameters and motor control board parameters. It connects to underlying peripheral libraries ADCHS and MCPWM. This components auto configures ADC channels and PWM channels as per PMSM_FOC component configurations. | ADCHS Peripheral: . The ADCHS is used to measure analog quantities. Four channels are used to measure the Phase Current U, the Phase Current V, the DC Bus Voltage and the Potentiometer. Conversion is triggered at the PWM (zero match + offset of the switch delay) . | MCPWM Peripheral: . This peripheral is used to generated three phase synchronous PWM waveforms. Fault functionality is also enabled to switch off the output waveforms asynchronously. | QEI Peripheral: . This peripheral is used to decode the rotor position and speed from quadrature encoder signals. | X2CScope: . This component adds X2C scope protocol code. This uses UART to communicate to the host PC. X2CScope allows user to monitor variables runtime. | UART Peripheral: . The UART is used for X2CScope communication to observe graphs and variable values in run time . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html#mhc-project-configurations",
    "relUrl": "/apps/pmsm_foc_encoder_pic32_mk/readme.html#mhc-project-configurations"
  },"44": {
    "doc": "PMSM FOC using Quadrature Encoder",
    "title": "Control Algorithm",
    "content": "This section briefly explains the FOC control algorithm, software design and implementation. Refer to Application note AN2520 for the PLL estimator based sensor-less FOC technique in detail. Field Oriented Control is the technique used to achieve the decoupled control of torque and flux. This is done by transforming the stator current quantities (phase currents) from stationary reference frame to torque and flux producing currents components in rotating reference frame using mathematical transformations. The Field Oriented Control is done as follows: . | Measure the motor phase currents. | Transform them into the two phase system (a, b) using the Clarke transformation. | Measure the rotor position angle. | Transform stator currents into the d,q-coordinate system using the Park transformation. | The stator current torque (iq) and flux (id) producing components are controlled separately by the controllers. | The output stator voltage space vector is transformed back from the d,q-coordinate system into the two phase system fixed with the stator by the Inverse Park transformation. | Using the space vector modulation, the three-phase output voltage is generated. | . The following block diagram shows the software realization of the FOC algorithm. ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html#control-algorithm",
    "relUrl": "/apps/pmsm_foc_encoder_pic32_mk/readme.html#control-algorithm"
  },"45": {
    "doc": "PMSM FOC using Quadrature Encoder",
    "title": "Software Design",
    "content": "Please refer to PMSM_FOC Library for state machine, flow charts and detailed software design. ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html#software-design",
    "relUrl": "/apps/pmsm_foc_encoder_pic32_mk/readme.html#software-design"
  },"46": {
    "doc": "PMSM FOC using Quadrature Encoder",
    "title": "Development Kits",
    "content": "MCLV2 with PIC32MK Family Motor Control PIM . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. Path of the application within the repository is apps/pmsm_foc_encoder_pic32_mk . To build the application, refer to the following table and open the project using its IDE. | Project Name | Description | Demo User Guide | . | mclv2_pic32mk_mcf_pim.X | MPLABX project for MCLV2 board with PIC32MK MCF PIM | MCLV2 with PIC32MK MCF PIM | . | mclv2_pic32mk_mcm_pim.X | MPLABX project for MCLV2 board with PIC32MK MCM PIM | MCLV2 with PIC32MK MCM PIM | . |   |   |   | . MCHV3 with PIC32MK Family Motor Control PIM . Downloading and building the application . To clone or download this application from Github, go to the main page of this repository and then click Clone button to clone this repository or download as zip file. This content can also be downloaded using content manager by following these instructions. Path of the application within the repository is apps/pmsm_foc_encoder_pic32_mk . To build the application, refer to the following table and open the project using its IDE. | Project Name | Description | Demo User Guide | . | mchv3_pic32mk_mcf_pim.X | MPLABX project for MCHV3 board with PIC32MK MCF PIM | MCHV3 with PIC32MK MCF PIM | . | mchv3_pic32mk_mcm_pim.X | MPLABX project for MCHV3 board with PIC32MK MCM PIM | MCHV3 with PIC32MK MCM PIM | . |   |   |   | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html#development-kits",
    "relUrl": "/apps/pmsm_foc_encoder_pic32_mk/readme.html#development-kits"
  },"47": {
    "doc": "PMSM FOC using Quadrature Encoder",
    "title": "PMSM FOC using Quadrature Encoder",
    "content": ". ",
    "url": "http://localhost:4000/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html",
    "relUrl": "/apps/pmsm_foc_encoder_pic32_mk/readme.html"
  },"48": {
    "doc": "Release notes",
    "title": "Microchip MPLAB® Harmony 3 Release Notes",
    "content": " ",
    "url": "http://localhost:4000/mc_apps_pic32mk/release_notes.html#microchip-mplab-harmony-3-release-notes",
    "relUrl": "/release_notes.html#microchip-mplab-harmony-3-release-notes"
  },"49": {
    "doc": "Release notes",
    "title": "Microchip MPLAB® Harmony 3 Motor Control Application Examples for PIC32MK family v3.0.0",
    "content": "Applications . Applications migrated from motor_control repository to this application repository for PIC32MK family. | Development Board | Number of Applications | . | dsPICDEM™ MCLV-2 Low Voltage Development Board | 4 | . | dsPICDEM™ MCHV-3 High Voltage Development Board | 4 | . |   |   | . Required MPLAB Harmony v3 Modules . | csp v3.8.3 | x2c v1.1.3 | motor_control v3.6.0 | dev_packs v3.8.0 | mhc v3.6.5 | . Known Issues . | pmsm_foc_encoder_pic32_mk_mcm_mchv3 and pmsm_foc_encoder_pic32_mk_mcf_mchv3 application running on dsPICDEM MCHV-3 requires increasing bandwidth of the quadrature encoder signal filter to maintain signal integrity of quadrature sensor signals at higher motor speeds. Without these modifications, motor operation may fail at higher speeds. | Reduce the capacitance value of C25, C26 and C27 from 100pF to 10pF 50V NPO 0805 | . | . Development Tools . | MPLAB X IDE v5.45 | MPLAB XC32 C/C++ Compiler v2.50 | MPLAB X IDE plug-ins: . | MPLAB Harmony Configurator (MHC) v3.6.2 | X2CScope v1.3.0. | . | . ",
    "url": "http://localhost:4000/mc_apps_pic32mk/release_notes.html#microchip-mplab-harmony-3-motor-control-application-examples-for-pic32mk-family-v300",
    "relUrl": "/release_notes.html#microchip-mplab-harmony-3-motor-control-application-examples-for-pic32mk-family-v300"
  },"50": {
    "doc": "Release notes",
    "title": "Release notes",
    "content": ". ",
    "url": "http://localhost:4000/mc_apps_pic32mk/release_notes.html",
    "relUrl": "/release_notes.html"
  },"51": {
    "doc": "Motor Control Application Examples for PIC32MK family",
    "title": "Motor Control Application Examples for PIC32MK family",
    "content": "# Microchip MPLAB® Harmony 3 Motor Control Application Examples for PIC32MK family MPLAB Harmony 3 is an extension of the MPLAB® ecosystem for creating embedded firmware solutions for Microchip 32-bit SAM and PIC32 microcontroller and microprocessor devices. Refer to the following links for more information. - [Microchip PIC32MK MCU Family](https://www.microchip.com/design-centers/32-bit/pic-32-bit-mcus/pic32mk-family) - [Microchip 32-bit MCUs for Motor Control Applications](https://www.microchip.com/design-centers/motor-control-and-drive/control-products/32-bit-solutions) - [Microchip 32-bit MCUs](https://www.microchip.com/design-centers/32-bit) - [Microchip 32-bit MPUs](https://www.microchip.com/design-centers/32-bit-mpus) - [Microchip MPLAB X IDE](https://www.microchip.com/mplab/mplab-x-ide) - [Microchip MPLAB Harmony](https://www.microchip.com/mplab/mplab-harmony) - [Microchip MPLAB Harmony Pages](https://microchip-mplab-harmony.github.io/) This repository contains the MPLAB® Harmony 3 Motor Control application exmaples for PIC32MK family. Users can use these examples as a reference for developing their own motor control applications. Refer to the following links for release notes and licensing information. - [Release Notes](/mc_apps_pic32mk/release_notes.html) - [MPLAB Harmony License](/mc_apps_pic32mk/mplab_harmony_license.html) ## Contents Summary | Folder | Description |------------|-----------------------------------------------------------| apps | Demonstration applications for Motor Control | docs | Contains documentation in html format for offline viewing (to be used only after cloning this repository onto a local machine). Use [github pages](https://microchip-mplab-harmony.github.io/mc_apps_pic32mk/) of this repository for viewing it online.||| ## Configurable Motor Control Examples (MHC code-genaration) The following applications are provided to demonstrate the typical or interesting usage models of motor control algorithms. These applications are generated using PMSM_FOC component and are fully configurable. | Name | Description|:---------|:-----------| [PMSM FOC using PLL Estimator](/mc_apps_pic32mk/apps/pmsm_foc_pll_estimator_pic32_mk/readme.html) | Sensorless Field Oriented Control of PMSM using PLL Estimator | [PMSM FOC using Quadrature Encoder](/mc_apps_pic32mk/apps/pmsm_foc_encoder_pic32_mk/readme.html) | Sensor Field Oriented Control of PMSM using Quadrature Encoder ||| [![License](https://img.shields.io/badge/license-Harmony%20license-orange.svg)](https://github.com/Microchip-MPLAB-Harmony/mc/blob/master/mplab_harmony_license.md) [![Latest release](https://img.shields.io/github/release/Microchip-MPLAB-Harmony/mc_apps_pic32mk.svg)](https://github.com/Microchip-MPLAB-Harmony/mc/releases/latest) [![Latest release date](https://img.shields.io/github/release-date/Microchip-MPLAB-Harmony/mc_apps_pic32mk.svg)](https://github.com/Microchip-MPLAB-Harmony/mc/releases/latest) [![Commit activity](https://img.shields.io/github/commit-activity/y/Microchip-MPLAB-Harmony/mc_apps_pic32mk.svg)](https://github.com/Microchip-MPLAB-Harmony/mc/graphs/commit-activity) [![Contributors](https://img.shields.io/github/contributors-anon/Microchip-MPLAB-Harmony/mc_apps_pic32mk.svg)]() ____ [![Follow us on Youtube](https://img.shields.io/badge/Youtube-Follow%20us%20on%20Youtube-red.svg)](https://www.youtube.com/user/MicrochipTechnology) [![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20us%20on%20LinkedIn-blue.svg)](https://www.linkedin.com/company/microchip-technology) [![Follow us on Facebook](https://img.shields.io/badge/Facebook-Follow%20us%20on%20Facebook-blue.svg)](https://www.facebook.com/microchiptechnology/) [![Follow us on Twitter](https://img.shields.io/twitter/follow/MicrochipTech.svg?style=social)](https://twitter.com/MicrochipTech) [![](https://img.shields.io/github/stars/Microchip-MPLAB-Harmony/mc_apps_pic32mk.svg?style=social)]() [![](https://img.shields.io/github/watchers/Microchip-MPLAB-Harmony/mc_apps_pic32mk.svg?style=social)]() ",
    "url": "http://localhost:4000/mc_apps_pic32mk/",
    "relUrl": "/"
  }
}
`;
var data_for_search

var repo_name = "mc_apps_pic32mk";
var doc_folder_name = "docs";
var localhost_path = "http://localhost:4000/";
var home_index_string = "Microchip MPLAB® Harmony 3 Motor Control Application Examples for PIC32MK family";

(function (jtd, undefined) {

// Event handling

jtd.addEvent = function(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
}
jtd.removeEvent = function(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on'+type, handler); else el.removeEventListener(type, handler);
}
jtd.onReady = function(ready) {
  // in case the document is already rendered
  if (document.readyState!='loading') ready();
  // modern browsers
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', ready);
  // IE <= 8
  else document.attachEvent('onreadystatechange', function(){
      if (document.readyState=='complete') ready();
  });
}

// Show/hide mobile menu

function initNav() {
  jtd.addEvent(document, 'click', function(e){
    var target = e.target;
    while (target && !(target.classList && target.classList.contains('nav-list-expander'))) {
      target = target.parentNode;
    }
    if (target) {
      e.preventDefault();
      target.parentNode.classList.toggle('active');
    }
  });

  const siteNav = document.getElementById('site-nav');
  const mainHeader = document.getElementById('main-header');
  const menuButton = document.getElementById('menu-button');

  jtd.addEvent(menuButton, 'click', function(e){
    e.preventDefault();

    if (menuButton.classList.toggle('nav-open')) {
      siteNav.classList.add('nav-open');
      mainHeader.classList.add('nav-open');
    } else {
      siteNav.classList.remove('nav-open');
      mainHeader.classList.remove('nav-open');
    }
  });
}
// Site search

function initSearch() {

    data_for_search = JSON.parse(myVariable);
    lunr.tokenizer.separator = /[\s/]+/

    var index = lunr(function () {
        this.ref('id');
        this.field('title', { boost: 200 });
        this.field('content', { boost: 2 });
        this.field('url');
        this.metadataWhitelist = ['position']

        var location = document.location.pathname;
        var path = location.substring(0, location.lastIndexOf("/"));
        var directoryName = path.substring(path.lastIndexOf("/")+1);

        var cur_path_from_repo = path.substring(path.lastIndexOf(repo_name));

        // Decrement depth by 2 as HTML files are placed in repo_name/doc_folder_name
        var cur_depth_from_doc_folder = (cur_path_from_repo.split("/").length - 2);

        var rel_path_to_doc_folder = "";

        if (cur_depth_from_doc_folder == 0) {
            rel_path_to_doc_folder = "./"
        }
        else {
            for (var i = 0; i < cur_depth_from_doc_folder; i++)
            {
                rel_path_to_doc_folder = rel_path_to_doc_folder + "../"
            }
        }

        for (var i in data_for_search) {

            data_for_search[i].url = data_for_search[i].url.replace(localhost_path + repo_name, rel_path_to_doc_folder);

            if (data_for_search[i].title == home_index_string)
            {
                data_for_search[i].url = data_for_search[i].url + "index.html"
            }

            this.add({
                id: i,
                title: data_for_search[i].title,
                content: data_for_search[i].content,
                url: data_for_search[i].url
            });
        }
    });

    searchLoaded(index, data_for_search);
}function searchLoaded(index, docs) {
  var index = index;
  var docs = docs;
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var mainHeader = document.getElementById('main-header');
  var currentInput;
  var currentSearchIndex = 0;

  function showSearch() {
    document.documentElement.classList.add('search-active');
  }

  function hideSearch() {
    document.documentElement.classList.remove('search-active');
  }

  function update() {
    currentSearchIndex++;

    var input = searchInput.value;
    if (input === '') {
      hideSearch();
    } else {
      showSearch();
      // scroll search input into view, workaround for iOS Safari
      window.scroll(0, -1);
      setTimeout(function(){ window.scroll(0, 0); }, 0);
    }
    if (input === currentInput) {
      return;
    }
    currentInput = input;
    searchResults.innerHTML = '';
    if (input === '') {
      return;
    }

    var results = index.query(function (query) {
      var tokens = lunr.tokenizer(input)
      query.term(tokens, {
        boost: 10
      });
      query.term(tokens, {
        wildcard: lunr.Query.wildcard.TRAILING
      });
    });

    if ((results.length == 0) && (input.length > 2)) {
      var tokens = lunr.tokenizer(input).filter(function(token, i) {
        return token.str.length < 20;
      })
      if (tokens.length > 0) {
        results = index.query(function (query) {
          query.term(tokens, {
            editDistance: Math.round(Math.sqrt(input.length / 2 - 1))
          });
        });
      }
    }

    if (results.length == 0) {
      var noResultsDiv = document.createElement('div');
      noResultsDiv.classList.add('search-no-result');
      noResultsDiv.innerText = 'No results found';
      searchResults.appendChild(noResultsDiv);

    } else {
      var resultsList = document.createElement('ul');
      resultsList.classList.add('search-results-list');
      searchResults.appendChild(resultsList);

      addResults(resultsList, results, 0, 10, 100, currentSearchIndex);
    }

    function addResults(resultsList, results, start, batchSize, batchMillis, searchIndex) {
      if (searchIndex != currentSearchIndex) {
        return;
      }
      for (var i = start; i < (start + batchSize); i++) {
        if (i == results.length) {
          return;
        }
        addResult(resultsList, results[i]);
      }
      setTimeout(function() {
        addResults(resultsList, results, start + batchSize, batchSize, batchMillis, searchIndex);
      }, batchMillis);
    }

    function addResult(resultsList, result) {
      var doc = docs[result.ref];

      var resultsListItem = document.createElement('li');
      resultsListItem.classList.add('search-results-list-item');
      resultsList.appendChild(resultsListItem);

      var resultLink = document.createElement('a');
      resultLink.classList.add('search-result');
      resultLink.setAttribute('href', doc.url);
      resultsListItem.appendChild(resultLink);

      var resultTitle = document.createElement('div');
      resultTitle.classList.add('search-result-title');
      resultLink.appendChild(resultTitle);

      var resultDoc = document.createElement('div');
      resultDoc.classList.add('search-result-doc');
      resultDoc.innerHTML = '<svg viewBox="0 0 24 24" class="search-result-icon"><use xlink:href="#svg-doc"></use></svg>';
      resultTitle.appendChild(resultDoc);

      var resultDocTitle = document.createElement('div');
      resultDocTitle.classList.add('search-result-doc-title');
      resultDocTitle.innerHTML = doc.doc;
      resultDoc.appendChild(resultDocTitle);
      var resultDocOrSection = resultDocTitle;

      if (doc.doc != doc.title) {
        resultDoc.classList.add('search-result-doc-parent');
        var resultSection = document.createElement('div');
        resultSection.classList.add('search-result-section');
        resultSection.innerHTML = doc.title;
        resultTitle.appendChild(resultSection);
        resultDocOrSection = resultSection;
      }

      var metadata = result.matchData.metadata;
      var titlePositions = [];
      var contentPositions = [];
      for (var j in metadata) {
        var meta = metadata[j];
        if (meta.title) {
          var positions = meta.title.position;
          for (var k in positions) {
            titlePositions.push(positions[k]);
          }
        }
        if (meta.content) {
          var positions = meta.content.position;
          for (var k in positions) {
            var position = positions[k];
            var previewStart = position[0];
            var previewEnd = position[0] + position[1];
            var ellipsesBefore = true;
            var ellipsesAfter = true;
            for (var k = 0; k < 5; k++) {
              var nextSpace = doc.content.lastIndexOf(' ', previewStart - 2);
              var nextDot = doc.content.lastIndexOf('. ', previewStart - 2);
              if ((nextDot >= 0) && (nextDot > nextSpace)) {
                previewStart = nextDot + 1;
                ellipsesBefore = false;
                break;
              }
              if (nextSpace < 0) {
                previewStart = 0;
                ellipsesBefore = false;
                break;
              }
              previewStart = nextSpace + 1;
            }
            for (var k = 0; k < 10; k++) {
              var nextSpace = doc.content.indexOf(' ', previewEnd + 1);
              var nextDot = doc.content.indexOf('. ', previewEnd + 1);
              if ((nextDot >= 0) && (nextDot < nextSpace)) {
                previewEnd = nextDot;
                ellipsesAfter = false;
                break;
              }
              if (nextSpace < 0) {
                previewEnd = doc.content.length;
                ellipsesAfter = false;
                break;
              }
              previewEnd = nextSpace;
            }
            contentPositions.push({
              highlight: position,
              previewStart: previewStart, previewEnd: previewEnd,
              ellipsesBefore: ellipsesBefore, ellipsesAfter: ellipsesAfter
            });
          }
        }
      }

      if (titlePositions.length > 0) {
        titlePositions.sort(function(p1, p2){ return p1[0] - p2[0] });
        resultDocOrSection.innerHTML = '';
        addHighlightedText(resultDocOrSection, doc.title, 0, doc.title.length, titlePositions);
      }

      if (contentPositions.length > 0) {
        contentPositions.sort(function(p1, p2){ return p1.highlight[0] - p2.highlight[0] });
        var contentPosition = contentPositions[0];
        var previewPosition = {
          highlight: [contentPosition.highlight],
          previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
          ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
        };
        var previewPositions = [previewPosition];
        for (var j = 1; j < contentPositions.length; j++) {
          contentPosition = contentPositions[j];
          if (previewPosition.previewEnd < contentPosition.previewStart) {
            previewPosition = {
              highlight: [contentPosition.highlight],
              previewStart: contentPosition.previewStart, previewEnd: contentPosition.previewEnd,
              ellipsesBefore: contentPosition.ellipsesBefore, ellipsesAfter: contentPosition.ellipsesAfter
            }
            previewPositions.push(previewPosition);
          } else {
            previewPosition.highlight.push(contentPosition.highlight);
            previewPosition.previewEnd = contentPosition.previewEnd;
            previewPosition.ellipsesAfter = contentPosition.ellipsesAfter;
          }
        }

        var resultPreviews = document.createElement('div');
        resultPreviews.classList.add('search-result-previews');
        resultLink.appendChild(resultPreviews);

        var content = doc.content;
        for (var j = 0; j < Math.min(previewPositions.length, 3); j++) {
          var position = previewPositions[j];

          var resultPreview = document.createElement('div');
          resultPreview.classList.add('search-result-preview');
          resultPreviews.appendChild(resultPreview);

          if (position.ellipsesBefore) {
            resultPreview.appendChild(document.createTextNode('... '));
          }
          addHighlightedText(resultPreview, content, position.previewStart, position.previewEnd, position.highlight);
          if (position.ellipsesAfter) {
            resultPreview.appendChild(document.createTextNode(' ...'));
          }
        }
      }
      var resultRelUrl = document.createElement('span');
      resultRelUrl.classList.add('search-result-rel-url');
      resultRelUrl.innerText = doc.relUrl;
      resultTitle.appendChild(resultRelUrl);
    }

    function addHighlightedText(parent, text, start, end, positions) {
      var index = start;
      for (var i in positions) {
        var position = positions[i];
        var span = document.createElement('span');
        span.innerHTML = text.substring(index, position[0]);
        parent.appendChild(span);
        index = position[0] + position[1];
        var highlight = document.createElement('span');
        highlight.classList.add('search-result-highlight');
        highlight.innerHTML = text.substring(position[0], index);
        parent.appendChild(highlight);
      }
      var span = document.createElement('span');
      span.innerHTML = text.substring(index, end);
      parent.appendChild(span);
    }
  }

  jtd.addEvent(searchInput, 'focus', function(){
    setTimeout(update, 0);
  });

  jtd.addEvent(searchInput, 'keyup', function(e){
    switch (e.keyCode) {
      case 27: // When esc key is pressed, hide the results and clear the field
        searchInput.value = '';
        break;
      case 38: // arrow up
      case 40: // arrow down
      case 13: // enter
        e.preventDefault();
        return;
    }
    update();
  });

  jtd.addEvent(searchInput, 'keydown', function(e){
    switch (e.keyCode) {
      case 38: // arrow up
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.classList.remove('active');
          if (active.parentElement.previousSibling) {
            var previous = active.parentElement.previousSibling.querySelector('.search-result');
            previous.classList.add('active');
          }
        }
        return;
      case 40: // arrow down
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          if (active.parentElement.nextSibling) {
            var next = active.parentElement.nextSibling.querySelector('.search-result');
            active.classList.remove('active');
            next.classList.add('active');
          }
        } else {
          var next = document.querySelector('.search-result');
          if (next) {
            next.classList.add('active');
          }
        }
        return;
      case 13: // enter
        e.preventDefault();
        var active = document.querySelector('.search-result.active');
        if (active) {
          active.click();
        } else {
          var first = document.querySelector('.search-result');
          if (first) {
            first.click();
          }
        }
        return;
    }
  });

  jtd.addEvent(document, 'click', function(e){
    if (e.target != searchInput) {
      hideSearch();
    }
  });
}

// Switch theme

jtd.getTheme = function() {
  var cssFileHref = document.querySelector('[rel="stylesheet"]').getAttribute('href');
  return cssFileHref.substring(cssFileHref.lastIndexOf('-') + 1, cssFileHref.length - 4);
}

jtd.setTheme = function(theme) {
  var cssFile = document.querySelector('[rel="stylesheet"]');
  cssFile.setAttribute('href', 'http://localhost:4000/mc_apps_pic32mk/assets/css/just-the-docs-' + theme + '.css');
}

// Document ready

jtd.onReady(function(){
  initNav();
  initSearch();
});

})(window.jtd = window.jtd || {});


