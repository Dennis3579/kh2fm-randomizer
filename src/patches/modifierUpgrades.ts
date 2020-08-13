export const modifierUpgrades = `
//Dummy 23 increase HP relative to the amount in your inventory.
patch=1,EE,E1030001,extended,0032F1A1	//Check if 1 Dummy 23 is in the inventory.
patch=1,EE,E0020000,extended,0032EB00	//We check an unused armor slot status for Simba that resets if you die in the room you got the Orb in (HP gains auto-reset back). By default, this is 0000.
patch=1,EE,30000002,extended,01C6C754	//Increase the value of Slot 1 (Sora)'s HP by 2.
patch=1,EE,0032EB00,extended,00000001	//We set the value of Simba's unused armor slot to 1 manually, so this doesn't loop due to the first check of the armor slot no longer passing.

//Example of how to continue this.
patch=1,EE,E1030002,extended,0032F1A1	//Check if 2 Staffs of Detection is in the inventory.
patch=1,EE,E0020001,extended,0032EB00	//We check an unused armor slot status for Simba that resets if you die in the room you got the Orb in (HP gains auto-reset back). This is now 0001 due to our previous set.
patch=1,EE,30000002,extended,01C6C754	//Increase the value of Slot 1 (Sora)'s HP by 2.
patch=1,EE,0032EB00,extended,00000002	//We set the value of Simba's unused armor slot to 2 manually, so this doesn't loop due to the first check of the armor slot no longer passing.

patch=1,EE,E1030003,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000003

patch=1,EE,E1030004,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000004

patch=1,EE,E1030005,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000005

patch=1,EE,E1030006,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000006

patch=1,EE,E1030007,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000007

patch=1,EE,E1030008,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000008

patch=1,EE,E1030009,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000009

patch=1,EE,E103000A,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,0000000A

patch=1,EE,E103000B,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,0000000B

patch=1,EE,E103000C,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,0000000C

patch=1,EE,E103000D,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,0000000D

patch=1,EE,E103000E,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,0000000E

patch=1,EE,E103000F,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,0000000F

patch=1,EE,E1030010,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000010

patch=1,EE,E1030011,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000011

patch=1,EE,E1030012,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000012

patch=1,EE,E1030013,extended,0032F1A1
patch=1,EE,E0020002,extended,0032EB00
patch=1,EE,30000002,extended,01C6C754
patch=1,EE,0032EB00,extended,00000013

//Dummy 24 increase MP relative to the amount in your inventory.
patch=1,EE,E1030001,extended,0032F1A2	//Check if 1 Dummy 24 is in the inventory.
patch=1,EE,E0020000,extended,0032EC14	//We check an unused armor slot status for Tron that resets if you die in the room you got the Orb in (HP gains auto-reset back). By default, this is 0000.
patch=1,EE,30000005,extended,01C6C8D4	//Increase the value of Slot 1 (Sora)'s MP by 5.
patch=1,EE,0032EC14,extended,00000001	//We set the value of Simba's unused armor slot to 1 manually, so this doesn't loop due to the first check of the armor slot no longer passing.

//Example of how to continue this.
patch=1,EE,E1030002,extended,0032F1A2	//Check if 2 Dummy 24 are in the inventory.
patch=1,EE,E0020001,extended,0032EC14	//We check an unused armor slot status for Tron that resets if you die in the room you got the Orb in (HP gains auto-reset back). This is now 0001 due to our previous set.
patch=1,EE,30000005,extended,01C6C8D4	//Increase the value of Slot 1 (Sora)'s MP by 5.
patch=1,EE,0032EC14,extended,00000002	//We set the value of Tron's unused armor slot to 2 manually, so this doesn't loop due to the first check of the armor slot no longer passing.

patch=1,EE,E1030003,extended,0032F1A2
patch=1,EE,E0020002,extended,0032EC14
patch=1,EE,30000005,extended,01C6C8D4
patch=1,EE,0032EC14,extended,00000003

patch=1,EE,E1030004,extended,0032F1A2
patch=1,EE,E0020002,extended,0032EC14
patch=1,EE,30000005,extended,01C6C8D4
patch=1,EE,0032EC14,extended,00000004

//Dummy 25 increase Drive relative to the amount in your inventory.
patch=1,EE,E1030001,extended,0032F1A3	//Check if 1 Dummy 25 is in the inventory.
patch=1,EE,E0020000,extended,0032EC24	//We check an unused accessory slot status for Tron that resets if you die in the room you got the Orb in (HP gains auto-reset back). By default, this is 0000.
patch=1,EE,30000001,extended,01C6C902	//Increase the value of Slot 1 (Sora)'s Drive by 1.
patch=1,EE,0032EC24,extended,00000001	//We set the value of Simba's unused armor slot to 1 manually, so this doesn't loop due to the first check of the armor slot no longer passing.

//Example of how to continue this.
patch=1,EE,E1030002,extended,0032F1A3	//Check if 2 Dummy 25 are in the inventory.
patch=1,EE,E0020001,extended,0032EC24	//We check an unused accessory slot status for Tron that resets if you die in the room you got the Orb in (HP gains auto-reset back). This is now 0001 due to our previous set.
patch=1,EE,30000001,extended,01C6C902	//Increase the value of Slot 1 (Sora)'s Drive by 1.
patch=1,EE,0032EC24,extended,00000002	//We set the value of Tron's unused accessory slot to 2 manually, so this doesn't loop due to the first check of the armor slot no longer passing.

patch=1,EE,E1030003,extended,0032F1A3
patch=1,EE,E0020002,extended,0032EC24
patch=1,EE,30000001,extended,01C6C902
patch=1,EE,0032EC24,extended,00000003

patch=1,EE,E1030004,extended,0032F1A3
patch=1,EE,E0020002,extended,0032EC24
patch=1,EE,30000001,extended,01C6C902
patch=1,EE,0032EC24,extended,00000004

patch=1,EE,E1030005,extended,0032F1A3
patch=1,EE,E0020002,extended,0032EC24
patch=1,EE,30000001,extended,01C6C902
patch=1,EE,0032EC24,extended,00000005

patch=1,EE,E1030006,extended,0032F1A3
patch=1,EE,E0020002,extended,0032EC24
patch=1,EE,30000001,extended,01C6C902
patch=1,EE,0032EC24,extended,00000006
`;