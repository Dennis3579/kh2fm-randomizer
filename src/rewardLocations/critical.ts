import { LocationName } from "../LocationName";
import { Rewards } from "../rewards";
import { RewardLocation, RewardLocationType } from "./RewardLocation";
import { GameMode } from "src/settings/enums";
import { RewardType } from "src/rewards/Reward";

export const criticalRewardLocations: RewardLocation[] = [
	{
		type: RewardLocationType.CRITICAL,
		location: LocationName.CRITICAL,
		description: "Bonus 1",
		value: "11D18DDE",
		reward: Rewards.REACTION_BOOST,
		gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [RewardType.BONUS_MODIFIER],
			},
		},
	},
	{
		type: RewardLocationType.CRITICAL,
		location: LocationName.CRITICAL,
		description: "Bonus 2",
		value: "11D18DDC",
		reward: Rewards.FINISHING_PLUS,
		gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [RewardType.BONUS_MODIFIER]
			},
		},
	},
	{
		type: RewardLocationType.CRITICAL,
		location: LocationName.CRITICAL,
		description: "Bonus 3",
		value: "11D18DE8",
		reward: Rewards.DRAW,
		gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [RewardType.BONUS_MODIFIER]
			},
		},
	},
	{
		type: RewardLocationType.CRITICAL,
		location: LocationName.CRITICAL,
		description: "Bonus 4",
		value: "11D18DE4",
		reward: Rewards.LUCKY_LUCKY,
		gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [RewardType.BONUS_MODIFIER]
			},
		},
	},
	{
		type: RewardLocationType.CRITICAL,
		location: LocationName.CRITICAL,
		description: "Bonus 5",
		value: "11D18DE6",
		reward: Rewards.LUCKY_LUCKY,
		gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [RewardType.BONUS_MODIFIER]
			},
		},
	},
	{
		type: RewardLocationType.CRITICAL,
		location: LocationName.CRITICAL,
		description: "Bonus 6",
		value: "11D18DE0",
		reward: Rewards.MP_HASTERA,
		gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [RewardType.BONUS_MODIFIER]
			},
		},
	},
	{
		type: RewardLocationType.CRITICAL,
		location: LocationName.CRITICAL,
		description: "Bonus 7",
		value: "11D18DE2",
		reward: Rewards.NO_EXPERIENCE,gameMode: {
			[GameMode.GOA_MOD]: {
				excludeType: [RewardType.BONUS_MODIFIER]
			},
		},
	},
];
