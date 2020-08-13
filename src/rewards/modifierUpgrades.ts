import { RewardType } from "./Reward";

export const modifierUpgradesRewards = {
    HP_UPGRADE: {
        type: RewardType.BONUS_MODIFIER,
        name: "HP Upgrade",
        value: "01D6",
    },
    MP_UPGRADE: {
        type: RewardType.BONUS_MODIFIER,
        name: "MP Upgrade",
        value: "01D7",
    },
    DRIVE_UPGRADE: {
        type: RewardType.BONUS_MODIFIER,
        name: "Drive Gauge Upgrade",
        value: "01D8",
    },
};