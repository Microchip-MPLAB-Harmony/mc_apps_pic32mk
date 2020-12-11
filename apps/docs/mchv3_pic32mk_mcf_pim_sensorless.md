---
parent: Hardware Setup
title: MCHV3 Development Board Setup for Sensorless Mode PIC32MK MCF
has_children: false
has_toc: false
---

# MCHV3 Development Board
## Setting up the hardware

The following table shows the target hardware for the application projects.

| Project Name| Hardware |
|:---------|:---------:|
| mchv3_pic32mk_mcf_pim.X |<br>[MCHV3 Development Board](https://www.microchip.com/developmenttools/ProductDetails/dm330023-3)<br>[PIC32MK MCF Motor Plugin Module](https://www.microchip.com/developmenttools/ProductDetails/ma320024)<br>[Leadshine EL5-M0400-1-24 Motor](https://www.microchip.com/developmenttools/ProductDetails/AC300025) 
|||

### Setting up [MCHV3 Development Board](https://www.microchip.com/developmenttools/ProductDetails/dm330023-3)

- Mount the PIC32MK MCF Motor Control Plug In Module on U11 header. 

    ![PIM Install](images/mchv3/pic32mk_mcf_pim.png)

- Place the "External Opamp Configuration" Matrix board at J4.

    ![External OPAMP](images/mchv3/mchv3_external_opamp.bmp)

- Motor Connections: 
    - Phase U - M1 
    - Phase V - M2 
    - Phase W - M3

    ![Motor Connections](images/mchv3/motor_connections_mchv3.png)

- Jumper Settings: 
    - J11 - VAC ( Short Pin 3 - 4)
    - J12 - IA ( Short Pin 1 - 2)
    - J13 - IB ( Short Pin 1 - 2)
    - J14 - Fault_IP/IBUS ( Short Pin 1 - 2)

    ![jumper Settings](images/mchv3/pic32mk_mchv3_jumper_settings.png)

- Power the board with (110V/220V) AC mains. For additional safety, it is recommended to use a current limited power supply while testing this software demonstration on a non-default hardware and motor. 

    ![jumper Settings](images/mchv3/mchv3_ac_mains.png)

- Complete Setup

    ![Setup](images/mchv3/mchv3_pic32mk_complete_setup.png)

## Running the Application

1. Build and Program the application using its IDE
2. Press switch PUSHBUTTON to start the motor
3. Vary potentiometer to change the speed of the motor
4. Press switch to stop the motor
5. Monitor graphs on X2C Scope

Refer to the following tables for switch and LED details:

| Switch | Description |
|------|----------------|
| PUSHBUTTON | To start or stop the motor |
||

| LED D2 Status | Description |
|------|----------------|
| OFF  | No fault  |
| ON   | Fault is detected  |
||