// (c) 2020 Microchip Technology Inc. and its subsidiaries
// Subject to your compliance with these terms, you may use Microchip software and any derivatives exclusively 
// with Microchip products. Youâ??re responsible for complying with 3rd party license terms applicable to your use 
// of 3rd party software (including open source software) that may accompany Microchip software. 
// SOFTWARE IS â??AS IS.â?? NO WARRANTIES, WHETHER EXPRESS, IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY 
// IMPLIED WARRANTIES OF NON-INFRINGEMENT, MERCHANTABILITY, OR FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT WILL MICROCHIP 
// BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY 
// KIND WHATSOEVER RELATED TO THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS BEEN ADVISED OF THE POSSIBILITY OR 
// THE DAMAGES ARE FORESEEABLE. TO THE FULLEST EXTENT ALLOWED BY LAW, MICROCHIPâ??S TOTAL LIABILITY ON ALL CLAIMS RELATED 
// TO THE SOFTWARE WILL NOT EXCEED AMOUNT OF FEES, IF ANY, YOU PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.

if isdef(['motorName'])==%F then
    mprintf("[Warning] - No motorName defined, defining this now.");
    motorName = 'EBM-PAPST ECI 6320-K1-B00';
else
    if motorName == 'EBM-PAPST ECI 6320-K1-B00'
        if isdef(['Vbus'])==%T then
            if Vbus == 0 then
                Vbus = 24;
            end
        end

        Rs = 0.1396;
        Ld = 0.000131;
        Lq = 0.000207;
        Kell = 8.4853;

        n_p = 4;

        nominalSpeed = 4000;

        J_nmradss = 0.912e-6 * 10; // inertia Nm/rad/s/s

        motorRatedCurrent = 8.5;
        motorStartupCurrent = 0.2;

        boardName == 'dsPICDEM MCLV-2'
        kpCurrent = 0.3;
        kiCurrent = 100;
        kpVelocity = 0.004;
        kiVelocity = 0.01;
    end
end
