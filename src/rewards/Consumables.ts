import { RewardType } from "./Reward";

export const bonusRewards = {
	HP_UPGRADE: {
        type: RewardType.ITEM,
        name: "HP Upgrade",
        value: "01D6",
    },
MP_UPGRADE: {
        type: RewardType.ITEM,
        name: "MP Upgrade",
        value: "01D7",
    },
Drive_UPGRADE: {
        type: RewardType.ITEM,
        name: "Drive Gauge Upgrade",
        value: "01D8",
    },
};
