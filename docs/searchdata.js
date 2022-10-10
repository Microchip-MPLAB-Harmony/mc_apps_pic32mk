var SearchFiles = ["GUID-08535D4B-FFA6-47E7-8CAB-2CF0C863DDC4.html",
							"GUID-D2A8CD15-7CFC-4DCA-9E62-B07E002161E3.html",
							"GUID-FE44E7D3-946B-456C-90BC-F0D1818DCF47.html",
							"GUID-BC2E6BA1-3AF9-47B3-A2B6-E906F20A1D29.html",
							"GUID-832B105D-33A8-45D0-9219-2C8AB2B3F2A3.html",
							"GUID-BF2DBB9A-0522-4EEC-8F11-FA05CDCC3657.html",
							"GUID-B25777C9-0D91-456E-B55A-2F87F90981EE.html",
							"GUID-58791C0E-DB09-4F93-A34B-143A756C859D.html",
							"GUID-109BF086-69A6-46F7-85F1-446954F99F84.html",
							"GUID-E1D29A62-DCA4-49EC-B3DC-97F4F82E466E.html",
							"GUID-296E5DE5-044C-4AE4-9AA7-CEFD96C2B2A8.html",
							"GUID-A52365F5-8BB8-4ECE-AE2E-A39AAA916D79.html",
							"GUID-B503CDDE-A131-49ED-A821-EB4BECD8AF1D.html",
							"GUID-02AE2EFC-CAFA-460F-B949-4DC4589756A0.html"];

var SearchTitles = ["Motor Control Applications",
"PMSM FOC using Quadrature Encoder",
"PMSM FOC using PLL Estimator",
"Hardware Setup",
"MCHV3 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application'",
"MCHV3 Development Board - Setup and Running the 'PMSM FOC using Encoder application'",
"MCHV3 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application'",
"MCHV3 Development Board - Setup and Running the 'PMSM FOC using Encoder application'",
"MCLV2 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application'",
"MCLV2 Development Board - Setup and Running the 'PMSM FOC using Encoder application'",
"MCLV2 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application'",
"MCLV2 Development Board - Setup and Running the 'PMSM FOC using Encoder application'",
"MCLV2 Development Board - Setup and Running the 'PMSM FOC using Encoder application'",
"MCLV2 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application'"];

var SearchInfo = [" Motor Control Applications Configurable Motor Control Examples (MCC Harmony with Motor Control Plant) The following applications are provided to demonstrate Motor control Plant to generate motor control firmware Name Description Control Board Inverter Board PMSM FOC using PLL Estimator Sensorless Field Oriented Control of PMSM using PLL Estimator PIC32MK MCM Motor Control Plugin Module  PIC32MK MCF Motor Control Plugin Module  PIC32MK MCA Motor Control Plugin Module  dsPICDEM™ MCLV-2 Support | PMSM FOC using Quadrature Encoder | Sensored Field Oriented Control of PMSM using Quadrature Encoder | PIC32MK MCM Motor Control Plugin Module  PIC32MK MCF Motor Control Plugin Module  (https://www microchip com/en-us/products/microcontrollers-and-microprocessors/32-bit-mcus/pic32-32-bit-mcus/pic32mk)| dsPICDEM™ MCLV-2 Support | ||||| ",
							" PMSM FOC using Quadrature Encoder This example application shows how to control the Permanent Magnet Synchronous Motor (PMSM) with Quadrature Encoder based Field Oriented Control (FOC) on a PIC32MK Micro-controller Description Permanent Magnet Synchronous Motor (PMSM) is controlled using Field Oriented Control (FOC) Rotor position and speed is determined using Quadrature Encoder Motor start/stop operation is controlled by the switch and motor speed can be changed by the on-board potentiometer Waveforms and variables can be monitored runtime using X2CScope Key features enabled in this project are: Dual shunt current measurement Speed control loop MHC Project Configurations MHC Project Graph PMSM_FOC : This component configures FOC algorithm parameters motor parameters and motor control board parameters It connects to underlying peripheral libraries ADCHS and MCPWM This components auto configures ADC channels and PWM channels as per PMSM_FOC component configurations ADCHS Peripheral : The ADCHS is used to measure analog quantities Four channels are used to measure the Phase Current U the Phase Current V the DC Bus Voltage and the Potentiometer Conversion is triggered at the PWM (zero match + offset of the switch delay) MCPWM Peripheral : This peripheral is used to generated three phase synchronous PWM waveforms Fault functionality is also enabled to switch off the output waveforms asynchronously QEI Peripheral : This peripheral is used to decode the rotor position and speed from quadrature encoder signals X2CScope : This component adds X2C scope protocol code This uses UART to communicate to the host PC X2CScope allows user to monitor variables runtime UART Peripheral : The UART is used for X2CScope communication to observe graphs and variable values in run time Project Details For details refer Motor Control Plant Development Kits MCLV2 with PIC32MK Family Motor Control PIM Downloading and building the application To clone or download this application from Github go to the main page of this repository and then click Clone button to clone this repository or download as zip file This content can also be downloaded using content manager by following these instructions  Path of the application within the repository is apps/mcp_pmsm_foc_encoder_pic32_mk  To build the application refer to the following table and open the project using its IDE Project Name Description Demo User Guide mclv2_pic32mk_mcf_pim X MPLABX project for MCLV2 board with PIC32MK MCF PIM MCLV2 with PIC32MK MCF PIM mclv2_pic32mk_mcm_pim X MPLABX project for MCLV2 board with PIC32MK MCM PIM MCLV2 with PIC32MK MCM PIM mclv2_pic32mk_mca_pim X MPLABX project for MCLV2 board with PIC32MK MCA PIM MCLV2 with PIC32MK MCA PIM MCHV3 with PIC32MK Family Motor Control PIM Downloading and building the application To clone or download this application from Github go to the main page of this repository and then click Clone button to clone this repository or download as zip file This content can also be downloaded using content manager by following these instructions  Path of the application within the repository is apps/mcp_pmsm_foc_encoder_pic32_mk  To build the application refer to the following table and open the project using its IDE Project Name Description Demo User Guide mchv3_pic32mk_mcf_pim X MPLABX project for MCHV3 board with PIC32MK MCF PIM MCHV3 with PIC32MK MCF PIM mchv3_pic32mk_mcm_pim X MPLABX project for MCHV3 board with PIC32MK MCM PIM MCHV3 with PIC32MK MCM PIM ",
							" PMSM FOC using PLL Estimator This example application shows how to control the Permanent Magnet Synchronous Motor (PMSM) with PLL Estimator based Field Oriented Control (FOC) on a PIC32MK Micro-controller Description Permanent Magnet Synchronous Motor (PMSM) is controlled using Field Oriented Control (FOC) Rotor position and speed is determined using PLL estimator technique Motor start/stop operation is controlled by the switch and motor speed can be changed by the on-board potentiometer Waveforms and variables can be monitored runtime using X2CScope Key features enabled in this project are: Dual shunt current measurement Speed control loop Field weakening Flying Start Capability MHC Project Configurations MHC Project Graph PMSM_FOC : This component configures FOC algorithm parameters motor parameters and motor control board parameters It connects to underlying peripheral libraries ADCHS and MCPWM This components auto configures ADC channels and PWM channels as per PMSM_FOC component configurations ADCHS Peripheral : The ADCHS is used to measure analog quantities Four channels are used to measure the Phase Current U the Phase Current V the DC Bus Voltage and the Potentiometer Conversion is triggered at the PWM (zero match + offset of the switch delay) MCPWM Peripheral : This peripheral is used to generated three phase synchronous PWM waveforms Fault functionality is also enabled to switch off the output waveforms asynchronously X2CScope : This component adds X2C scope protocol code This uses UART to communicate to the host PC X2CScope allows user to monitor variables runtime UART Peripheral : The UART is used for X2CScope communication to observe graphs and variable values in run time Project Details For details refer Motor Control Plant Development Kits Following development kits are supported MCLV2 with PIC32MK Family Motor Control PIM Downloading and building the application To clone or download this application from Github go to the main page of this repository and then click Clone button to clone this repository or download as zip file This content can also be downloaded using content manager by following these instructions  Path of the application within the repository is apps/mcp_pmsm_foc_pll_estimator_pic32_mk  To build the application refer to the following table and open the project using its IDE Project Name Description Demo User Guide mclv2_pic32mk_mcf_pim X MPLABX project for MCLV2 board with PIC32MK MCF PIM MCLV2 with PIC32MK MCF PIM mclv2_pic32mk_mcm_pim X MPLABX project for MCLV2 board with PIC32MK MCM PIM MCLV2 with PIC32MK MCM PIM mclv2_pic32mk_mca_pim X MPLABX project for MCLV2 board with PIC32MK MCA PIM MCLV2 with PIC32MK MCA PIM MCHV3 with PIC32MK Family Motor Control PIM Downloading and building the application To clone or download this application from Github go to the main page of this repository and then click Clone button to clone this repository or download as zip file This content can also be downloaded using content manager by following these instructions  Path of the application within the repository is apps/mcp_pmsm_foc_pll_estimator_pic32_mk  To build the application refer to the following table and open the project using its IDE Project Name Description Demo User Guide mchv3_pic32mk_mcf_pim X MPLABX project for MCHV3 board with PIC32MK MCF PIM MCHV3 with PIC32MK MCF PIM mchv3_pic32mk_mcm_pim X MPLABX project for MCHV3 board with PIC32MK MCM PIM MCHV3 with PIC32MK MCM PIM ",
							" Hardware Setup ",
							" MCHV3 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mchv3_pic32mk_mcf_pim X MCHV3 Development Board PIC32MK MCF Motor Plugin Module Leadshine EL5-M0400-1-24 Motor Setting up MCHV3 Development Board Mount the PIC32MK MCF Motor Control Plug In Module on U11 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J4 External OPAMP Motor Connections: Phase U - M1 Phase V - M2 Phase W - M3 Motor Connections Jumper Settings: J11 - VAC ( Short Pin 3 - 4) J12 - IA ( Short Pin 1 - 2) J13 - IB ( Short Pin 1 - 2) J14 - Fault_IP/IBUS ( Short Pin 1 - 2) Power the board with (110V/220V) AC mains For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor ac mains Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch PUSHBUTTON to start the motor Vary potentiometer to change the speed of the motor Press switch to stop the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description PUSHBUTTON To start or stop the motor LED D2 Status Description OFF No fault ON Fault is detected ",
							" MCHV3 Development Board - Setup and Running the 'PMSM FOC using Encoder application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mchv3_pic32mk_mcf_pim X MCHV3 Development Board PIC32MK MCF Motor Plugin Module Leadshine EL5-M0400-1-24 Motor **Setting up MCHV3 Development Board ** Mount the PIC32MK MCF Motor Control Plug In Module on U11 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J4 External OPAMP Motor Connections: Phase U - M1 Phase V - M2 Phase W - M3 Motor Connections Encoder Connections: A+ : HA B+ : HB 5V : +5V 0V : GND Encoder Connections Jumper Settings: J11 - VAC ( Short Pin 3 - 4) J12 - IA ( Short Pin 1 - 2) J13 - IB ( Short Pin 1 - 2) J14 - Fault_IP/IBUS ( Short Pin 1 - 2) Power the board with (110V/220V) AC mains For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor ac mains Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch PUSHBUTTON to start the motor Vary potentiometer to change the speed of the motor Press switch to stop the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description PUSHBUTTON To start or stop the motor LED D2 Status Description OFF No fault ON Fault is detected ",
							" MCHV3 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mchv3_pic32mk_mcm_pim X MCHV3 Development Board PIC32MK MCM Motor Plugin Module Leadshine EL5-M0400-1-24 Motor Setting up MCHV3 Development Board Mount the PIC32MK MCM Motor Control Plug In Module on U11 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J4 External OPAMP Motor Connections: Phase U - M1 Phase V - M2 Phase W - M3 Motor Connections Jumper Settings: J11 - VAC ( Short Pin 3 - 4) J12 - IA ( Short Pin 1 - 2) J13 - IB ( Short Pin 1 - 2) J14 - Fault_IP/IBUS ( Short Pin 1 - 2) Power the board with (110V/220V) AC mains For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor ac mains Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch PUSHBUTTON to start the motor Vary potentiometer to change the speed of the motor Press switch to stop the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description PUSHBUTTON To start or stop the motor LED D2 Status Description OFF No fault ON Fault is detected ",
							" MCHV3 Development Board - Setup and Running the 'PMSM FOC using Encoder application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mchv3_pic32mk_mcm_pim X MCHV3 Development Board PIC32MK MCM Motor Plugin Module Leadshine EL5-M0400-1-24 Motor Setting up MCHV3 Development Board Mount the PIC32MK MCM Motor Control Plug In Module on U11 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J4 External OPAMP Motor Connections: Phase U - M1 Phase V - M2 Phase W - M3 Motor Connections Encoder Connections: A+ : HA B+ : HB 5V : +5V 0V : GND Encoder Connections Jumper Settings: J11 - VAC ( Short Pin 3 - 4) J12 - IA ( Short Pin 1 - 2) J13 - IB ( Short Pin 1 - 2) J14 - Fault_IP/IBUS ( Short Pin 1 - 2) Power the board with (110V/220V) AC mains For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor ac mains Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch PUSHBUTTON to start the motor Vary potentiometer to change the speed of the motor Press switch to stop the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description PUSHBUTTON To start or stop the motor LED D2 Status Description OFF No fault ON Fault is detected ",
							" MCLV2 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mclv2_pic32mk_mcf_pim X MCLV2 Development Board PIC32MK MCF Motor Plugin Module Hurst Motor with encoder Setting up MCLV2 Development Board Mount the PIC32MK MCF Motor Control Plug In Module on U9 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J14 External OPAMP Motor Connections: Phase U - M1 Phase V - M2 Phase W - M3 Motor Connections Jumper Settings: JP1 - Curr JP2 - Curr JP3 - Curr In order to use RS232 port for X2CScope Communication JP4 - UART JP5 - UART In order to use USB port for X2CScope Communication JP4 - USB JP5 - USB jumper Settings Power the board with a 24V DC supply using J2 or BP1-BP2 For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor power Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch S2 to start the motor Vary potentiometer to change the speed of the motor Press switch S2 to stop the motor Press switch S3 to change the direction of the motor Press switch S2 again to start the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description Switch S2 To start or stop the motor Switch S3 To change the direction of rotation Direction toggle command is accepted only when motor is stationary LED D2 Status Description OFF Motor spin direction is \"positive\" ON Motor spin direction is \"negative\" LED D17 Status Description OFF No fault ON Fault is detected ",
							" MCLV2 Development Board - Setup and Running the 'PMSM FOC using Encoder application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mclv2_pic32mk_mcf_pim X MCLV2 Development Board PIC32MK MCF Motor Plugin Module Hurst Motor with encoder Setting up MCLV2 Development Board Mount the PIC32MK MCF Motor Control Plug In Module on U9 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J14 External OPAMP Motor Connections with MCLV2 Board: Motor MCLV2 Board Phase U M1 Phase V M2 Phase W M3 +5V +5V -5V GND A HA B HB Motor Connections Jumper Settings: JP1 - Curr JP2 - Curr JP3 - Curr In order to use RS232 port for X2CScope Communication JP4 - UART JP5 - UART In order to use USB port for X2CScope Communication JP4 - USB JP5 - USB jumper Settings Power the board with a 24V DC supply using J2 or BP1-BP2 For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor power Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch S2 to start the motor Vary potentiometer to change the speed of the motor Press switch S2 to stop the motor Press switch S3 to change the direction of the motor Press switch S2 again to start the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description Switch S2 To start or stop the motor Switch S3 To change the direction of rotation Direction toggle command is accepted only when motor is stationary LED D2 Status Description OFF Motor spin direction is \"positive\" ON Motor spin direction is \"negative\" LED D17 Status Description OFF No fault ON Fault is detected ",
							" MCLV2 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mclv2_pic32mk_mcm_pim X MCLV2 Development Board PIC32MK MCM Motor Plugin Module Hurst Motor with encoder Setting up MCLV2 Development Board Mount the PIC32MK MCM Motor Control Plug In Module on U9 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J14 External OPAMP Motor Connections: Phase U - M1 Phase V - M2 Phase W - M3 Motor Connections Jumper Settings: JP1 - Curr JP2 - Curr JP3 - Curr In order to use RS232 port for X2CScope Communication JP4 - UART JP5 - UART In order to use USB port for X2CScope Communication JP4 - USB JP5 - USB jumper Settings Power the board with a 24V DC supply using J2 or BP1-BP2 For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor power Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch S2 to start the motor Vary potentiometer to change the speed of the motor Press switch S2 to stop the motor Press switch S3 to change the direction of the motor Press switch S2 again to start the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description Switch S2 To start or stop the motor Switch S3 To change the direction of rotation Direction toggle command is accepted only when motor is stationary LED D2 Status Description OFF Motor spin direction is \"positive\" ON Motor spin direction is \"negative\" LED D17 Status Description OFF No fault ON Fault is detected ",
							" MCLV2 Development Board - Setup and Running the 'PMSM FOC using Encoder application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mclv2_pic32mk_mcm_pim X MCLV2 Development Board PIC32MK MCM Motor Plugin Module Hurst Motor with encoder Setting up MCLV2 Development Board Mount the PIC32MK MCM Motor Control Plug In Module on U9 header PIM Install Place the \"External Opamp Configuration\" Matrix board at J14 External OPAMP Motor Connections with MCLV2 Board: Motor MCLV2 Board Phase U M1 Phase V M2 Phase W M3 +5V +5V -5V GND A HA B HB Motor Connections Jumper Settings: JP1 - Curr JP2 - Curr JP3 - Curr In order to use RS232 port for X2CScope Communication JP4 - UART JP5 - UART In order to use USB port for X2CScope Communication JP4 - USB JP5 - USB jumper Settings Power the board with a 24V DC supply using J2 or BP1-BP2 For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor power Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch S2 to start the motor Vary potentiometer to change the speed of the motor Press switch S2 to stop the motor Press switch S3 to change the direction of the motor Press switch S2 again to start the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description Switch S2 To start or stop the motor Switch S3 To change the direction of rotation Direction toggle command is accepted only when motor is stationary LED D2 Status Description OFF Motor spin direction is \"positive\" ON Motor spin direction is \"negative\" LED D17 Status Description OFF No fault ON Fault is detected ",
							" MCLV2 Development Board - Setup and Running the 'PMSM FOC using Encoder application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mclv2_pic32mk_mca_pim X MCLV2 Development Board PIC32MK MCA Motor Plugin Module Hurst Motor with encoder Setting up MCLV2 Development Board Mount the PIC32MK MCA Motor Control Plug In Module on U9 header Place the \"External Opamp Configuration\" Matrix board at J14 External OPAMP Motor Connections with MCLV2 Board: Motor MCLV2 Board Phase U M1 Phase V M2 Phase W M3 +5V +5V -5V GND A HA B HB Motor Connections Jumper Settings: JP1 - Curr JP2 - Curr JP3 - Curr In order to use RS232 port for X2CScope Communication JP4 - UART JP5 - UART In order to use USB port for X2CScope Communication JP4 - USB JP5 - USB jumper Settings Power the board with a 24V DC supply using J2 or BP1-BP2 For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor power Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch S2 to start the motor Vary potentiometer to change the speed of the motor Press switch S2 to stop the motor Press switch S3 to change the direction of the motor Press switch S2 again to start the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description Switch S2 To start or stop the motor Switch S3 To change the direction of rotation Direction toggle command is accepted only when motor is stationary LED D2 Status Description OFF Motor spin direction is \"positive\" ON Motor spin direction is \"negative\" LED D17 Status Description OFF No fault ON Fault is detected ",
							" MCLV2 Development Board - Setup and Running the 'PMSM FOC using PLL Estimator application' Setting up the hardware The following table shows the target hardware for the application projects Project Name Hardware mclv2_pic32mk_mca_pim X MCLV2 Development Board PIC32MK MCA Motor Plugin Module Hurst Motor with encoder Setting up MCLV2 Development Board Mount the PIC32MK MCA Motor Control Plug In Module on U9 header Place the \"External Opamp Configuration\" Matrix board at J14 External OPAMP Motor Connections: Phase U - M1 Phase V - M2 Phase W - M3 Motor Connections Jumper Settings: JP1 - Curr JP2 - Curr JP3 - Curr In order to use RS232 port for X2CScope Communication JP4 - UART JP5 - UART In order to use USB port for X2CScope Communication JP4 - USB JP5 - USB jumper Settings Power the board with a 24V DC supply using J2 or BP1-BP2 For additional safety it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor power Complete Setup Setup Running the Application Build and Program the application using its IDE Press switch S2 to start the motor Vary potentiometer to change the speed of the motor Press switch S2 to stop the motor Press switch S3 to change the direction of the motor Press switch S2 again to start the motor Monitor graphs on X2C Scope Refer to the following tables for switch and LED details: Switch Description Switch S2 To start or stop the motor Switch S3 To change the direction of rotation Direction toggle command is accepted only when motor is stationary LED D2 Status Description OFF Motor spin direction is \"positive\" ON Motor spin direction is \"negative\" LED D17 Status Description OFF No fault ON Fault is detected "];

