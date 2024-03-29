/*******************************************************************************
  System Definitions

  File Name:
    mc_pwm.h

  Summary:
    Header file which contains variables and function prototypes for pulse width modulation
 
  Description:
    This file contains variables and function prototypes which are generally used for pulse 
    width modulation. It is implemented in Q2.14 fixed Point Arithmetic.

 *******************************************************************************/

//DOM-IGNORE-BEGIN
/*******************************************************************************
* Copyright (C) 2022 Microchip Technology Inc. and its subsidiaries.
*
* Subject to your compliance with these terms, you may use Microchip software
* and any derivatives exclusively with Microchip products. It is your
* responsibility to comply with third party license terms applicable to your
* use of third party software (including open source software) that may
* accompany Microchip software.
*
* THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS". NO WARRANTIES, WHETHER
* EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED
* WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A
* PARTICULAR PURPOSE.
*
* IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE,
* INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND
* WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS
* BEEN ADVISED OF THE POSSIBILITY OR THE DAMAGES ARE FORESEEABLE. TO THE
* FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S TOTAL LIABILITY ON ALL CLAIMS IN
* ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED THE AMOUNT OF FEES, IF ANY,
* THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.
 *******************************************************************************/
//DOM-IGNORE-END

#ifndef MCRPC_H
#define MCRPC_H

/*******************************************************************************
 * Header inclusions 
*******************************************************************************/
#include "mc_types.h"
#include "mc_motor.h"
#include "mc_utilities.h"
#include "mc_hardware_abstraction.h"


/*******************************************************************************
 Default Module configuration parameters 
*******************************************************************************/

/*******************************************************************************
Type Definition
*******************************************************************************/
typedef struct
{
    uint16_t encPulseCount;
    int16_t encVelocityCount;
}tmcRpc_Input_s;

typedef struct
{
    /** Motor parameters */
    tmcMot_PMSM_s  * pMotorParameters;
    
    float32_t dt;
    uint16_t velocityCountPrescaler;

    /** Encoder parameters */
    uint16_t encPulsesPerElecRev;
    uint16_t encPulsePerMechRev;
    
    void * pStatePointer;
}tmcRpc_Parameters_s;

/*******************************************************************************
 * Interface variables 
*******************************************************************************/

/*******************************************************************************
 Static Interface Functions
*******************************************************************************/

/*! \brief Set module parameters
 *
 * Details.
 * Set module parameters
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
__STATIC_INLINE void mcRpcI_PositionCounterRead( tmcRpc_Input_s * const pInput )
{
    pInput->encPulseCount = mcHalI_EncoderPositionGet();
}

/*! \brief Set module parameters
 *
 * Details.
 * Set module parameters
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
__STATIC_INLINE void mcRpcI_SpeedCounterRead( tmcRpc_Input_s * const pInput )
{
    pInput->encVelocityCount = mcHalI_EncoderVelocityGet();
}

/*! \brief Set module parameters
 *
 * Details.
 * Set module parameters
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
__STATIC_INLINE void mcRpcI_ParametersSet( tmcRpc_Parameters_s * const pParameters )
{
    /** Motor parameters */
    pParameters->pMotorParameters = &mcMotI_PMSM_gds;
    
     pParameters->velocityCountPrescaler = 100u;
     pParameters->dt = (float32_t)(0.00005);

    /** Encoder parameters  */
    pParameters->encPulsesPerElecRev = (uint16_t)2000;
    pParameters->encPulsePerMechRev = pParameters->encPulsesPerElecRev * (uint16_t)mcMotI_PMSM_gds.PolePairs;
}

/*******************************************************************************
 Interface Functions 
*******************************************************************************/
/*! \brief Initialize rotor position estimation module
 * 
 * Details.
 * Initialize rotor position estimation module
 * 
 * @param[in]: None 
 * @param[in/out]: None
 * @param[out]: None 
 * @return: None
 */
void  mcRpcI_RotorPositionCalcInit( tmcRpc_Parameters_s * const pParameters );

/*! \brief Enable rotor position estimation module
 *
 * Details.
 * Enable rotor position estimation module
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
void  mcRpcI_RotorPositionCalcEnable( tmcRpc_Parameters_s * const pParameters );

/*! \brief Disable rotor position estimation module
 *
 * Details.
 * Disable rotor position estimation module
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
void  mcRpcI_RotorPositionCalcDisable( tmcRpc_Parameters_s * const pParameters );

/*! \brief Rotor position estimation
 *
 * Details.
 * Rotor position estimation
 *
 * @param[in]: None
 * @param[in/out]: None
 * @param[out]: None
 * @return: None
 */
void mcRpcI_RotorPositionCalc(  const tmcRpc_Parameters_s * const pParameters, 
                                  float32_t * const pAngle, float32_t * const pSpeed );

/*! \brief Reset Rotor position estimation
 * 
 * Details.
 * Reset Rotor position estimation
 * 
 * @param[in]: None 
 * @param[in/out]: None
 * @param[out]: None 
 * @return: 
 */
void mcRpcI_RotorPositionCalcReset( const tmcRpc_Parameters_s * const pParameters );

#endif // MCRPC_H
