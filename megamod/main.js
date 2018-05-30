5webpackJsonp([0], {
	"+0OL": function(e, t, a) {
		"use strict";
		e.exports = {
			Action: {
				None: 0,
				Reload: 1,
				UseItem: 2,
				Revive: 3
			},
			WeaponSlot: {
				Primary: 0,
				Secondary: 1,
				Throwable: 3,
				Melee: 2,
				Count: 4
			},
			WeaponType: ["gun", "gun", "melee", "throwable"],
			DamageType: {
				Player: 0,
				Bleeding: 1,
				Gas: 2
			},
			Anim: {
				None: 0,
				Melee: 1,
				Cook: 2,
				Throw: 3,
				CrawlForward: 4,
				CrawlBackward: 5,
				Revive: 6
			},
			GasMode: {
				Inactive: 0,
				Waiting: 1,
				Moving: 2
			},
			protocolVersion: 26,
			map: {
				baseWidth: 512,
				baseHeight: 512,
				gridSize: 16,
				shoreDivisions: 64,
				shoreInset: 32,
				shoreVariation: 3,
				grassInset: 18,
				grassVariation: 2,
				extension: 80
			},
			player: {
				radius: 1,
				maxVisualRadius: 5.75,
				maxInteractionRad: 5.5,
				minActiveTime: 10,
				moveSpeed: 152,
				health: 1005,
				boostDecay: .33,
				boostMoveSpeed: 152,
				boostHealAmount: .533,
				boostBreakpoints: [1, 1, 1.5, .5],
				scopeDelay: .25,
				baseSwitchDelay: .25,
				freeSwitchCooldown: 1,
				headshotChance: .9,
				img: {
					scale: 1
				},
				spectateDeadTimeout: 2,
				bleedTickRate: 0,
				bleedDamage: 0,
				downedMoveSpeed: 34,
				downedRezMoveSpeed: 32,
				reviveDuration: 0,
				reviveMaxRange: 85,
				reviveHealth: 24,
				crawlTime: .75,
				emoteSoftCooldown: 2,
				emoteHardCooldown: 6,
				emoteThreshold: 6,
				throwableMaxMouseDist: 188,
				cookTime: .1,
				throwTime: .3,
				cookSpeedPenalty: 0,
				waterSpeedPenalty: 0,
				meleeHeight: .25
			},
			teamColors: [16776960, 255, 16711680, 16711935],
			bullet: {
				maxReflect: 3,
				reflectDistDecay: 1.5,
				height: .25
			},
			projectile: {
				maxHeight: 2
			},
			explosions: {
				explosion_frag: {
					damage: 125,
					obstacleDamage: 1.1,
					rad: {
						min: 5,
						max: 12
					},
					shrapnelCount: 12,
					shrapnelType: "shrapnel_frag",
					explosionType: "frag",
					decalType: "decal_frag_explosion"
				},
				explosion_smoke: {
					damage: 0,
					obstacleDamage: 1,
					rad: {
						min: 5,
						max: 12
					},
					shrapnelCount: 0,
					shrapnelType: "shrapnel_frag",
					explosionType: "smoke",
					decalType: "decal_smoke_explosion"
				},
				explosion_barrel: {
					damage: 125,
					obstacleDamage: 1,
					rad: {
						min: 5,
						max: 12
					},
					shrapnelCount: 12,
					shrapnelType: "shrapnel_barrel",
					explosionType: "barrel",
					decalType: "decal_barrel_explosion"
				}
			},
			bullets: {
				bullet_mp5: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_ak47: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_scar: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_mosin: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_m39: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_shotgun: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_m9: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_ot38: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_deagle: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_mac10: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_ump9: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_vector: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_dp28: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_glock: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_famas: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_hk416: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_mk12: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				bullet_m249: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				shrapnel_barrel: {
					damage: 150,
					obstacleDamage: 3,
					falloff: .1,
					distance: 1100,
					speed: 500,
					variance: 0,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				},
				shrapnel_frag: {
					damage: 20,
					obstacleDamage: 1,
					falloff: 1,
					speed: 20,
					distance: 8,
					variance: 1.5,
					shrapnel: 1,
					tracerColor: "50AE",
					tracerWidth: .5,
					tracerLength: 2
				}
			},
			tracerColors: {
				"9mm": {
					regular: 16704198,
					saturated: 16767411
				},
				"762mm": {
					regular: 12965630,
					saturated: 11257087
				},
				"12gauge": {
					regular: 16702684,
					saturated: 16702684
				},
				"556mm": {
					regular: 11141010,
					saturated: 11141010
				},
				"50AE": {
					regular: 16773256,
					saturated: 16773256
				},
				shrapnel: {
					regular: 3355443,
					saturated: 3355443
				}
			},
			items: {
				outfitBase: {
					name: "Basic Outfit",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16303476,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 16303476,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 8480055
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16303476
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitKhaki: {
					name: "The Initiative",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 12824197,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 9404516,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 4208940
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 12824197
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCasanova: {
					name: "Casanova Silks",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 4327436,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 7602183,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 1052688
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 4327436
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitPrisoner: {
					name: "The New Black",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16735266,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 16545059,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 16756224
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16735266
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitJester: {
					name: "Jester's Folly",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 7798904,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 4915276,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 936960
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 7798904
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitWoodland: {
					name: "Woodland Combat",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 2831146,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 5925970,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 5056e3
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 2831146
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitRoyalFortune: {
					name: "Royal Fortune",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 8333091,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 15254058,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 9981696
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 8333091
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitKeyLime: {
					name: "Key Lime",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 13107007,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 15662941,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 12355383
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 13107007
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCobaltShell: {
					name: "Cobalt Shell",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 11095,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 2711164,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 19093
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 11095
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCarbonFiber: {
					name: "Carbon Fiber",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 2171169,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 1842204,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 3552822
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 2171169
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitDarkGloves: {
					name: "The Professional",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16303476,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 12482560,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 10708736
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 12482560
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitBarrel: {
					name: "Fish in a Barrel",
					type: "skin",
					subtype: "camo",
					rad: 1,
					skinImg: {
						baseTint: 16777215,
						baseSprite: "img/map/map-barrel-01.svg",
						baseScale: .8,
						handTint: 2236962,
						handSprite: "img/player/player-hands.svg",
						backpackTint: 6697728
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 2236962
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitGhillie: {
					name: "Ghillie Suit",
					type: "skin",
					subtype: "camo",
					rad: 1,
					skinImg: {
						baseTint: 8630096,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 8630096,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 6697728
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 8630096
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitCamo: {
					name: "Forest Camo",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 10066278,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 8684631,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 6710835
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 10066278
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitRed: {
					name: "Target Practice",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 16711680,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 13893632,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 11993088
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16711680
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				outfitWhite: {
					name: "Arctic Avenger",
					type: "skin",
					subtype: "normal",
					rad: 1,
					skinImg: {
						baseTint: 14935011,
						baseSprite: "img/player/player-base-01.svg",
						baseScale: 1,
						handTint: 15658734,
						handSprite: "img/player/player-hands-01.svg",
						backpackTint: 14474460
					},
					lootImg: {
						sprite: "img/loot/loot-shirt-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 14935011
					},
					sound: {
						pickup: "clothes_pickup_01"
					}
				},
				fists: {
					name: "Fists",
					type: "melee",
					switchDelay: .25,
					rangeMult: 1.25,
					areaOfEffect: .75,
					damageTime: .1,
					cooldownTime: .15,
					damage: 24,
					headshotMult: 1,
					speed: {
						equip: 1,
						attack: 0
					},
					sound: {
						swing: "punch_swing_01",
						deploy: "stow_weapon_01"
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-fists.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					}
				},
				mp5: {
					name: "MP5",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 100,
					maxClip: 1000,
					maxReload: 1000,
					reloadTime: 0,
					fireDelay: .01,
					switchDelay: .01,
					barrelLength: 5.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 0,
					shotSpread: 0,
					bulletCount: 10,
					bulletType: "bullet_mp5",
					headshotMult: 200,
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-mp5.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 1184274,
						hands: 2,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .375
					},
					sound: {
						shoot: "mp5_01",
						reload: "mp5_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "mp5_switch_01"
					}
				},
				mac10: {
					name: "MAC-10",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 96,
					maxClip: 32,
					maxReload: 32,
					reloadTime: 1.8,
					fireDelay: .045,
					switchDelay: .75,
					barrelLength: 2.45,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 11,
					shotSpread: 10,
					bulletCount: 1,
					bulletType: "bullet_mac10",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-mac10.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .46
						},
						tint: 3684408,
						hands: 2,
						leftHandOffset: 4,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .35
					},
					sound: {
						shoot: "mac10_01",
						reload: "mac10_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "mac10_switch_01"
					}
				},
				ump9: {
					name: "UMP9",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 90,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 1.9,
					fireDelay: .35,
					burstDelay: .07,
					switchDelay: .75,
					barrelLength: 2.7,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1.5,
					bulletCount: 1,
					burstCount: 3,
					bulletType: "bullet_ump9",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ump9.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .52
						},
						tint: 1184274,
						hands: 2,
						leftHandOffset: 16,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .4
					},
					sound: {
						shoot: "ump9_01",
						reload: "ump9_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "ump9_switch_01"
					}
				},
				vector: {
					name: "Vector",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 99,
					maxClip: 33,
					maxReload: 33,
					reloadTime: 1.6,
					fireDelay: .038,
					switchDelay: .75,
					barrelLength: 2.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 4.5,
					shotSpread: 2.5,
					bulletCount: 1,
					bulletType: "bullet_vector",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-vector.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .51
						},
						tint: 9009504,
						hands: 2,
						leftHandOffset: 20,
						recoil: 2
					},
					particle: {
						shellScale: 1,
						shellOffset: .4
					},
					sound: {
						shoot: "vector_01",
						reload: "vector_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "vector_switch_01"
					}
				},
				famas: {
					name: "FAMAS",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 75,
					maxClip: 25,
					maxReload: 25,
					reloadTime: 2.3,
					fireDelay: .35,
					burstDelay: .07,
					switchDelay: .75,
					barrelLength: 2.975,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 1.1,
					bulletCount: 1,
					burstCount: 3,
					bulletType: "bullet_famas",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-famas.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .53
						},
						tint: 10061929,
						hands: 2,
						leftHandOffset: 16,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .425
					},
					sound: {
						shoot: "famas_01",
						reload: "famas_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "famas_switch_01"
					}
				},
				hk416: {
					name: "HK416",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 90,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 2.3,
					fireDelay: .075,
					switchDelay: .75,
					barrelLength: 2.7,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 8,
					shotSpread: 4,
					bulletCount: 1,
					bulletType: "bullet_hk416",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-hk416.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .52
						},
						tint: 14402714,
						hands: 2,
						leftHandOffset: 12,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .4
					},
					sound: {
						shoot: "hk416_01",
						reload: "hk416_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "hk416_switch_01"
					}
				},
				mk12: {
					name: "Mk 12 SPR",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 60,
					maxClip: 20,
					maxReload: 20,
					reloadTime: 2.4,
					fireDelay: .15,
					switchDelay: .75,
					barrelLength: 3.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1,
					bulletCount: 1,
					bulletType: "bullet_mk12",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-mk12.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .49
						},
						tint: 10984586,
						hands: 2,
						leftHandOffset: 12,
						recoil: 3.75
					},
					particle: {
						shellScale: 1.3,
						shellOffset: .55
					},
					sound: {
						shoot: "mk12_01",
						reload: "mk12_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "mk12_switch_01"
					}
				},
				m249: {
					name: "M249",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "556mm",
					ammoSpawnCount: 200,
					maxClip: 100,
					maxReload: 100,
					reloadTime: 6.7,
					fireDelay: .08,
					switchDelay: .75,
					barrelLength: 3.75,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 6,
					shotSpread: 1.5,
					bulletCount: 1,
					bulletType: "bullet_m249",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: -4
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m249.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						sprite_bot: "img/guns/gun-m249-bot-01.svg",
						scale: {
							x: .5,
							y: .525
						},
						tint: 3618613,
						hands: 2,
						leftHandOffset: 32,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .5875
					},
					sound: {
						shoot: "m249_01",
						reload: "m249_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "m249_switch_01"
					}
				},
				ak47: {
					name: "AK-47",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 90,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 2.5,
					fireDelay: .1,
					switchDelay: .75,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 7.5,
					shotSpread: 2.5,
					bulletCount: 1,
					bulletType: "bullet_ak47",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ak.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 6433298,
						hands: 2,
						leftHandOffset: 8,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "ak47_01",
						reload: "ak47_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "ak47_switch_01"
					}
				},
				scar: {
					name: "SCAR-H",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 80,
					maxClip: 20,
					maxReload: 20,
					reloadTime: 2.7,
					fireDelay: .09,
					switchDelay: .75,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 5,
					shotSpread: 2,
					bulletCount: 1,
					bulletType: "bullet_scar",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-scar.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 10189640,
						hands: 2,
						leftHandOffset: 8,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "scar_01",
						reload: "scar_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "scar_switch_01"
					}
				},
				dp28: {
					name: "DP-28",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 120,
					maxClip: 60,
					maxReload: 60,
					reloadTime: 3.3,
					fireDelay: .115,
					switchDelay: .75,
					barrelLength: 3.75,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 9,
					shotSpread: 2,
					bulletCount: 1,
					bulletType: "bullet_dp28",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: -2
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-dp28.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						sprite_top: "img/guns/gun-dp28-top-01.svg",
						scale: {
							x: .5,
							y: .53
						},
						tint: 1710618,
						hands: 2,
						leftHandOffset: 24,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .6
					},
					sound: {
						shoot: "dp28_01",
						reload: "dp28_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "dp28_switch_01"
					}
				},
				mosin: {
					name: "Mosin Nagant",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 20,
					maxClip: 5,
					maxReload: 1,
					reloadTime: .9,
					fireDelay: 2,
					switchDelay: 1,
					pullDelay: 1,
					barrelLength: 3.75,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1,
					bulletCount: 1,
					bulletType: "bullet_mosin",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-enfield.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .52
						},
						tint: 3348992,
						hands: 2,
						leftHandOffset: 8,
						recoil: 5.25
					},
					particle: {
						shellScale: 1.8,
						shellOffset: .6
					},
					sound: {
						shoot: "mosin_01",
						reload: "mosin_reload_01",
						cycle: "mosin_cycle_01",
						pull: "mosin_pull_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "mosin_cycle_01"
					}
				},
				m39: {
					name: "M39 EMR",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 60,
					maxClip: 20,
					maxReload: 20,
					reloadTime: 2.5,
					fireDelay: .2,
					switchDelay: .75,
					barrelLength: 3.5,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 4.25,
					shotSpread: 1,
					bulletCount: 1,
					bulletType: "bullet_m39",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m39.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 3355443,
						hands: 2,
						leftHandOffset: 8,
						recoil: 3.75
					},
					particle: {
						shellScale: 1.3,
						shellOffset: .575
					},
					sound: {
						shoot: "m39_01",
						reload: "m39_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "m39_switch_01"
					}
				},
				m870: {
					name: "M870",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "12gauge",
					ammoSpawnCount: 10,
					maxClip: 5,
					maxReload: 1,
					reloadTime: .75,
					fireDelay: .9,
					switchDelay: .9,
					pullDelay: .9,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 10,
					bulletCount: 9,
					bulletType: "bullet_shotgun",
					headshotMult: 2,
					lootImg: {
						sprite: "img/loot/loot-weapon-pumpshotgun.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					speed: {
						equip: 0,
						attack: 0
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 3348992,
						hands: 2,
						leftHandOffset: 20,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "m870_01",
						reload: "m870_reload_01",
						cycle: "m870_cycle_01",
						pull: "m870_pull_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "m870_cycle_01"
					}
				},
				mp220: {
					name: "MP220",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "reload",
					ammo: "12gauge",
					ammoSpawnCount: 10,
					maxClip: 2,
					maxReload: 2,
					reloadTime: 2.6,
					fireDelay: .2,
					switchDelay: .3,
					barrelLength: 2.45,
					rad: 1,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 10,
					bulletCount: 9,
					bulletType: "bullet_shotgun",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-soshotgun.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-med-01.svg",
						scale: {
							x: .5,
							y: .47
						},
						tint: 3348992,
						hands: 2,
						leftHandOffset: 0,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .35
					},
					sound: {
						shoot: "mp220_01",
						reload: "mp220_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "mp220_deploy_01"
					}
				},
				saiga: {
					name: "Saiga-12",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "12gauge",
					ammoSpawnCount: 20,
					maxClip: 5,
					maxReload: 5,
					reloadTime: 2.5,
					fireDelay: .4,
					switchDelay: .75,
					barrelLength: 3.15,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 2,
					shotSpread: 10,
					bulletCount: 9,
					bulletType: "bullet_shotgun",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-autoshotgun.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-long-01.svg",
						scale: {
							x: .5,
							y: .45
						},
						tint: 2302755,
						hands: 2,
						leftHandOffset: 12,
						recoil: 3
					},
					particle: {
						shellScale: 1,
						shellOffset: .45
					},
					sound: {
						shoot: "saiga_01",
						reload: "saiga_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_02",
						deploy: "saiga_switch_01"
					}
				},
				m9: {
					name: "M9",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 45,
					dualWieldType: "m9_dual",
					maxClip: 15,
					maxReload: 15,
					reloadTime: 1.6,
					fireDelay: .12,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 8,
					shotSpread: 8,
					bulletCount: 1,
					bulletType: "bullet_m9",
					headshotMult: 112,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m9.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .51
						},
						tint: 1973790,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "m9_01",
						reload: "m9_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "m9_switch_01"
					}
				},
				m9_dual: {
					name: "Dual M9",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					isDual: !0,
					ammo: "9mm",
					ammoSpawnCount: 45,
					maxClip: 30,
					maxReload: 30,
					reloadTime: 3.1,
					fireDelay: .08,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 9,
					shotSpread: 11,
					bulletCount: 1,
					bulletType: "bullet_m9",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-m9-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .51
						},
						tint: 1973790,
						hands: 2,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "m9_01",
						reload: "m9_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "m9_switch_01"
					}
				},
				glock: {
					name: "Glock 18C",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 51,
					dualWieldType: "glock_dual",
					maxClip: 17,
					maxReload: 17,
					reloadTime: 1.95,
					fireDelay: .06,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 10,
					shotSpread: 12,
					bulletCount: 1,
					bulletType: "bullet_glock",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-glock.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 1973790,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "glock_01",
						reload: "glock_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "glock_switch_01"
					}
				},
				glock_dual: {
					name: "Dual Glock 18C",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "9mm",
					ammoSpawnCount: 51,
					isDual: !0,
					maxClip: 34,
					maxReload: 34,
					reloadTime: 3.8,
					fireDelay: .03,
					switchDelay: .25,
					barrelLength: 2.2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 16,
					shotSpread: 18,
					bulletCount: 1,
					bulletType: "bullet_glock",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-glock-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .5
						},
						tint: 1973790,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .25
					},
					sound: {
						shoot: "glock_01",
						reload: "glock_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "glock_switch_01"
					}
				},
				ot38: {
					name: "OT-38",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 20,
					dualWieldType: "ot38_dual",
					maxClip: 5,
					maxReload: 5,
					reloadTime: 2,
					fireDelay: .4,
					switchDelay: .3,
					barrelLength: 2.05,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 3,
					shotSpread: 1.25,
					bulletCount: 1,
					bulletType: "bullet_ot38",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ot38.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .48
						},
						tint: 7368816,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .225
					},
					sound: {
						shoot: "ot38_01",
						reload: "ot38_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "ot38_switch_01"
					}
				},
				ot38_dual: {
					name: "Dual OT-38",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "762mm",
					ammoSpawnCount: 20,
					isDual: !0,
					maxClip: 10,
					maxReload: 10,
					reloadTime: 3.8,
					fireDelay: .2,
					switchDelay: .3,
					barrelLength: 2,
					rad: 1.25,
					recoilTime: 1e10,
					moveSpread: 4,
					shotSpread: 1.75,
					bulletCount: 1,
					bulletType: "bullet_ot38",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-ot38-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .48
						},
						tint: 7368816,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .225
					},
					sound: {
						shoot: "ot38_01",
						reload: "ot38_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "ot38_switch_01"
					}
				},
				deagle: {
					name: "Desert Eagle",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "50AE",
					ammoSpawnCount: 49,
					dualWieldType: "deagle_dual",
					maxClip: 7,
					maxReload: 7,
					reloadTime: 2.3,
					fireDelay: .16,
					switchDelay: .3,
					barrelLength: 1.855,
					rad: 1.25,
					recoilTime: .5,
					moveSpread: 6,
					shotSpread: 2.5,
					bulletCount: 1,
					bulletType: "bullet_deagle",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-deagle.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .54
						},
						tint: 14791743,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .265
					},
					sound: {
						shoot: "deagle_01",
						reload: "deagle_reload_01",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "deagle_switch_01"
					}
				},
				deagle_dual: {
					name: "Dual Desert Eagle",
					type: "gun",
					fireMode: "auto",
					reloadMode: "mag",
					caseTiming: "shoot",
					ammo: "50AE",
					ammoSpawnCount: 98,
					isDual: !0,
					maxClip: 14,
					maxReload: 14,
					reloadTime: 4,
					fireDelay: .12,
					switchDelay: .3,
					barrelLength: 1.855,
					rad: 1.25,
					recoilTime: .5,
					moveSpread: 7.5,
					shotSpread: 3.5,
					bulletCount: 1,
					bulletType: "bullet_deagle",
					headshotMult: 2,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-weapon-deagle-dual.svg",
						scale: .3,
						rad: 25,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/guns/gun-short-01.svg",
						scale: {
							x: .5,
							y: .54
						},
						tint: 14791743,
						hands: 1,
						leftHandOffset: 0,
						recoil: 2.25
					},
					particle: {
						shellScale: 1,
						shellOffset: .265
					},
					sound: {
						shoot: "deagle_01",
						reload: "deagle_reload_02",
						pickup: "gun_pickup_01",
						empty: "empty_fire_01",
						deploy: "deagle_switch_01"
					}
				},
				frag: {
					name: "Frag Grenade",
					type: "throwable",
					explosionType: "explosion_frag",
					inventoryOrder: 1,
					cookable: !0,
					fuseTime: 4,
					fireDelay: .4,
					switchDelay: .3,
					rad: 1,
					projRad: .5,
					throwSpeed: 20,
					throwDistance: 18,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-throwable-frag.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/proj/frag-proj-nopin-nolever.svg",
						scale: .12,
						tint: 16777215
					},
					handImg: {
						equip: {
							right: {
								sprite: "img/proj/frag-proj-pin.svg",
								pos: {
									x: -30,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "none"
							}
						},
						cook: {
							right: {
								sprite: "img/proj/frag-proj-nopin.svg",
								pos: {
									x: -30,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "img/proj/frag-pin.svg",
								pos: {
									x: -30,
									y: 30
								},
								scale: .4
							}
						},
						throwing: {
							right: {
								sprite: "none"
							},
							left: {
								sprite: "none"
							}
						}
					},
					sound: {
						pullPin: "frag_pin_01",
						throwing: "frag_throw_01",
						pickup: "frag_pickup_01",
						deploy: "frag_deploy_01"
					}
				},
				smoke: {
					name: "Smoke Grenade",
					type: "throwable",
					explosionType: "explosion_smoke",
					inventoryOrder: 2,
					cookable: !1,
					fuseTime: 2.5,
					fireDelay: .4,
					switchDelay: .3,
					rad: 1,
					projRad: .5,
					throwSpeed: 15,
					throwDistance: 18,
					speed: {
						equip: 0,
						attack: 0
					},
					lootImg: {
						sprite: "img/loot/loot-throwable-smoke.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 65280
					},
					worldImg: {
						sprite: "img/proj/smoke-proj-nopin-nolever.svg",
						scale: .12,
						tint: 16777215
					},
					handImg: {
						equip: {
							right: {
								sprite: "img/proj/smoke-proj-pin.svg",
								pos: {
									x: -15,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "none"
							}
						},
						cook: {
							right: {
								sprite: "img/proj/smoke-proj-nopin.svg",
								pos: {
									x: -15,
									y: 30
								},
								scale: .4
							},
							left: {
								sprite: "img/proj/frag-pin.svg",
								pos: {
									x: -15,
									y: 30
								},
								scale: .4
							}
						},
						throwing: {
							right: {
								sprite: "none"
							},
							left: {
								sprite: "none"
							}
						}
					},
					sound: {
						pullPin: "frag_pin_01",
						throwing: "frag_throw_01",
						pickup: "frag_pickup_01",
						deploy: "frag_deploy_01"
					}
				},
				"9mm": {
					name: "9mm",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 15,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 16756224,
						tintDark: 12550912
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"762mm": {
					name: "7.62mm",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 10,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 26367,
						tintDark: 19903
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"556mm": {
					name: "5.56mm",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 10,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 237056,
						tintDark: 161536
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"12gauge": {
					name: "12 gauge",
					type: "ammo",
					subtype: "standard",
					rad: 1.2,
					minStackSize: 5,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 16711680,
						tintDark: 12517376
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				"50AE": {
					name: ".50 AE",
					type: "ammo",
					subtype: "special",
					rad: 1.2,
					minStackSize: 10,
					hideUi: !0,
					lootImg: {
						sprite: "img/loot/loot-ammo-box.svg",
						scale: .2,
						rad: 12,
						border: !1,
						tint: 2697513,
						tintDark: 2039583
					},
					sound: {
						pickup: "ammo_pickup_01"
					}
				},
				bandage: {
					name: "Bandage",
					type: "heal",
					useTime: 1.75,
					heal: 200,
					maxHeal: 200,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-bandage.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "bandage_pickup_01",
						use: "bandage_use_01"
					}
				},
				healthkit: {
					name: "Med Kit",
					type: "heal",
					useTime: 1,
					heal: 100,
					maxHeal: 100,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-healthkit.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "healthkit_pickup_01",
						use: "healthkit_use_01"
					}
				},
				soda: {
					name: "Soda",
					type: "boost",
					useTime: 1,
					boost: 200,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-soda.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "soda_pickup_01",
						use: "soda_use_01"
					}
				},
				painkiller: {
					name: "Pills",
					type: "boost",
					useTime: 1,
					boost: 200,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-medical-pill.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pills_pickup_01",
						use: "pills_use_01"
					}
				},
				backpack00: {
					name: "Pouch",
					type: "backpack",
					desc: "Holds a minimal amount of ammo and supplies.",
					level: 3,
					rad: 1,
					playerRad: .55,
					tint: 16777215,
					lootImg: {
						sprite: "img/loot/loot-pack-00.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				backpack01: {
					name: "Small Pack",
					type: "backpack",
					desc: "Holds an adequate amount of ammo and supplies.",
					level: 3,
					rad: 1,
					playerRad: .65,
					tint: 6697728,
					lootImg: {
						sprite: "img/loot/loot-pack-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				backpack02: {
					name: "Regular Pack",
					type: "backpack",
					desc: "Holds a generous amount of ammo and supplies.",
					level: 3,
					rad: 1,
					tint: 26112,
					playerRad: .85,
					lootImg: {
						sprite: "img/loot/loot-pack-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				backpack03: {
					name: "Military Pack",
					type: "backpack",
					desc: "For when you need to hold all of the things.",
					level: 3,
					rad: 1,
					tint: 6710835,
					playerRad: 1,
					lootImg: {
						sprite: "img/loot/loot-pack-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "pack_pickup_01"
					}
				},
				helmet01: {
					name: "Level 1 Helmet",
					type: "helmet",
					level: 3,
					damageReduction: .25,
					rad: 1,
					tint: 3244031,
					lootImg: {
						sprite: "img/loot/loot-helmet-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "helmet_pickup_01"
					}
				},
				helmet02: {
					name: "Level 2 Helmet",
					type: "helmet",
					level: 3,
					damageReduction: .4,
					rad: 1,
					tint: 13027014,
					lootImg: {
						sprite: "img/loot/loot-helmet-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "helmet_pickup_01"
					}
				},
				helmet03: {
					name: "Level 3 Helmet",
					type: "helmet",
					level: 3,
					damageReduction: .55,
					rad: 1,
					tint: 2434341,
					lootImg: {
						sprite: "img/loot/loot-helmet-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "helmet_pickup_01"
					}
				},
				chest01: {
					name: "Level 1 Vest",
					type: "chest",
					level: 3,
					damageReduction: .25,
					rad: 1,
					tint: 11842740,
					lootImg: {
						sprite: "img/loot/loot-chest-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "chest_pickup_01"
					}
				},
				chest02: {
					name: "Level 2 Vest",
					type: "chest",
					level: 3,
					damageReduction: .38,
					rad: 1,
					tint: 5921370,
					lootImg: {
						sprite: "img/loot/loot-chest-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "chest_pickup_01"
					}
				},
				chest03: {
					name: "Level 3 Vest",
					type: "chest",
					level: 3,
					damageReduction: .45,
					rad: 1,
					tint: 0,
					lootImg: {
						sprite: "img/loot/loot-chest-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "chest_pickup_01"
					}
				},
				"1xscope": {
					name: "1x Scope",
					type: "scope",
					level: 8,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-00.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"2xscope": {
					name: "2x Scope",
					type: "scope",
					level: 8,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-01.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"4xscope": {
					name: "4x Scope",
					type: "scope",
					level: 8,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-02.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"8xscope": {
					name: "8x Scope",
					type: "scope",
					level: 8,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-03.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				},
				"15xscope": {
					name: "15x Scope",
					type: "scope",
					level: 15,
					rad: 1,
					lootImg: {
						sprite: "img/loot/loot-scope-04.svg",
						scale: .2,
						rad: 16,
						border: !0,
						tint: 16777215
					},
					sound: {
						pickup: "scope_pickup_01"
					}
				}
			},
			scopeZoomRadius: {
				"1xscope": 86,
				"2xscope": 86,
				"4xscope": 86,
				"8xscope": 86,
				"15xscope": 104
			},
			bagSizes: {
				"9mm": [420, 420, 420, 420],
				"762mm": [420, 420, 420, 420],
				"556mm": [420, 420, 420, 420],
				"12gauge": [420, 420, 420, 420],
				"50AE": [420, 420, 420, 420],
				frag: [420, 420, 420, 420],
				smoke: [3, 6, 9, 12],
				bandage: [420, 420, 420, 420],
				healthkit: [1, 2, 3, 4],
				soda: [2, 5, 10, 15],
				painkiller: [1, 2, 3, 4],
				"1xscope": [1, 1, 1, 1],
				"2xscope": [1, 1, 1, 1],
				"4xscope": [1, 1, 1, 1],
				"8xscope": [1, 1, 1, 1],
				"15xscope": [1, 1, 1, 1]
			}
		}
	},
	"+sac": function(e, t, a) {
		function i(e) {
			return a(o(e))
		}

		function o(e) {
			var t = n[e];
			if (!(t + 1)) throw new Error("Cannot find module '" + e + "'.");
			return t
		}
		var n = {
			"./da.js": "j5/T",
			"./de.js": "KdTN",
			"./en.js": "W+3y",
			"./es.js": "pb8F",
			"./fr.js": "FRcz",
			"./it.js": "O/82",
			"./jp.js": "6XNf",
			"./ko.js": "BkwK",
			"./nl.js": "vdJX",
			"./pl.js": "DMc6",
			"./pt.js": "nlKB",
			"./ru.js": "8jco",
			"./sv.js": "RCak",
			"./th.js": "R4DZ",
			"./tr.js": "eqS/",
			"./vn.js": "a5N1",
			"./zh-cn.js": "UWg4",
			"./zh-tw.js": "kIX4"
		};
		i.keys = function() {
			return Object.keys(n)
		}, i.resolve = o, e.exports = i, i.id = "+sac"
	},
	"/2+T": function(e, t, a) {
		"use strict";
		var i = {
			create: function(e, t) {
				return {
					x: e,
					y: void 0 !== t ? t : e
				}
			},
			copy: function(e) {
				return {
					x: e.x,
					y: e.y
				}
			},
			set: function(e, t) {
				e.x = t.x, e.y = t.y
			},
			add: function(e, t) {
				return {
					x: e.x + t.x,
					y: e.y + t.y
				}
			},
			sub: function(e, t) {
				return {
					x: e.x - t.x,
					y: e.y - t.y
				}
			},
			mul: function(e, t) {
				return {
					x: e.x * t,
					y: e.y * t
				}
			},
			div: function(e, t) {
				return {
					x: e.x / t,
					y: e.y / t
				}
			},
			neg: function(e) {
				return {
					x: -e.x,
					y: -e.y
				}
			},
			lengthSqr: function(e) {
				return e.x * e.x + e.y * e.y
			},
			length: function(e) {
				return Math.sqrt(i.lengthSqr(e))
			},
			normalize: function(e) {
				var t = i.length(e);
				return {
					x: t > 1e-6 ? e.x / t : e.x,
					y: t > 1e-6 ? e.y / t : e.y
				}
			},
			normalizeSafe: function(e, t) {
				t = t || i.create(1, 0);
				var a = i.length(e);
				return {
					x: a > 1e-6 ? e.x / a : t.x,
					y: a > 1e-6 ? e.y / a : t.y
				}
			},
			dot: function(e, t) {
				return e.x * t.x + e.y * t.y
			},
			perp: function(e) {
				return {
					x: -e.y,
					y: e.x
				}
			},
			proj: function(e, t) {
				return i.mul(t, i.dot(e, t) / i.dot(t, t))
			},
			rotate: function(e, t) {
				var a = Math.cos(t),
					i = Math.sin(t);
				return {
					x: e.x * a - e.y * i,
					y: e.x * i + e.y * a
				}
			},
			mulElems: function(e, t) {
				return {
					x: e.x * t.x,
					y: e.y * t.y
				}
			},
			divElems: function(e, t) {
				return {
					x: e.x / t.x,
					y: e.y / t.y
				}
			},
			minElems: function(e, t) {
				return {
					x: Math.min(e.x, t.x),
					y: Math.min(e.y, t.y)
				}
			},
			maxElems: function(e, t) {
				return {
					x: Math.max(e.x, t.x),
					y: Math.max(e.y, t.y)
				}
			},
			randomUnit: function() {
				return i.normalizeSafe(i.create(Math.random() - .5, Math.random() - .5), i.create(1, 0))
			},
			lerp: function(e, t, a) {
				return i.add(i.mul(t, 1 - e), i.mul(a, e))
			},
			eq: function(e, t, a) {
				var i = void 0 !== a ? a : 1e-4;
				return Math.abs(e.x - t.x) <= i && Math.abs(e.y - t.y) <= i
			}
		};
		e.exports = i
	},
	"/rj8": function(e, t, a) {
		"use strict";

		function i() {
			this.active = !1, this.dirty = !1, this.container = new o.Graphics, this.container.alpha = 0, this.mobileOffset = 0, this.clientData = {
				label: "",
				duration: 0,
				keepAlive: !1,
				elapsed: 0,
				radius: 35,
				lineWidth: 8,
				fontWidth: 24
			}, this.timerBackground = o.Sprite.fromImage("img/gui/timer-background.svg"), this.timerBackground.anchor = new o.Point(.5, .5), this.timerBackground.scale = new o.Point(1, 1), this.container.addChild(this.timerBackground), this.innerCircle = new o.Graphics, this.outerCircle = new o.Graphics, this.container.addChild(this.innerCircle, this.outerCircle), this.counterText = new o.Text, this.counterText.anchor = new o.Point(.5, .5);
			var e = {
				fontFamily: "Roboto Condensed, Arial, sans-serif",
				fontWeight: "bold",
				fontSize: this.clientData.fontWidth,
				align: "center",
				fill: 16777215,
				stroke: 0,
				strokeThickness: 3
			};
			this.counterText.style = e, this.counterText.text = this.clientData.duration.toFixed(1), this.container.addChild(this.counterText), this.labelText = new o.Text, this.labelText.anchor = new o.Point(.5, .5);
			var t = {
				fontFamily: "Roboto Condensed, Arial, sans-serif",
				fontWeight: "100",
				fontSize: this.clientData.fontWidth,
				align: "center",
				fill: 16777215
			};
			this.labelText.style = t, this.container.addChild(this.labelText), this.screenScaleFactor = 1, this.callback = null
		}
		var o = a("gKxX"),
			n = (a("+0OL"), a("Tf6H"), a("/2+T"), a("zinx")),
			r = a("Jr6A");
		i.prototype = {
			init: function(e, t, a, i) {
				this.active = !0, this.clientData = {
					label: a,
					duration: t,
					keepAlive: i,
					elapsed: 0,
					radius: 35,
					lineWidth: 8,
					fontWidth: 24
				}, this.labelText.text = this.clientData.duration.toFixed(1), this.callback = e, this.container.visible = !0, this.container.alpha = 1
			},
			destroy: function() {
				this.container.destroy({
					children: !0,
					texture: !0
				})
			},
			resize: function(e, t) {
				this.screenScaleFactor = t, n.layout == n.Layout.Sm ? (n.tablet || (this.container.scale = new o.Point(.5, .5)), this.mobileOffset = r.isLandscape() ? e.mobileOffsetLandscape : e.mobileOffsetPortrait) : (this.container.scale = new o.Point(1, 1), this.mobileOffset = 0)
			},
			free: function(e) {
				this.active = !1, e && (this.container.visible = !1, this.container.clear())
			},
			update: function(e, t, a) {
				if (!this.active) return void(this.container.alpha = this.clientData.keepAlive ? 1 : 0);
				this.clientData.elapsed += e, this.clientData.elapsed = Math.min(this.clientData.elapsed, this.clientData.duration), (this.clientData.elapsed >= this.clientData.duration || t.dead) && (this.render(a), this.free(), this.callback && this.callback(t))
			},
			render: function(e) {
				if (this.active) {
					this.container.clear(), this.outerCircle.clear(), this.counterText.text = "", this.labelText.text = "";
					var t = Math.min(this.clientData.elapsed / this.clientData.duration, 1),
						a = {
							x: e.screenWidth / 2,
							y: e.screenHeight / 3 * this.screenScaleFactor + this.mobileOffset
						},
						i = Math.min(t, 1) * Math.PI * 2 - Math.PI / 2;
					this.container.beginFill(0, .5), this.outerCircle.lineStyle(.75 * this.clientData.lineWidth, 16777215), this.outerCircle.arc(0, 0, this.clientData.radius, -Math.PI / 2, i, !1), this.counterText.text = Math.max(0, this.clientData.duration - this.clientData.elapsed).toFixed(1);
					var o = 2.5 * this.clientData.radius;
					this.labelText.position.y = o, this.labelText.text = this.clientData.label;
					var n = 56 + this.clientData.label.length * this.clientData.fontWidth * .45,
						r = 1.5 * this.clientData.fontWidth,
						s = 0 - n / 2,
						l = o - r / 2;
					this.container.drawRoundedRect(s, l, n, r, 5), this.container.position = {
						x: a.x,
						y: a.y
					}
				}
			}
		}, e.exports = {
			PieTimer: i
		}
	},
	"09pV": function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function n(e) {
			return document.getElementById(e)
		}

		function r(e) {
			return 0 == e.button
		}

		function s(e) {
			return "which" in e ? 3 == e.which : 2 == e.button
		}

		function l(e, t, a) {
			if (e instanceof Array)
				for (var i = 0; i < e.length; i++) l(e[i], void 0 !== a ? t[a] : t, i);
			else if (e instanceof Object)
				for (var o = Object.keys(e), n = 0; n < o.length; n++) {
					var r = o[n];
					l(e[r], void 0 !== a ? t[a] : t, r)
				} else t[a] = e
		}

		function c(e, t, a) {
			if (t instanceof Array) {
				for (var i = [], o = 0; o < t.length; o++) i[o] = c(e[o], t[o], a);
				return i
			}
			if (t instanceof Object) {
				for (var n = {}, r = Object.keys(t), s = 0; s < r.length; s++) {
					var l = r[s];
					n[l] = c(e[l], t[l], a)
				}
				return n
			}
			return e != t || a
		}

		function m() {
			var e = [];
			for (var t in g.items) g.items.hasOwnProperty(t) && "scope" == g.items[t].type && e.push(t);
			return e
		}

		function d() {
			var e = [];
			for (var t in g.items)
				if (g.items.hasOwnProperty(t)) {
					var a = g.items[t].type;
					"heal" != a && "boost" != a && "ammo" != a || g.items[t].hideUi || e.push(t)
				}
			return e
		}

		function p() {
			return ["chest", "helmet", "backpack"]
		}
		var u = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			h = a("9xSA"),
			g = a("+0OL"),
			f = g.Action,
			y = a("0od3"),
			b = a("yp2f"),
			x = a("Tf6H"),
			v = a("/2+T"),
			k = a("zinx"),
			_ = a("Jr6A"),
			w = g.DamageType,
			S = b.PickupMsgType,
			M = 6,
			T = 750,
			P = {
				None: 0,
				Cancel: 1,
				Loot: 2,
				Revive: 3,
				Object: 4
			},
			C = function e() {
				o(this, e), this.mobile = !1, this.touch = !1, this.pickupMessage = {
					message: "",
					ticker: 0,
					duration: 0,
					opacity: 0
				}, this.killFeed = [];
				for (var t = 0; t < M; t++) this.killFeed.push({
					text: "",
					color: "#000000",
					offset: 0,
					opacity: 0,
					ticker: Number.MAX_VALUE
				});
				this.weapons = [];
				for (var a = 0; a < g.WeaponSlot.Count; a++) this.weapons[a] = {
					slot: a,
					name: "",
					ammo: 0,
					equipped: !1,
					selectable: !1,
					opacity: 0,
					width: 0,
					ticker: 0
				};
				this.ammo = {
					current: 10,
					remaining: 10,
					displayCurrent: !1,
					displayRemaining: !1
				}, this.interaction = {
					type: P.None,
					text: "",
					key: "",
					usable: !1
				}, this.scopes = [];
				for (var i = m(), n = 0; n < i.length; n++) this.scopes.push({
					type: i[n],
					visible: !1,
					equipped: !1,
					selectable: !1
				});
				this.loot = [];
				for (var r = d(), s = 0; s < r.length; s++) this.loot.push({
					type: r[s],
					count: 0,
					maximum: 0,
					selectable: !1,
					width: 0,
					ticker: 0
				});
				this.gear = [];
				for (var l = p(), c = 0; c < l.length; c++) this.gear.push({
					type: l[c],
					item: "",
					selectable: !1,
					width: 0,
					ticker: 0
				});
				this.health = 100, this.boost = 0, this.downed = !1
			},
			z = function() {
				function e(t) {
					var a = this;
					o(this, e), this.localization = t, this.oldState = new C, this.newState = new C, this.frameCount = 0, this.dom = {
						debugButton: n("ui-debug-button"),
						emoteButton: n("ui-emote-button"),
						menu: {
							touchStyles: n("btn-touch-styles"),
							fullScreen: n("btn-game-fullscreen")
						},
						pickupMessage: n("ui-pickup-message"),
						killFeed: {
							div: n("ui-killfeed-contents"),
							lines: []
						},
						weapons: [],
						ammo: {
							current: n("ui-current-clip"),
							remaining: n("ui-remaining-ammo"),
							reloadButton: n("ui-reload-button")
						},
						interaction: {
							div: n("ui-interaction"),
							key: n("ui-interaction-press"),
							text: n("ui-interaction-description")
						},
						health: {
							inner: n("ui-health-actual"),
							depleted: n("ui-health-depleted")
						},
						boost: {
							div: n("ui-boost-counter"),
							bars: [n("ui-boost-counter-0").firstElementChild, n("ui-boost-counter-1").firstElementChild, n("ui-boost-counter-2").firstElementChild, n("ui-boost-counter-3").firstElementChild]
						},
						scopes: [],
						loot: [],
						gear: []
					};
					for (var i = 0; i < M; i++) {
						var l = "ui-killfeed-" + i,
							c = n(l);
						if (!c) {
							c = document.createElement("div"), c.id = l, c.classList.add("killfeed-div");
							var u = document.createElement("div");
							u.classList.add("killfeed-text"), c.appendChild(u), this.dom.killFeed.div.appendChild(c)
						}
						this.dom.killFeed.lines.push({
							line: c,
							text: c.firstElementChild
						})
					}
					for (var h = 0; h < 4; h++) {
						var f = n("ui-weapon-id-" + (h + 1)),
							y = {
								div: f,
								name: f.getElementsByClassName("ui-weapon-name")[0],
								number: f.getElementsByClassName("ui-weapon-number")[0],
								image: f.getElementsByClassName("ui-weapon-image")[0],
								ammo: f.getElementsByClassName("ui-weapon-ammo-counter")[0]
							};
						this.dom.weapons.push(y)
					}
					for (var b = m(), x = 0; x < b.length; x++) {
						var v = b[x],
							k = {
								scopeType: v,
								div: n("ui-scope-" + v)
							};
						this.dom.scopes.push(k)
					}
					for (var _ = d(), w = 0; w < _.length; w++) {
						var S = _[w],
							P = n("ui-loot-" + S);
						if (P) {
							var z = {
								lootType: S,
								div: P,
								count: P.getElementsByClassName("ui-loot-count")[0],
								image: P.getElementsByClassName("ui-loot-image")[0],
								overlay: P.getElementsByClassName("ui-loot-overlay")[0]
							};
							this.dom.loot.push(z)
						}
					}
					for (var I = p(), D = 0; D < I.length; D++) {
						var A = I[D],
							O = n("ui-armor-" + A),
							L = {
								gearType: A,
								div: O,
								level: O.getElementsByClassName("ui-armor-level")[0],
								image: O.getElementsByClassName("ui-armor-image")[0]
							};
						this.dom.gear.push(L)
					}
					this.uiEvents = [], this.eventListeners = [];
					var B = function(e, t, i) {
						a.eventListeners.push({
							event: e,
							elem: t,
							fn: i
						}), t.addEventListener(e, i)
					};
					this.itemActions = [];
					for (var E = function(e, t, i, o) {
							a.itemActions.push({
								action: e,
								type: t,
								data: i,
								div: o,
								actionQueued: !1,
								actionTime: 0
							})
						}, F = 0; F < this.dom.weapons.length; F++) E("use", "weapon", F, this.dom.weapons[F].div), E("drop", "weapon", F, this.dom.weapons[F].div);
					for (var R = 0; R < this.dom.scopes.length; R++) {
						var j = this.dom.scopes[R];
						E("use", "scope", j.scopeType, j.div), "1xscope" != j.scopeType && E("drop", "loot", j.scopeType, j.div) && E("drop", "loot", "15xscope", j.div)
					}
					for (var N = 0; N < this.dom.loot.length; N++) {
						var q = this.dom.loot[N],
							G = g.items[q.lootType];
						"heal" != G.type && "boost" != G.type || E("use", "loot", q.lootType, q.div), E("drop", "loot", q.lootType, q.div)
					}
					for (var U = 0; U < this.dom.gear.length; U++) {
						var V = this.dom.gear[U];
						"backpack" != V.gearType && E("drop", "loot", V.gearType, V.div)
					}
					for (var H = 0; H < this.itemActions.length; H++) ! function(e) {
						var t = a.itemActions[e];
						B("mousedown", t.div, function(e) {
							("use" == t.action && r(e) || "drop" == t.action && s(e)) && (e.stopPropagation(), t.actionQueued = !0)
						}), B("mouseup", t.div, function(e) {
							t.actionQueued && ("use" == t.action && r(e) || "drop" == t.action && s(e)) && (e.stopPropagation(), a.pushAction(t), t.actionQueued = !1)
						}), B("touchstart", t.div, function(e) {
							e.changedTouches.length > 0 && (e.stopPropagation(), t.actionQueued = !0, t.actionTime = (new Date).getTime(), t.touchOsId = e.changedTouches[0].identifier)
						}), B("touchend", t.div, function(e) {
							(new Date).getTime() - t.actionTime < T && t.actionQueued && "use" == t.action && a.pushAction(t), t.actionQueued = !1
						}), B("touchcancel", t.div, function(e) {
							t.actionQueued = !1
						})
					}(H);
					var W = document.getElementById("cvs");
					this.clearQueuedItemActions = function() {
						for (var e = 0; e < a.itemActions.length; e++) {
							a.itemActions[e].actionQueued = !1
						}
						W.focus()
					}, window.addEventListener("mouseup", this.clearQueuedItemActions), window.addEventListener("focus", this.clearQueuedItemActions)
				}
				return u(e, [{
					key: "free",
					value: function() {
						for (var e = 0; e < this.eventListeners.length; e++) {
							var t = this.eventListeners[e];
							t.elem.removeEventListener(t.event, t.fn)
						}
						window.removeEventListener("focus", this.clearQueuedItemActions), window.removeEventListener("mouseup", this.clearQueuedItemActions)
					}
				}, {
					key: "pushAction",
					value: function(e) {
						this.uiEvents.push({
							action: e.action,
							type: e.type,
							data: e.data
						})
					}
				}, {
					key: "flushInput",
					value: function() {
						this.uiEvents = []
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o, n) {
						var r = this.newState;
						if (r.mobile = k.mobile, r.touch = k.touch, r.touch)
							for (var s = 0; s < this.itemActions.length; s++) {
								var m = this.itemActions[s];
								if (m.actionQueued && "drop" == m.action) {
									var d = (new Date).getTime(),
										p = d - m.actionTime;
									p >= T && (this.pushAction(m), m.actionTime = d)
								}
							}
						r.pickupMessage.ticker += e;
						var u = r.pickupMessage.ticker,
							b = r.pickupMessage.duration;
						r.pickupMessage.opacity = y.smoothstep(u, 0, .2) * (1 - y.smoothstep(u, b, b + .2));
						for (var _ = 0, w = 0; w < r.killFeed.length; w++) {
							var S = r.killFeed[w];
							S.ticker += e;
							var M = S.ticker;
							S.offset = _, S.opacity = y.smoothstep(M, 0, .25) * (1 - y.smoothstep(M, 6, 6.5)), _ += y.min(M / .25, 1), k.mobile && (S.opacity = M < 6.5 ? 1 : 0)
						}
						r.health = t.netData.dead ? 0 : y.max(t.localData.health, 1), r.boost = t.localData.boost, r.downed = t.netData.downed;
						var C = P.None,
							z = null,
							I = !0;
						if (!t.netData.dead) {
							for (var D = null, A = 0, O = n.obstaclePool.getPool(), L = 0; L < O.length; L++) {
								var B = O[L];
								if (B.active && !B.dead && x.sameLayer(B.layer, t.layer)) {
									var E = B.getInteraction();
									if (E) {
										var F = h.intersectCircle(B.collider, t.netData.pos, E.rad);
										F && F.pen >= A && (D = B, A = F.pen)
									}
								}
							}
							D && !t.netData.downed && (C = P.Object, z = D, I = !0);
							var R = o.getClosestLoot();
							if (R && !t.netData.downed) {
								var j = g.items[R.name],
									N = t.hasWeaponInSlot(g.WeaponSlot.Primary),
									q = t.hasWeaponInSlot(g.WeaponSlot.Secondary),
									G = N && q,
									U = "gun" != j.type || !G || "gun" == t.equippedWeaponType();
								(U || k.layout == k.Layout.Sm) && (C = P.Loot, z = R), I = U && (!r.touch || "gun" == j.type || "skin" == j.type)
							}
							if (t.netData.actionType == f.None && !t.netData.downed)
								for (var V = i.getPlayerInfo(t.__id).teamId, H = i.playerPool.getPool(), W = 0; W < H.length; W++) {
									var K = H[W],
										X = i.getPlayerInfo(K.__id).teamId;
									if (!K.sentinel && K.__id != t.__id && V == X && (K.netData.downed && !K.netData.dead && K.netData.actionType != f.Revive)) {
										var Z = v.length(v.sub(K.netData.pos, t.netData.pos));
										Z < g.player.reviveMaxRange && x.sameLayer(K.layer, t.layer) && (C = P.Revive, z = t, I = !0)
									}
								}
							t.netData.actionType == f.Revive && t.netData.downed && (C = P.None, z = null, I = !1), (t.netData.actionType == f.UseItem || t.netData.actionType == f.Revive && !t.netData.downed) && (C = P.Cancel, z = null, I = !0)
						}
						r.interaction.type = C, r.interaction.text = this.getInteractionText(C, z), r.interaction.key = this.getInteractionKey(C), r.interaction.usable = I && !a;
						for (var Y = 0; Y < t.localData.weapons.length; Y++) {
							var J = t.localData.weapons[Y],
								Q = r.weapons[Y];
							Q.name = J.name, Q.ammo = J.ammo, "" != J.name && "throwable" == g.items[J.name].type && (Q.ammo = t.localData.inventory[J.name]);
							var $ = Q.equipped;
							Q.equipped = Y == t.localData.curWeapIdx, Q.selectable = "" != J.name && !a;
							var ee = Q.equipped ? 1 : .6,
								te = ee - Q.opacity,
								ae = y.min(te, y.sign(te) * e / .15);
							Q.opacity = y.clamp(Q.opacity + ae, 0, 1), k.mobile && (Q.opacity = ee), Q.ticker += e, Q.equipped && $ || (Q.ticker = 0), this.frameCount < 2 && (Q.ticker = 1);
							var ie = y.min(Q.ticker / .09, Math.PI),
								oe = Math.sin(ie);
							Q.width = oe < .001 ? 0 : oe, k.mobile && (Q.width = 0)
						}
						var ne = r.weapons[t.localData.curWeapIdx],
							re = g.items[ne.name],
							se = ne.ammo,
							le = "throwable" == re.type ? 0 : t.localData.inventory[re.ammo];
						r.ammo.current = se, r.ammo.remaining = le, r.ammo.displayCurrent = "melee" != re.type, r.ammo.displayRemaining = le > 0;
						for (var ce = 0; ce < r.scopes.length; ce++) {
							var me = r.scopes[ce];
							me.visible = t.localData.inventory[me.type] > 0, me.equipped = me.visible && t.localData.curScope == me.type, me.selectable = me.visible && !a
						}
						for (var de = t.getBagLevel(), pe = 0; pe < r.loot.length; pe++) {
							var ue = r.loot[pe],
								he = ue.count;
							ue.count = t.localData.inventory[ue.type] || 0, ue.maximum = g.bagSizes[ue.type][de], ue.selectable = ue.count > 0 && !a, ue.count > he && (ue.ticker = 0), this.frameCount < 2 && (ue.ticker = 1), ue.ticker += e;
							var ge = y.min(ue.ticker / .05, Math.PI),
								fe = Math.sin(ge);
							ue.width = fe < .001 ? 0 : fe, k.mobile && (ue.width = 0)
						}
						for (var ye = 0; ye < r.gear.length; ye++) {
							var be = r.gear[ye],
								xe = "";
							"chest" == be.type ? xe = t.netData.chest : "helmet" == be.type ? xe = t.netData.helmet : "backpack" == be.type && "backpack00" == (xe = t.netData.backpack) && (xe = "");
							var ve = be.item;
							be.item = xe, be.selectable = "" != xe && !a, ve != be.item && (be.ticker = 0), this.frameCount < 2 && (be.ticker = 1), be.ticker += e;
							var ke = y.min(be.ticker / .05, Math.PI),
								_e = Math.sin(ke);
							be.width = _e < .001 ? 0 : _e, k.mobile && (be.width = 0)
						}
						var we = c(this.oldState, this.newState, 0 == this.frameCount++);
						this.render(we, this.newState), l(this.newState, this.oldState)
					}
				}, {
					key: "render",
					value: function(e, t) {
						var a = this.dom;
						if (e.mobile) {
							var i = _.detectiOS();
							a.menu.fullScreen.style.display = i ? "none" : "block"
						}
						e.touch && (a.interaction.key.style.backgroundImage = t.touch ? "url('img/gui/tap.svg')" : "none", t.touch && (a.interaction.key.innerHTML = ""), a.menu.touchStyles.style.display = t.touch ? "flex" : "none", a.ammo.reloadButton.style.display = t.touch ? "block" : "none", a.emoteButton.style.display = t.touch ? "block" : "none", a.debugButton && (a.debugButton.style.display = t.touch ? "block" : "none")), e.pickupMessage.message && (a.pickupMessage.innerHTML = t.pickupMessage.message), e.pickupMessage.opacity && (a.pickupMessage.style.opacity = t.pickupMessage.opacity);
						for (var o = 0; o < e.killFeed.length; o++) {
							var n = e.killFeed[o],
								r = a.killFeed.lines[o],
								s = t.killFeed[o];
							if (n.text && (r.text.innerHTML = s.text), n.offset) {
								var l = k.layout != k.Layout.Sm || k.tablet ? 35 : 15;
								r.line.style.top = Math.floor(s.offset * l) + "px"
							}
							n.color && (r.text.style.color = s.color), n.opacity && (r.line.style.opacity = s.opacity)
						}
						if (e.health || e.downed) {
							for (var c = [{
									health: 100,
									color: [179, 179, 179]
								}, {
									health: 100,
									color: [255, 255, 255]
								}, {
									health: 75,
									color: [255, 255, 255]
								}, {
									health: 75,
									color: [255, 158, 158]
								}, {
									health: 25,
									color: [255, 82, 82]
								}, {
									health: 25,
									color: [255, 0, 0]
								}, {
									health: 0,
									color: [255, 0, 0]
								}], m = 0, d = Math.ceil(t.health); c[m].health > d && m < c.length - 1;) m++;
							var p = c[y.max(m - 1, 0)],
								u = c[m],
								h = y.delerp(t.health, p.health, u.health),
								f = [Math.floor(y.lerp(h, p.color[0], u.color[0])), Math.floor(y.lerp(h, p.color[1], u.color[1])), Math.floor(y.lerp(h, p.color[2], u.color[2]))];
							t.downed && (f = [255, 0, 0]), a.health.inner.style.backgroundColor = "rgba(" + f[0] + ", " + f[1] + ", " + f[2] + ", 1.0)", a.health.inner.style.width = t.health + "%", a.health.depleted.style.width = t.health + "%", a.health.depleted.style.display = t.health > 0 ? "block" : "none", t.health > 25 ? a.health.inner.classList.remove("ui-bar-danger") : a.health.inner.classList.add("ui-bar-danger")
						}
						if (e.boost) {
							for (var b = g.player.boostBreakpoints, x = 0, v = 0; v < b.length; v++) x += b[v];
							for (var w = t.boost / 100, S = 0; S < a.boost.bars.length; S++) {
								var M = b[S] / x,
									T = y.clamp(w / M, 0, 1);
								w = y.max(w - M, 0), a.boost.bars[S].style.width = 100 * T + "%"
							}
							a.boost.div.style.opacity = 0 == t.boost ? 0 : 1
						}
						e.interaction.type && (a.interaction.div.style.display = t.interaction.type == P.None ? "none" : "flex"), e.interaction.text && (a.interaction.text.innerHTML = t.interaction.text), e.interaction.key && (a.interaction.key.innerHTML = t.touch ? "" : t.interaction.key), e.interaction.usable && (a.interaction.key.style.display = t.interaction.usable ? "block" : "none");
						for (var C = 0; C < e.weapons.length; C++) {
							var z = e.weapons[C],
								I = a.weapons[C],
								D = t.weapons[C];
							if (z.name) {
								var A = "" != D.name,
									O = "",
									L = "",
									B = !1;
								if (A) {
									var E = g.items[D.name];
									O = this.localization.translate("game-hud-" + D.name) || this.localization.translate("game-" + D.name), L = E.lootImg.sprite, B = E.isDual && k.layout == k.Layout.Sm
								}
								I.name.innerHTML = O, I.image.src = L, I.image.style.display = A ? "inline" : "none", I.image.style.transform = B ? "rotate(0deg)" : ""
							}
							if (z.equipped && (I.div.style.backgroundColor = D.equipped ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"), z.selectable && (I.div.style.pointerEvents = "" != D.name && D.selectable ? "auto" : "none"), z.width) {
								var F = y.lerp(D.width, 83.33, 100);
								I.div.style.width = F + "%"
							}
							z.opacity && (I.div.style.opacity = D.opacity), z.ammo && I.ammo && (I.ammo.innerHTML = D.ammo, I.ammo.style.display = D.ammo > 0 ? "block" : "none")
						}
						if (e.ammo.current) {
							var R = t.ammo.current;
							a.ammo.current.innerHTML = R, a.ammo.current.style.color = R > 0 ? "white" : "red"
						}
						if (e.ammo.remaining) {
							var j = t.ammo.remaining;
							a.ammo.remaining.innerHTML = j, a.ammo.remaining.style.color = j > 0 ? "white" : "red"
						}
						e.ammo.displayCurrent && (a.ammo.current.style.opacity = t.ammo.displayCurrent ? 1 : 0), e.ammo.displayRemaining && (a.ammo.remaining.style.opacity = t.ammo.displayRemaining ? 1 : 0, a.ammo.reloadButton.style.opacity = t.ammo.displayRemaining ? 1 : 0);
						for (var N = 0; N < e.scopes.length; N++) {
							var q = e.scopes[N],
								G = a.scopes[N],
								U = t.scopes[N];
							q.visible && (G.div.style.display = U.visible ? "inline-block" : "none"), q.equipped && (U.equipped ? (G.div.classList.add("ui-zoom-active"), G.div.classList.remove("ui-zoom-inactive")) : (G.div.classList.remove("ui-zoom-active"), G.div.classList.add("ui-zoom-inactive"))), q.selectable && (G.div.style.pointerEvents = U.selectable ? "auto" : "none")
						}
						for (var V = 0; V < e.loot.length; V++) {
							var H = e.loot[V],
								W = a.loot[V],
								K = t.loot[V];
							if (H && W && K) {
								if ((H.count || H.maximum) && (W.count.innerHTML = K.count, W.div.style.opacity = K.count > 0 ? 1 : .25, W.div.style.color = K.count == K.maximum ? "#ff9900" : "#ffffff"), H.width) {
									var X = 1 + .33 * K.width,
										Z = "scale(" + X + ", " + X + ")";
									W.image.style.transform = Z, W.overlay && (W.overlay.style.transform = Z)
								}
								H.selectable && (W.div.style.pointerEvents = K.selectable ? "auto" : "none")
							}
						}
						for (var Y = 0; Y < e.gear.length; Y++) {
							var J = e.gear[Y],
								Q = a.gear[Y],
								$ = t.gear[Y];
							if (J.item) {
								var ee = "" != $.item ? g.items[$.item] : null,
									te = ee ? ee.level : 0;
								Q.div.style.display = ee ? "block" : "none", Q.level.innerHTML = this.localization.translate("game-level-" + te), Q.level.style.color = 3 == te ? "#ff9900" : "#ffffff", Q.image.src = ee ? ee.lootImg.sprite : ""
							}
							if (J.selectable && (Q.div.style.pointerEvents = $.selectable ? "auto" : "none"), J.width) {
								var ae = 1 + .33 * $.width;
								Q.image.style.transform = "scale(" + ae + ", " + ae + ")"
							}
						}
					}
				}, {
					key: "displayPickupMessage",
					value: function(e) {
						var t = this.newState.pickupMessage;
						t.message = this.getPickupMessageText(e), t.ticker = 0, t.duration = 3
					}
				}, {
					key: "addKillFeed",
					value: function(e, t) {
						var a = this.newState.killFeed,
							i = a[a.length - 1];
						i.text = e, i.color = t, i.ticker = 0, a.sort(function(e, t) {
							return e.ticker - t.ticker
						})
					}
				}, {
					key: "getKillFeedText",
					value: function(e, t, a, i, o) {
						switch (i) {
							case w.Player:
								return t + " " + this.localization.translate(o ? "game-knocked-out" : "game-killed") + " " + e + " " + this.localization.translate("game-with") + " " + a;
							case w.Bleeding:
								var n = this.localization.translate(t ? "game-finally-killed" : "game-finally-bled-out");
								return t ? t + " " + n + " " + e : e + " " + n;
							case w.Gas:
								var r = void 0;
								return o ? (t = this.localization.translate("game-the-red-zone"), r = this.localization.translate("game-knocked-out")) : r = this.localization.translate(t ? "game-finally-killed" : "game-died-outside"), t ? t + " " + r + " " + e : e + " " + r;
							default:
								return ""
						}
					}
				}, {
					key: "getKillFeedColor",
					value: function(e, t, a) {
						return e == t ? "#d1777c" : e == a ? "#00bfff" : "#efeeee"
					}
				}, {
					key: "getPickupMessageText",
					value: function(e) {
						var t, a = (t = {}, i(t, S.Full, "game-not-enough-space"), i(t, S.AlreadyOwned, "game-item-already-owned"), i(t, S.AlreadyEquipped, "game-item-already-equipped"), i(t, S.BetterItemEquipped, "game-better-item-equipped"), t),
							o = a[e] || a[S.Full];
						return this.localization.translate(o)
					}
				}, {
					key: "getInteractionText",
					value: function(e, t) {
						switch (e) {
							case P.None:
								return "";
							case P.Cancel:
								return this.localization.translate("game-cancel");
							case P.Revive:
								return this.localization.translate("game-revive-teammate");
							case P.Object:
								var a = t.getInteraction();
								return this.localization.translate(a.action) + " " + this.localization.translate(a.object);
							case P.Loot:
								var i = this.localization.translate("game-" + t.name) || t.name;
								return t.count > 1 && (i += " (" + t.count + ")"), i;
							default:
								return ""
						}
					}
				}, {
					key: "getInteractionKey",
					value: function(e) {
						return e == P.Cancel ? "X" : "F"
					}
				}]), e
			}();
		e.exports = {
			Ui2Manager: z
		}
	},
	"0od3": function(e, t, a) {
		"use strict";
		var i = a("DlZn"),
			o = a("/2+T"),
			n = {
				clamp: function(e, t, a) {
					return e < a ? e > t ? e : t : a
				},
				min: function(e, t) {
					return e < t ? e : t
				},
				max: function(e, t) {
					return e > t ? e : t
				},
				lerp: function(e, t, a) {
					return t * (1 - e) + a * e
				},
				delerp: function(e, t, a) {
					return n.clamp((e - t) / (a - t), 0, 1)
				},
				v2lerp: function(e, t, a) {
					return o.create(n.lerp(e, t.x, a.x), n.lerp(e, t.y, a.y))
				},
				smoothstep: function(e, t, a) {
					var i = n.clamp((e - t) / (a - t), 0, 1);
					return i * i * (3 - 2 * i)
				},
				easeOutElastic: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3;
					return Math.pow(2, -10 * e) * Math.sin((e - t / 4) * (2 * Math.PI) / t) + 1
				},
				remap: function(e, t, a, i, o) {
					var r = n.clamp((e - t) / (a - t), 0, 1);
					return n.lerp(r, i, o)
				},
				eqAbs: function(e, t, a) {
					var i = a || 1e-6;
					return Math.abs(e - t) < i
				},
				eqRel: function(e, t, a) {
					var i = void 0 !== a ? a : 1e-6;
					return Math.abs(e - t) <= i * Math.max(Math.max(1, Math.abs(e)), Math.abs(t))
				},
				deg2rad: function(e) {
					return e * Math.PI / 180
				},
				rad2deg: function(e) {
					return 180 * e / Math.PI
				},
				fract: function(e) {
					return e - Math.floor(e)
				},
				sign: function(e) {
					return e < 0 ? -1 : 1
				},
				mod: function(e, t) {
					return (e % t + t) % t
				},
				fmod: function(e, t) {
					return e - Math.floor(e / t) * t
				},
				angleDiff: function(e, t) {
					var a = n.fmod(t - e + Math.PI, 2 * Math.PI) - Math.PI;
					return a < -Math.PI ? a + 2 * Math.PI : a
				},
				quantize: function(e, t, a, o) {
					i(e >= t && e <= a);
					var r = (1 << o) - 1,
						s = n.clamp(e, t, a),
						l = (s - t) / (a - t);
					return t + parseInt(l * r + .5) / r * (a - t)
				},
				v2Quantize: function(e, t, a, i, r, s) {
					return o.create(n.quantize(e.x, t, i, s), n.quantize(e.y, a, r, s))
				},
				inside: function(e, t) {
					for (var a = e.x, i = e.y, o = !1, n = 0, r = t.length - 1; n < t.length; r = n++) {
						var s = t[n].x,
							l = t[n].y,
							c = t[r].x,
							m = t[r].y;
						l > i != m > i && a < (c - s) * (i - l) / (m - l) + s && (o = !o)
					}
					return o
				},
				rayLineIntersect: function(e, t, a, i) {
					var n = o.sub(i, a),
						r = o.create(n.y, -n.x),
						s = o.dot(t, r);
					if (!(Math.abs(s) <= 1e-6)) {
						var l = o.sub(a, e),
							c = o.dot(r, l) / s,
							m = o.dot(o.create(t.y, -t.x), l) / s;
						return c >= 0 && m >= 0 && m <= 1 ? c : void 0
					}
				},
				rayPolygonIntersect: function(e, t, a) {
					for (var i = Number.MAX_VALUE, o = !1, n = 0, r = a.length - 1; n < a.length; r = n++) {
						var s = this.rayLineIntersect(e, t, a[r], a[n]);
						void 0 !== s && s < i && (o = !0, i = s)
					}
					return o ? i : void 0
				},
				sqr: function(e) {
					return e * e
				},
				dist2: function(e, t) {
					return this.sqr(e.x - t.x) + this.sqr(e.y - t.y)
				},
				distToSegmentSquared: function(e, t, a) {
					var i = this.dist2(t, a);
					if (0 == i) return this.dist2(e, t);
					var o = ((e.x - t.x) * (a.x - t.x) + (e.y - t.y) * (a.y - t.y)) / i;
					return o = Math.max(0, Math.min(1, o)), this.dist2(e, {
						x: t.x + o * (a.x - t.x),
						y: t.y + o * (a.y - t.y)
					})
				},
				distToSegment: function(e, t, a) {
					return Math.sqrt(this.distToSegmentSquared(e, t, a))
				},
				distToPoly: function(e, t) {
					for (var a = Number.MAX_VALUE, i = 0, o = t.length - 1; i < t.length; o = i++) {
						var n = this.distToSegment(e, t[i], t[o]);
						n < a && (a = n)
					}
					return a
				},
				isAngleBetween: function(e, t, a) {
					return t <= a ? a - t <= 180 ? t <= e && e <= a : a <= e || e <= t : t - a <= 180 ? a <= e && e <= t : t <= e || e <= a
				}
			};
		e.exports = n
	},
	"1JzZ": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t, a) {
			e.moveTo(t.x, t.y), e.lineTo(a.x, a.y)
		}

		function n(e, t) {
			var a = t[0];
			e.moveTo(a.x, a.y);
			for (var i = 1; i < t.length; ++i) a = t[i], e.lineTo(a.x, a.y);
			e.closePath()
		}
		var r = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			s = a("gKxX"),
			l = (a("8iex"), a("9xSA")),
			c = a("Bk7F"),
			m = a("YUyC"),
			d = (a("Tf6H"), a("/2+T")),
			p = a("dT1u"),
			u = (a("EZ6M"), a("K7EQ")),
			h = a("zinx"),
			g = a("Jr6A"),
			f = (a("yp2f"), a("0od3")),
			y = a("+0OL"),
			b = a("Mzdc"),
			x = (a("r4ug"), a("DI/9")),
			v = a("zgif"),
			k = function() {
				function e() {
					i(this, e)
				}
				return r(e, [{
					key: "init",
					value: function() {}
				}, {
					key: "free",
					value: function() {}
				}, {
					key: "updateData",
					value: function(e, t) {
						this.type = e.type, this.pos = d.copy(e.pos), this.layer = e.layer
					}
				}]), e
			}(),
			_ = function() {
				function e() {
					i(this, e), this.display = {
						background: new s.Graphics,
						water: new s.Graphics
					}, this.stairMask = new s.Graphics, this.stairMaskDirty = !0, this.mapData = {
						places: [],
						objects: []
					}, this.dataLoaded = !1, this.mapTexture = null, this.obstaclePool = new p.Pool(x), this.lootSpawnerPool = new p.Pool(k), this.buildingPool = new p.Pool(b), this.structurePool = new p.Pool(v), this.deadObstacleIds = [], this.deadCeilingIds = [], this.terrain = null, this.ripples = []
				}
				return r(e, [{
					key: "free",
					value: function() {}
				}, {
					key: "resize",
					value: function(e) {
						this.renderMap(e)
					}
				}, {
					key: "setData",
					value: function(e, t, a, i, o, n) {
						this.width = e, this.height = t, this.terrain = m.generateTerrain(e, t, a), this.mapData = {
							places: i,
							objects: o
						}, this.dataLoaded = !0;
						var r = this.display,
							s = r.background,
							l = r.water;
						s.clear(), l.clear(), this.renderTerrain(s, l, 2 / n.ppu)
					}
				}, {
					key: "getMapTexture",
					value: function() {
						return this.mapTexture
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o, n) {
						for (var r = this.obstaclePool.getPool(), s = 0; s < r.length; s++) {
							var l = r[s];
							l.active && (l.update(e, this, a, i, t, o), l.render(n))
						}
						for (var c = this.buildingPool.getPool(), m = 0; m < c.length; m++) {
							var d = c[m];
							d.active && (d.update(e, this, a, i, t, o, n), d.render(n))
						}
						for (var p = this.structurePool.getPool(), u = 0; u < p.length; u++) {
							var h = p[u];
							h.active && h.update(n)
						}
						for (var g = 0; g < this.ripples.length; g++) {
							var f = this.ripples[g];
							if (!(f.life <= 0))
								if (f.delay -= e, f.delay <= 0 && (f.life -= e, f.scale += .5 * e, f.alpha -= e), f.life < 0) f.sprite.visible = !1;
								else {
									var y = f.scale / n.ppu;
									f.sprite.position.set(f.pos.x, f.pos.y), f.sprite.scale.set(y, y), f.sprite.alpha = f.alpha, f.sprite.visible = f.delay <= 0
								}
						}
					}
				}, {
					key: "renderTerrain",
					value: function(e, t, a) {
						var i = this.width,
							r = this.height,
							s = this.terrain,
							l = {
								x: 0,
								y: 0
							},
							c = {
								x: i,
								y: 0
							},
							m = {
								x: 0,
								y: r
							},
							d = {
								x: i,
								y: r
							};
						t.beginFill(u.water), t.moveTo(m.x, m.y), t.lineTo(d.x, d.y), t.lineTo(c.x, c.y), t.lineTo(l.x, l.y), n(t, s.shore), t.addHole(), t.closePath(), e.beginFill(u.beach), n(e, s.shore), n(e, s.grass), e.addHole(), e.endFill(), e.beginFill(u.grass), n(e, s.grass), e.endFill(), e.lineStyle(a, 0, .15);
						for (var p = 0; p <= i; p += y.map.gridSize) {
							o(e, {
								x: p,
								y: 0
							}, {
								x: p,
								y: r
							})
						}
						for (var h = 0; h <= r; h += y.map.gridSize) {
							o(e, {
								x: 0,
								y: h
							}, {
								x: i,
								y: h
							})
						}
					}
				}, {
					key: "render",
					value: function(e) {
						var t = e.pointToScreen(d.create(0, 0)),
							a = e.pointToScreen(d.create(1, 1)),
							i = d.sub(a, t);
						this.display.background.position.set(t.x, t.y), this.display.background.scale.set(i.x, i.y), this.display.water.position.set(t.x, t.y), this.display.water.scale.set(i.x, i.y)
					}
				}, {
					key: "getMinimapRender",
					value: function(e) {
						var t = c.Defs[e.type],
							a = "building" == t.type ? 1e3 * ((t.zIdx || 0) + 1) : t.img.zIdx || 0,
							i = [];
						if (void 0 !== t.map.shapes) i = t.map.shapes;
						else {
							var o = "obstacle" == t.type ? t.collision : t.ceiling.scopeIn[0];
							i.push({
								collider: l.copy(o),
								scale: t.map.scale || 1,
								color: t.map.color
							})
						}
						return {
							obj: e,
							zIdx: a,
							shapes: i
						}
					}
				}, {
					key: "renderMap",
					value: function(e) {
						if (this.dataLoaded) {
							var t = new s.Container,
								a = new s.Container,
								i = this.mapData.places,
								n = this.mapData.objects,
								r = (this.display, this.width),
								m = this.height,
								p = (this.terrain, g.getScreenDimensions().height);
							h.pixelRatio > 1 && (p *= 2);
							var u = m / p,
								f = new s.Graphics;
							this.renderTerrain(f, f, u);
							var y = {
									x: 0,
									y: 0
								},
								b = {
									x: r,
									y: 0
								},
								x = {
									x: 0,
									y: m
								},
								v = {
									x: r,
									y: m
								};
							f.lineStyle(2 * u, 0, 1), o(f, y, x), o(f, x, v), o(f, v, b), o(f, b, y), f.position.y = m, f.scale.y = -1, t.addChild(f);
							for (var k = [], _ = 0; _ < n.length; _++) {
								var w = n[_];
								k.push(this.getMinimapRender(w))
							}
							k.sort(function(e, t) {
								return e.zIdx - t.zIdx
							});
							for (var S = new s.Graphics, M = 0; M < k.length; M++)
								for (var T = k[M], P = T.obj, C = 0; C < T.shapes.length; C++) {
									var z = T.shapes[C],
										I = l.transform(z.collider, P.pos, c.oriToRad(P.ori), P.scale),
										D = void 0 !== z.scale ? z.scale : 1;
									switch (S.beginFill(z.color, 1), I.type) {
										case l.Type.Circle:
											S.drawCircle(I.pos.x, m - I.pos.y, I.rad * D);
											break;
										case l.Type.Aabb:
											var A = d.mul(d.sub(I.max, I.min), .5),
												O = d.add(I.min, A);
											A = d.mul(A, D), S.drawRect(O.x - A.x, m - O.y - A.y, 2 * A.x, 2 * A.y)
									}
									S.endFill()
								}
							t.addChild(S);
							for (var L = new s.Container, B = 0; B < i.length; B++) {
								var E = i[B],
									F = new s.TextStyle({
										fontFamily: "Arial",
										fontSize: h.pixelRatio > 1 ? 20 : 22,
										fontWeight: "bold",
										fill: ["#ffffff"],
										stroke: "#000000",
										strokeThickness: 1,
										dropShadow: !0,
										dropShadowColor: "#000000",
										dropShadowBlur: 1,
										dropShadowAngle: Math.PI / 3,
										dropShadowDistance: 1,
										wordWrap: !1,
										align: "center"
									}),
									R = new s.Text(E.name, F);
								R.anchor = new s.Point(.5, .5), R.x = E.pos.x * this.height / u, R.y = E.pos.y * this.height / u, R.alpha = .75, L.addChild(R)
							}
							a.addChild(L);
							var j = new s.BaseRenderTexture(p, p, s.SCALE_MODES.LINEAR, 2),
								N = new s.RenderTexture(j);
							t.scale = new s.Point(p / m, p / m), e.render(t, N, !0), e.render(a, N, !1), this.mapTexture = N, t.destroy({
								children: !0
							}), a.destroy({
								children: !0
							})
						}
					}
				}, {
					key: "getGroundSurface",
					value: function(e, t) {
						var a = this.buildingPool,
							i = this.terrain,
							o = void 0;
						if ("water" !== (o = f.inside(e, i.shore) ? f.inside(e, i.grass) ? "grass" : "sand" : "water"))
							for (var n = a.getPool(), r = 0, s = 0; s < n.length; s++) {
								var c = n[s];
								if (!(c.zIdx < r || 1 == c.layer && 0 == t))
									for (var m = 0; m < c.surfaces.length; m++)
										for (var d = c.surfaces[m], p = 0; p < d.colliders.length; p++) {
											var u = l.intersectCircle(d.colliders[p], e, 1e-4);
											if (u) {
												r = c.zIdx, o = d.surface;
												break
											}
										}
							}
						return o
					}
				}, {
					key: "distanceToShore",
					value: function(e) {
						return f.distToPoly(e, this.terrain.shore)
					}
				}, {
					key: "insideStructureStairs",
					value: function(e) {
						for (var t = this.structurePool.getPool(), a = 0; a < t.length; a++) {
							var i = t[a];
							if (i.active && i.insideStairs(e)) return !0
						}
						return !1
					}
				}, {
					key: "insideStructureMask",
					value: function(e) {
						for (var t = this.structurePool.getPool(), a = 0; a < t.length; a++) {
							var i = t[a];
							if (i.active && i.insideMask(e)) return !0
						}
						return !1
					}
				}, {
					key: "addRipple",
					value: function(e, t) {
						for (var a = this.ripples, i = this.display, o = null, n = 0; n < a.length; n++)
							if (a[n].life <= 0) {
								o = a[n];
								break
							}
						if (!o) {
							o = {};
							var r = s.Sprite.fromImage("img/player/ripple-01.svg");
							r.visible = !1, r.anchor = new s.Point(.5, .5), r.tint = 11792639, i.water.addChild(r), o.sprite = r, a.push(o)
						}
						o.pos = e, o.life = 3, o.delay = t, o.scale = .15, o.alpha = 1
					}
				}]), e
			}();
		e.exports = _
	},
	"4glI": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("juYr"),
			r = a("gKxX"),
			s = (a("0od3"), a("Tf6H"), a("/2+T")),
			l = a("Jr6A"),
			c = a("zinx"),
			m = function() {
				function e(t, a) {
					var o = this;
					i(this, e), this.input = t, this.config = a, this.container = new r.Container, this.padScaleBase = 1, this.padScaleDown = .5, this.padScalePos = .25, this.moveDetected = !1, this.shotDetected = !1, this.shotDetectedOld = !1, this.display = !0, this.orientation = "landscape", this.moveStyle = "locked", this.aimStyle = "locked";
					var n = function(e) {
							var t = r.Sprite.fromImage("img/gui/pad.svg");
							return t.anchor = new r.Point(.5, .5), t.scale = new r.Point(1, 1), t.alpha = .5, t.visible = !1, e.addChild(t), t
						},
						l = function() {
							return {
								touched: !1,
								centerPos: s.create(0, 0),
								touchPos: s.create(0, 0),
								centerSprite: n(o.container),
								touchSprite: n(o.container)
							}
						};
					this.touchPads = [l(), l()], this.playerMovement = {
						left: !1,
						right: !1,
						up: !1,
						down: !1,
						moveLen: 0
					}, this.aimMovement = {
						toAimDir: s.create(0, 0),
						toAimLen: 0
					}, this.leftLockedPadCenter = s.create(0, 0), this.rightLockedPadCenter = s.create(0, 0), this.padPosRange = 0, this.mobileOffsetLandscape = 25, this.mobileOffsetPortrait = 100, this.lockedPadOffsetLandscape = s.create(96, 96), this.lockedPadOffsetPortrait = s.create(96, 160), this.lockedPadOffsetYLandscapeSafari = 120, this.lockedPadOffsetYPortraitSafari = 240, this.setMoveStyle(a.get("touchMoveStyle") || "locked"), this.setAimStyle(a.get("touchAimStyle") || "locked"), this.init()
				}
				return o(e, [{
					key: "getTouchMovement",
					value: function(e) {
						switch (this.moveStyle) {
							case "locked":
								return this.getMovementLocked(e);
							case "anywhere":
								return this.getMovementAnywhere(e);
							default:
								return this.getMovementLocked(e)
						}
					}
				}, {
					key: "getAimMovement",
					value: function(e, t) {
						switch (this.aimStyle) {
							case "anywhere":
								return this.getAimAnywhere(e, t);
							case "locked":
								return this.getAimLocked(e, t);
							default:
								return this.getAimAnywhere(e, t)
						}
					}
				}, {
					key: "getMovementLocked",
					value: function(e) {
						var t = null,
							a = null,
							i = !1;
						this.moveDetected = !1;
						for (var o = 0; o < this.input.touches.length; o++) {
							var n = this.input.touches[o];
							if (!n.isDead && this.isLeftSideTouch(n.posDown.x, e)) {
								var r = s.sub(n.pos, this.leftLockedPadCenter),
									l = s.length(r);
								if (l > 2) {
									var c = Math.atan2(-r.y, r.x),
										m = 180 * c / Math.PI;
									m < 0 && (m += 360), this.playerMovement = {
										right: m < 67.5 || m > 292.5,
										up: m > 22.5 && m < 157.5,
										left: m > 112.5 && m < 247.5,
										down: m > 202.5 && m < 337.5,
										moveLen: (l - 2) / (this.padPosRange - 2)
									}, t = this.leftLockedPadCenter, a = this.getConstrainedPos(t, n.pos, l), i = !0, this.moveDetected = !0;
									break
								}
							}
						}
						var d = this.touchPads[0];
						return d.touched = i, d.centerPos.x = this.leftLockedPadCenter.x, d.centerPos.y = this.leftLockedPadCenter.y, d.touchPos.x = i ? a.x : 0, d.touchPos.y = i ? a.y : 0, this.playerMovement
					}
				}, {
					key: "getMovementAnywhere",
					value: function(e) {
						var t = null,
							a = null,
							i = !1;
						this.moveDetected = !1;
						for (var o = 0; o < this.input.touches.length; o++) {
							var n = this.input.touches[o];
							if (!n.isDead && this.isLeftSideTouch(n.posDown.x, e)) {
								var r = n.posDown,
									l = s.sub(n.pos, r),
									c = s.length(l);
								if (c > 2) {
									var m = Math.atan2(-l.y, l.x),
										d = 180 * m / Math.PI;
									d < 0 && (d += 360), this.playerMovement = {
										right: d < 67.5 || d > 292.5,
										up: d > 22.5 && d < 157.5,
										left: d > 112.5 && d < 247.5,
										down: d > 202.5 && d < 337.5,
										moveLen: (c - 2) / (this.padPosRange - 2)
									}
								} else this.playerMovement = {
									right: !1,
									up: !1,
									left: !1,
									down: !1
								};
								t = n.posDown, a = this.getConstrainedPos(t, n.pos, c), i = !0, this.moveDetected = !0;
								break
							}
						}
						var p = this.touchPads[0];
						return p.touched = i, p.centerPos.x = i ? t.x : 0, p.centerPos.y = i ? t.y : 0, p.touchPos.x = i ? a.x : 0, p.touchPos.y = i ? a.y : 0, this.playerMovement
					}
				}, {
					key: "getAimLocked",
					value: function(e, t) {
						for (var a = !1, i = null, o = null, n = 0; n < this.input.touches.length; n++) {
							var r = this.input.touches[n];
							if (!r.isDead && !this.isLeftSideTouch(r.posDown.x, t)) {
								var l = s.sub(r.pos, this.rightLockedPadCenter),
									c = s.length(l);
								if (c > 2) {
									var m = s.sub(r.pos, this.rightLockedPadCenter),
										d = s.length(m),
										p = d > 1e-5 ? s.div(m, d) : this.aimMovement.toAimDir;
									this.aimMovement = {
										toAimDir: s.create(p.x, -1 * p.y),
										toAimLen: d
									}
								} else this.aimMovement.toAimLen = 0;
								i = this.rightLockedPadCenter, o = this.getConstrainedPos(i, r.pos, c), a = !0;
								break
							}
						}
						this.shotDetectedOld = this.shotDetected, this.shotDetected = this.aimMovement.toAimLen > this.padPosRange && a, e && this.shotDetectedOld && a && (this.shotDetected = !0);
						var u = this.touchPads[1];
						return u.touched = a, u.centerPos.x = this.rightLockedPadCenter.x, u.centerPos.y = this.rightLockedPadCenter.y, u.touchPos.x = a ? o.x : 0, u.touchPos.y = a ? o.y : 0, this.aimMovement
					}
				}, {
					key: "getAimAnywhere",
					value: function(e, t) {
						for (var a = !1, i = null, o = null, n = 0; n < this.input.touches.length; n++) {
							var r = this.input.touches[n];
							if (!r.isDead && !this.isLeftSideTouch(r.posDown.x, t)) {
								var l = r.posDown,
									c = s.sub(r.pos, l),
									m = s.length(c);
								if (m > 2) {
									var d = s.sub(r.pos, r.posDown),
										p = s.length(d),
										u = p > 1e-5 ? s.div(d, p) : this.aimMovement.toAimDir;
									this.aimMovement = {
										toAimDir: s.create(u.x, -1 * u.y),
										toAimLen: p
									}
								} else this.aimMovement.toAimLen = 0;
								i = r.posDown, o = this.getConstrainedPos(i, r.pos, m), a = !0;
								break
							}
						}
						this.shotDetectedOld = this.shotDetected, this.shotDetected = this.aimMovement.toAimLen > this.padPosRange && a, e && this.shotDetectedOld && a && (this.shotDetected = !0);
						var h = this.touchPads[1];
						return h.touched = a, h.centerPos.x = a ? i.x : 0, h.centerPos.y = a ? i.y : 0, h.touchPos.x = a ? o.x : 0, h.touchPos.y = a ? o.y : 0, this.aimMovement
					}
				}, {
					key: "updateDisplay",
					value: function() {
						if (c.touch)
							for (var e = 0; e < this.touchPads.length; e++) {
								var t = this.touchPads[e],
									a = 0 == e,
									i = 1 == e,
									o = a && "locked" == this.moveStyle || i && "locked" == this.aimStyle;
								t.centerSprite.position.x = t.centerPos.x, t.centerSprite.position.y = t.centerPos.y, t.centerSprite.scale.x = this.padScaleBase * this.padScaleDown, t.centerSprite.scale.y = this.padScaleBase * this.padScaleDown, t.centerSprite.visible = this.display && (o || t.touched), t.touchSprite.position.x = t.touchPos.x, t.touchSprite.position.y = t.touchPos.y, t.touchSprite.scale.x = this.padScaleBase * this.padScalePos, t.touchSprite.scale.y = this.padScaleBase * this.padScalePos, t.touchSprite.visible = this.display && t.touched
							}
					}
				}, {
					key: "isLeftSideTouch",
					value: function(e, t) {
						return e < .5 * t.screenWidth
					}
				}, {
					key: "getConstrainedPos",
					value: function(e, t, a) {
						if (a <= this.padPosRange) return t;
						var i = t.x - e.x,
							o = t.y - e.y,
							n = Math.atan2(o, i);
						return s.create(Math.cos(n) * this.padPosRange + e.x, Math.sin(n) * this.padPosRange + e.y)
					}
				}, {
					key: "toggleMoveStyle",
					value: function() {
						this.setMoveStyle("locked" == this.moveStyle ? "anywhere" : "locked")
					}
				}, {
					key: "setMoveStyle",
					value: function(e) {
						this.moveStyle = e, this.config.set("touchMoveStyle", e);
						var t = document.getElementById("btn-game-move-style");
						t && ("locked" == this.moveStyle ? (t.classList.remove("unlocked-on-icon"), t.classList.add("locked-on-icon")) : (t.classList.remove("locked-on-icon"), t.classList.add("unlocked-on-icon")))
					}
				}, {
					key: "toggleAimStyle",
					value: function() {
						this.setAimStyle("locked" == this.aimStyle ? "anywhere" : "locked")
					}
				}, {
					key: "setAimStyle",
					value: function(e) {
						this.aimStyle = e, this.config.set("touchAimStyle", e);
						var t = document.getElementById("btn-game-aim-style");
						"locked" == this.aimStyle ? (t.classList.remove("unlocked-on-icon"), t.classList.add("locked-on-icon")) : (t.classList.remove("locked-on-icon"), t.classList.add("unlocked-on-icon"))
					}
				}, {
					key: "init",
					value: function() {
						this.resize()
					}
				}, {
					key: "resize",
					value: function() {
						var e = l.getOrientation(),
							t = l.getScreenDimensions(),
							a = this.lockedPadOffsetLandscape,
							i = this.lockedPadOffsetPortrait;
						c.tablet && (a = s.mul(a, 1.25), i = s.mul(i, 1.25));
						var o = s.create(a.x, a.y),
							n = s.create(i.x, i.y),
							r = s.create(t.width - a.x, a.y),
							m = s.create(t.width - i.x, i.y);
						if (l.detectMobileSafari() && !window.navigator.standalone) {
							var d = this.lockedPadOffsetYLandscapeSafari,
								p = this.lockedPadOffsetYPortraitSafari;
							c.tablet && (d *= 1.4, p *= 1.4), o.y = d, n.y = p, r.y = d, m.y = p
						}
						this.padScaleBase = "landscape" == e ? 1 : .8, this.padPosRange = 56 * this.padScaleBase;
						var u = "landscape" == e ? o : n;
						this.leftLockedPadCenter = s.create(u.x, t.height - u.y);
						var h = "landscape" == e ? r : m;
						this.rightLockedPadCenter = s.create(h.x, t.height - h.y), this.setMobileStyling(e)
					}
				}, {
					key: "setMobileStyling",
					value: function(e) {
						var t = l.getScreenDimensions().width <= 850;
						if (c.mobile) {
							n("#btn-touch-styles").find(".btn-game-container").css("display", "inline-block"), n("#ui-emote-button").css("display", "block")
						}
						c.mobile || t ? (n("#ui-map-wrapper").addClass("ui-map-wrapper-mobile").removeClass("ui-map-wrapper-desktop"), n("#ui-settings-container-mobile").css("display", "block"), n("#ui-settings-container-desktop").css("display", "none"), n("#ui-right-center").addClass("ui-right-center-mobile").removeClass("ui-right-center-desktop")) : (n("#ui-map-wrapper").removeClass("ui-map-wrapper-mobile").addClass("ui-map-wrapper-desktop"), n("#ui-settings-container-mobile").css("display", "none"), n("#ui-settings-container-desktop").css("display", "block"), n("#ui-right-center").removeClass("ui-right-center-mobile").addClass("ui-right-center-desktop")), c.tablet && ("landscape" == e ? (n("#ui-leaderboard-wrapper").css("display", "none"), n("#ui-bottom-right").addClass("ui-bottom-right-tablet"), n("#ui-right-center").addClass("ui-right-center-tablet"), n("#ui-bottom-center-right").addClass("ui-bottom-center-right-tablet"), n("#ui-top-left").addClass("ui-top-left-tablet"), n("#ui-spectate-options-wrapper").addClass("ui-spectate-options-wrapper-tablet"), n("#ui-killfeed-wrapper").addClass("ui-killfeed-wrapper-tablet")) : (n("#ui-bottom-right").removeClass("ui-bottom-right-tablet"), n("#ui-right-center").removeClass("ui-right-center-tablet"), n("#ui-bottom-center-right").removeClass("ui-bottom-center-right-tablet"), n("#ui-top-left").removeClass("ui-top-left-tablet"), n("#ui-spectate-options-wrapper").removeClass("ui-spectate-options-wrapper-tablet"), n("#ui-killfeed-wrapper-wrapper").removeClass("ui-killfeed-wrapper-tablet")))
					}
				}, {
					key: "hideAll",
					value: function() {
						this.display = !1
					}
				}]), e
			}();
		e.exports = {
			Touch: m
		}
	},
	"5dFr": function(e, t, a) {
		"use strict";

		function i(e) {
			var t = 180 * Math.atan2(e.y, e.x) / Math.PI;
			return t < 0 && (t += 360), t
		}

		function o(e, t, a, o, n, l) {
			var u = this;
			this.game = e, this.audioManager = t, this.uiManager = a, this.gameElem = r("#ui-game"), this.disable = !1, this.activePlayer = null, this.playerBarn = o, this.camera = n, this.map = l, this.worldPos = h.create(0, 0), this.zIdxNext = 0, this.emoteSelector = {
				ping: x.None,
				emote: m.None
			}, this.emoteSoftTicker = 0, this.emoteHardTicker = 0, this.emoteCounter = 0, this.emoteWheelsGreyed = !1, this.teamEmotesGreyed = !1, this.wheelKeyTriggered = !1, this.pingKeyTriggered = !1, this.pingKeyDown = !1, this.pingMouseTriggered = !1, this.wheelDisplayed = !1, this.emoteKeyTriggered = !1, this.emoteKeyDown = !1, this.emoteMouseTriggered = !1, this.emoteScreenPos = h.create(0, 0), r(document).on("keydown", function(e) {
				67 != e.which || u.pingKeyDown || u.game.gameOver || (u.pingKeyDown = !0, u.pingKeyTriggered = !0)
			}), r(document).on("keyup", function(e) {
				67 == e.which && u.pingKeyDown && !u.game.gameOver && (u.pingKeyDown = !1, u.pingKeyTriggered = u.wheelDisplayed)
			}), r(document).on("mousedown", function(e) {
				("which" in e ? 3 == e.which : 2 == e.button) && !u.pingMouseTriggered && !u.emoteMouseTriggered && u.pingKeyDown && (e.stopPropagation(), e.preventDefault(), u.emoteScreenPos = h.create(e.clientX, e.clientY), u.pingMouseTriggered = !0)
			}), r(document).on("mouseup", function(e) {
				3 == e.which && u.pingKeyTriggered && u.pingMouseTriggered && u.triggerPing()
			}), this.triggerPing = function() {
				if (this.activePlayer) {
					var e = void 0;
					if (this.emoteSelector.ping == x.None || this.emoteWheelsGreyed) this.emoteSelector.emote == m.None || this.emoteSelector.emote == m.Empty || this.emoteWheelsGreyed || (e = this.activePlayer.pos, this.sendEmote({
						type: this.emoteSelector.emote,
						useLoadout: this.emoteSelector.useLoadout,
						emoteSlot: this.emoteSelector.emoteSlot,
						pos: e
					}), this.uiManager.displayMapLarge(!0));
					else {
						b[this.emoteSelector.ping].pingMap && (e = this.uiManager.getWorldPosFromMapPos(this.bigmapPingPos || this.emoteScreenPos, this.map, this.camera), e || (e = this.camera.screenToPoint(this.emoteScreenPos)), e.x = g.clamp(e.x, 0, this.uiManager.mapWidth), e.y = g.clamp(e.y, 0, this.uiManager.mapHeight), this.sendPing({
							type: this.emoteSelector.ping,
							pos: e
						}))
					}
					this.inputReset(), this.pingKeyTriggered = this.pingKeyDown
				}
			}, r(document).on("mousedown", function(e) {
				("which" in e ? 3 == e.which : 2 == e.button) && !u.pingMouseTriggered && (e.stopPropagation(), e.preventDefault(), u.emoteScreenPos = h.create(e.clientX, e.clientY), u.emoteMouseTriggered = !0)
			}), r(document).on("mouseup", function(e) {
				3 == e.which && u.emoteMouseTriggered && u.triggerEmote()
			}), this.triggerEmote = function() {
				if (this.activePlayer) {
					var e = void 0;
					this.emoteSelector.emote == m.None || this.emoteSelector.emote == m.Empty || this.emoteWheelsGreyed || (e = this.activePlayer.pos, this.sendEmote({
						type: this.emoteSelector.emote,
						useLoadout: this.emoteSelector.useLoadout,
						emoteSlot: this.emoteSelector.emoteSlot,
						pos: e
					})), this.inputReset()
				}
			}, this.emoteTouchedPos = null, this.bigmapPingPos = null, y.touch && (this.emoteElems = r(".ui-emote"), this.emoteElems.css("pointer-events", "auto"), this.bigmapCollision = r("#big-map-collision"), this.bigmapCollision.on("touchend", function(e) {
				e.stopPropagation(), u.bigmapPingPos = {
					x: e.originalEvent.changedTouches[0].pageX,
					y: e.originalEvent.changedTouches[0].pageY
				}, u.emoteScreenPos = h.create(u.camera.screenWidth / 2, u.camera.screenHeight / 2), u.pingMouseTriggered = !0
			}), this.emoteButtonElem = r("#ui-emote-button"), this.emoteButtonElem.css("pointer-events", "auto"), this.emoteButtonElem.on("touchstart", function(e) {
				e.stopPropagation(), u.emoteScreenPos = h.create(u.camera.screenWidth / 2, u.camera.screenHeight / 2), u.emoteMouseTriggered = !0
			}), this.emoteElems.on("touchstart", function(e) {
				e.stopPropagation(), u.emoteTouchedPos = {
					x: e.originalEvent.changedTouches[0].pageX,
					y: e.originalEvent.changedTouches[0].pageY
				}
			}), r(document).on("touchstart", function(e) {
				u.wheelDisplayed && (e.stopPropagation(), u.inputReset())
			})), r(window).on("blur", function(e) {
				u.inputReset()
			}), r(document).on("keydown", function(e) {
				9 == e.which && e.preventDefault()
			}), this.emoteWheels = r("#ui-emotes, #ui-team-pings"), this.teamEmotes = r(".ui-emote-bottom-left, .ui-emote-top-left"), this.emoteWheel = r("#ui-emotes"), this.emoteWheelData = {
				middle: {
					parent: r("#ui-emote-middle"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.None,
					emote: m.None,
					modular: !1
				},
				top: {
					parent: r("#ui-emote-top"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.None,
					emote: m.HappyFace,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Top
				},
				right: {
					parent: r("#ui-emote-right"),
					vA: h.create(1, 1),
					vC: h.create(1, -1),
					ping: x.None,
					emote: m.ThumbsUp,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Right
				},
				bottom: {
					parent: r("#ui-emote-bottom"),
					vA: h.create(1, -1),
					vC: h.create(-1, -1),
					ping: x.None,
					emote: m.Surviv,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Bottom
				},
				left: {
					parent: r("#ui-emote-left"),
					vA: h.create(-1, -1),
					vC: h.create(-1, 1),
					ping: x.None,
					emote: m.SadFace,
					modular: !1,
					useLoadout: !0,
					emoteSlot: c.Left
				}
			}, this.teamPingWheel = r("#ui-team-pings");
			var f = {
				middle: {
					parent: r("#ui-team-ping-middle"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.None,
					emote: m.None,
					modular: !1
				},
				top: {
					parent: r("#ui-team-ping-top"),
					vA: h.create(-1, 1),
					vC: h.create(1, 1),
					ping: x.Danger,
					emote: m.None,
					modular: !1
				},
				right: {
					parent: r("#ui-team-ping-right"),
					vA: h.create(1, 1),
					vC: h.create(1, -1),
					ping: x.Coming,
					emote: m.None,
					modular: !1
				},
				bottom: {
					parent: r("#ui-team-ping-bottom"),
					vA: h.create(1, -1),
					vC: h.create(-1, -1),
					ping: x.Help,
					emote: m.None,
					modular: !1
				},
				"bottom-left": {
					parent: r("#ui-team-ping-bottom-left"),
					vA: h.create(-1, -1),
					vC: h.create(-1, 0),
					ping: x.None,
					emote: m.Medical,
					modular: !1
				},
				"top-left": {
					parent: r("#ui-team-ping-top-left"),
					vA: h.create(-1, 0),
					vC: h.create(-1, 1),
					ping: x.None,
					emote: m.Ammo,
					modular: !0
				}
			};
			this.teamPingSelectors = [];
			for (var v in f)
				if (f.hasOwnProperty(v)) {
					var k = f[v],
						_ = k.ping != x.None ? b[k.ping] : d[k.emote],
						w = i(k.vA),
						S = i(k.vC);
					this.teamPingSelectors.push({
						parent: k.parent,
						angleA: w,
						angleC: S,
						highlight: k.parent.find(".ui-emote-hl"),
						highlightDisplayed: !1,
						texture: _.texture,
						ping: k.ping,
						emote: k.emote,
						modular: k.modular
					})
				}
			this.displayedSelectors = this.teamPingSelectors, this.baseScale = 1, this.container = new p.Container, this.container.scale = new p.Point(this.baseScale, this.baseScale), this.pingContainer = new p.Container, this.container.addChild(this.pingContainer), this.indContainer = new p.Container, this.teamIndicators = [];
			for (var M = 0; M < 4; M++) {
				var T = M,
					P = new p.Container,
					C = new p.Container,
					z = p.Sprite.fromImage("/img/gui/ping-border.svg");
				z.scale = new p.Point(.4, .4), z.anchor = new p.Point(.5, .5), z.tint = s.teamColors[M], z.alpha = 0, z.visible = !0, P.addChild(z);
				var I = p.Sprite.fromImage("/img/gui/ping-team-danger.svg");
				I.scale = new p.Point(.4, .4), I.anchor = new p.Point(.5, .5), I.tint = s.teamColors[M], I.alpha = 0, I.visible = !0, P.addChild(I);
				var D = p.Sprite.fromImage("/img/gui/ping-team-danger.svg");
				D.scale = new p.Point(.5, .5), D.anchor = new p.Point(.5, .5), D.tint = s.teamColors[M], D.alpha = 0, D.visible = !0, C.addChild(D);
				var A = p.Sprite.fromImage("/img/gui/ping-indicator.svg");
				A.scale = new p.Point(.5, .5), A.anchor = new p.Point(.5, 0), A.alpha = 0, A.visible = !0, C.addChild(A), this.pingContainer.addChild(P), this.indContainer.addChild(C), this.teamIndicators.push({
					ping: {
						elem: r("#ui-team-indicators").find(".ui-indicator-ping[data-id=" + T + "]"),
						borderElem: r("#ui-team-indicators").find(".ui-indicator-ping-border[data-id=" + T + "]"),
						pingContainer: P,
						indContainer: C,
						borderSprite: {
							sprite: z,
							baseScale: .4
						},
						pingSprite: {
							sprite: I,
							baseScale: .4
						},
						indSpriteOuter: {
							sprite: A,
							baseScale: .5
						},
						indSpriteInner: {
							sprite: D,
							baseScale: .5
						},
						displayed: !1,
						fadeIn: 0,
						life: 0,
						fadeOut: 0,
						pos: h.create(0, 0)
					}
				})
			}
			this.emoteLifeIn = .75, this.emoteLife = 1, this.emoteLifeOut = .1, this.pingFadeIn = .5, this.pingLife = 4.25, this.pingFadeOut = .1, this.wedgeOpacityReset = y.touch ? 1 : .75, this.teamEmoteOpacityReset = .2, this.emotes = [], this.newPings = [], this.newEmotes = []
		}
		var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var a = arguments[t];
					for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i])
				}
				return e
			},
			r = a("juYr"),
			s = a("+0OL"),
			l = a("v8aM"),
			c = l.EmoteSlot,
			m = l.EmoteType,
			d = l.EmoteData,
			p = a("gKxX"),
			u = a("8iex"),
			h = a("/2+T"),
			g = a("0od3"),
			f = a("Tf6H"),
			y = a("zinx"),
			b = (a("EZ6M"), a("moUH").kPings),
			x = a("moUH").Ping,
			v = (a("S40U"), a("xgte")),
			k = v.RenderType;
		o.prototype = {
			free: function() {
				r(document).off("keydown"), r(document).off("keyup"), r(document).off("mousedown"), r(document).off("mouseup"), r(window).off("blur"), y.touch && (r(document).off("touchstart"), this.emoteButtonElem.off("touchstart"), this.emoteElems.off("touchstart"), this.bigmapCollision.off("touchend")), this.init()
			},
			init: function() {
				this.emoteWheelsGreyed = !1, this.emoteWheels.css("opacity", 1), this.teamEmotesGreyed = !1, this.teamEmotes.css("opacity", 1), this.disable = !1, this.inputReset()
			},
			inputReset: function() {
				this.pingMouseTriggered = !1, this.pingKeyTriggered = !1, this.emoteMouseTriggered = !1, this.emoteKeyTriggered = !1, this.wheelDisplayed = !1, this.displayWheel(this.teamPingWheel, !1), this.displayWheel(this.emoteWheel, !1), this.emoteTouchedPos = null, this.bigmapPingPos = null;
				for (var e = 0; e < this.displayedSelectors.length; e++) {
					var t = this.displayedSelectors[e],
						a = d[t.emote];
					this.teamEmotesGreyed && a.teamOnly ? t.parent.css("opacity", this.teamEmoteOpacityReset) : t.parent.css("opacity", this.wedgeOpacityReset), t.highlight.css("display", "none"), t.highlightDisplayed = !1
				}
			},
			sendPing: function(e) {
				var t = {};
				t.type = e.type, t.pos = e.pos, this.newPings.push(t), this.incrementEmote()
			},
			addPing: function(e) {
				if (this.activePlayer) {
					var t = b[e.type];
					if (t) {
						this.teamId = this.playerBarn.getPlayerInfo(this.activePlayer.__id).teamId;
						for (var a = this.playerBarn.getTeamInfo(this.teamId), i = a.playerIds.length, o = 0; o < i; o++) {
							var n = a.playerIds[o];
							if (n == e.playerId) {
								var r = this.teamIndicators[o];
								this.playerBarn.getPlayerInfo(n), this.activePlayer.__id;
								this.uiManager.setPlayerPing(e.type, o, e.pos, t.mapLife);
								for (var s in r)
									if (r.hasOwnProperty(s) && "ping" == s) {
										var l = r[s];
										l.pos = e.pos, l.pingSprite.sprite.texture = p.Texture.fromImage(t.texture), l.indSpriteInner.sprite.texture = p.Texture.fromImage(t.texture), l.fadeIn = this.pingFadeIn, l.life = this.pingLife, l.fadeOut = this.pingFadeOut, this.audioManager.playSound(t.sound, {
											channel: "ui"
										})
									}
							}
						}
					}
				}
			},
			sendEmote: function(e) {
				var t = {};
				t.useLoadout = e.useLoadout, t.type = e.useLoadout ? e.emoteSlot : e.type, t.pos = e.pos, this.newEmotes.push(t), this.incrementEmote()
			},
			addEmote: function(e) {
				var t = d[e.type];
				if (t) {
					for (var a = null, i = 0; i < this.emotes.length; i++) this.emotes[i].alive || a ? this.emotes[i].alive && this.emotes[i].playerId == e.playerId && (this.emotes[i].alive = !1) : a = this.emotes[i];
					a || (a = {}, a.alive = !1, a.pos = h.create(0, 0), a.container = new p.Container, a.circleOuter = new p.Sprite.fromImage("img/gui/emote-circle-outer.svg"), a.circleOuter.anchor = new p.Point(.5, .5), a.baseScale = .55, a.circleOuter.scale = new p.Point(.8 * a.baseScale, .8 * a.baseScale), a.circleOuter.tint = 0, a.circleOuter.visible = !0, a.container.addChild(a.circleOuter), a.sprite = new p.Sprite, a.sprite.anchor = new p.Point(.5, .5), a.container.addChild(a.sprite), a.sprite.scale = new p.Point(a.baseScale, a.baseScale), a.posOffset = new p.Point(0, 4), a.container.scale = new p.Point(1, 1), a.container.visible = !1, this.emotes.push(a)), a.alive = !0, a.isNew = !0, a.type = e.type, a.playerId = e.playerId, a.pos = h.create(0, 0), a.lifeIn = this.emoteLifeIn, a.life = this.emoteLife, a.lifeOut = this.emoteLifeOut, a.zIdx = this.zIdxNext++, a.sprite.texture = p.Texture.fromImage(t.texture), a.container.visible = !1
				}
			},
			incrementEmote: function() {
				++this.emoteCounter >= s.player.emoteThreshold && (this.emoteHardTicker = this.emoteHardTicker > 0 ? this.emoteHardTicker : 1.5 * s.player.emoteHardCooldown)
			},
			update: function(e, t, a, o, n, r, l) {
				var c = this.playerBarn,
					p = this.camera;
				if (this.activePlayer = a, t == a.__id && !a.netData.dead || this.disable || (this.free(), this.disable = !0), !this.disable) {
					var b = a.localData.weapons[a.localData.curWeapIdx],
						v = s.items[b.name],
						_ = "";
					if (v && (_ = v.ammo ? v.ammo : _), this.wheelKeyTriggered = this.pingKeyTriggered || this.emoteMouseTriggered, this.emoteSoftTicker -= e, this.emoteCounter >= s.player.emoteThreshold && this.emoteHardTicker > 0 ? (this.emoteHardTicker -= e, this.emoteHardTicker < 0 && (this.emoteCounter = 0)) : this.emoteSoftTicker < 0 && this.emoteCounter > 0 && (this.emoteCounter--, this.emoteSoftTicker = 1.5 * s.player.emoteSoftCooldown), !this.pingMouseTriggered && !this.emoteMouseTriggered || this.wheelDisplayed || (this.parentDisplayed = this.pingMouseTriggered ? this.teamPingWheel : this.emoteWheel, this.parentDisplayed.css({
							display: "block",
							left: this.emoteScreenPos.x,
							top: this.emoteScreenPos.y
						}), this.displayWheel(this.parentDisplayed, !0), this.wheelDisplayed = !0, this.displayedSelectors = this.pingMouseTriggered ? this.teamPingSelectors : this.emoteWheelSelectors, this.worldPos = p.screenToPoint(this.emoteScreenPos)), this.wheelDisplayed) {
						this.emoteHardTicker > 0 && !this.emoteWheelsGreyed ? (this.emoteWheels.css("opacity", .5), this.emoteWheelsGreyed = !0) : this.emoteHardTicker <= 0 && this.emoteWheelsGreyed && (this.emoteWheels.css("opacity", 1), this.emoteWheelsGreyed = !1), this.teamEmotesGreyed || 1 != n || (this.teamEmotes.css("opacity", this.teamEmoteOpacityReset), this.teamEmotesGreyed = !0);
						var w = null;
						if (x.None, y.touch && (o = this.emoteTouchedPos), o) {
							var S = h.sub(o, this.emoteScreenPos);
							S.y *= -1;
							for (var M = h.length(S), T = i(S), P = 0; P < this.displayedSelectors.length; P++) {
								var C = this.displayedSelectors[P];
								if (C.modular) {
									var z = C.emote;
									switch (_) {
										case "9mm":
											C.emote = m.Ammo9mm, C.texture = d[m.Ammo9mm].texture;
											break;
										case "12gauge":
											C.emote = m.Ammo12Gauge, C.texture = d[m.Ammo12Gauge].texture;
											break;
										case "762mm":
											C.emote = m.Ammo762mm, C.texture = d[m.Ammo762mm].texture;
											break;
										case "556mm":
											C.emote = m.Ammo556mm, C.texture = d[m.Ammo556mm].texture;
											break;
										default:
											C.emote = m.Ammo, C.texture = d[m.Ammo].texture
									}
									z != C.emote && C.parent.find(".ui-emote-image").css("background-image", "url(" + C.texture + ")")
								}
								var I = C.ping != x.None || C.emote != m.None,
									D = d[C.emote],
									A = D.teamOnly && 1 == n;
								M <= 35 && !I && this.emoteHardTicker <= 0 && !A ? w = C : g.isAngleBetween(T, C.angleC, C.angleA) && M > 35 && I && this.emoteHardTicker <= 0 && !A ? w = C : C.highlightDisplayed && (C.parent.css("opacity", this.wedgeOpacityReset), C.highlight.css("display", "none"), C.highlightDisplayed = !1)
							}
						}
						w && (this.emoteSelector = w, w.highlightDisplayed || (w.parent.css("opacity", 1), w.highlight.css("display", "block"), w.highlightDisplayed = !0), y.touch && this.emoteTouchedPos && (this.pingMouseTriggered ? this.triggerPing() : this.triggerEmote()))
					}
				}
				for (var O = 0; O < this.emotes.length; O++) {
					var L = this.emotes[O];
					if (L.alive) {
						var B = !1,
							E = h.create(0, 0),
							F = 0,
							R = c.getPlayerById(L.playerId);
						if (R && !R.netData.dead && (E = h.copy(R.pos), F = R.layer, B = !0), !B) {
							var j = r.getDeadBodyById(L.playerId);
							j && (E = h.copy(j.pos), F = j.layer, B = !0)
						}
						if (B) {
							if (L.isNew) {
								var N = d[L.type];
								this.audioManager.playSound(N.sound, {
									channel: "ui",
									soundPos: E,
									layer: F
								})
							}
							L.isNew = !1, L.pos = E, L.lifeIn > 0 ? L.lifeIn -= e : L.life > 0 ? L.life -= e : L.lifeOut > 0 && (L.lifeOut -= e);
							var q = f.sameLayer(F, this.activePlayer.layer) ? 3 : F;
							l.addPIXIObj(L.container, k.World, q, 1e3, L.zIdx), L.alive = L.alive && L.lifeOut > 0
						} else L.alive = !1
					}
				}
				var G = h.create(.5 * p.screenWidth / p.z(), .5 * p.screenHeight / p.z()),
					U = {
						min: h.sub(p.pos, G),
						max: h.add(p.pos, G)
					};
				this.teamId = c.getPlayerInfo(a.__id).teamId;
				for (var V = c.getTeamInfo(this.teamId), H = V.playerIds.length, W = 0; W < H; W++) {
					var K = this.teamIndicators[W],
						X = V.playerIds[W],
						Z = (c.getPlayerInfo(X), X == this.activePlayer.__id),
						Y = c.getTeammateData(X);
					if (Y)
						for (var J in K)
							if (K.hasOwnProperty(J)) {
								var Q = K[J],
									$ = Q.pingContainer,
									ee = Q.indContainer,
									te = Q.borderSprite.sprite,
									ae = Q.pingSprite.sprite,
									ie = Q.indSpriteOuter.sprite,
									oe = Q.indSpriteInner.sprite,
									ne = !0;
								if (Q.fadeIn -= e, Q.life -= e, Q.fadeOut -= Q.life > 0 ? 0 : e, Q.fadeOut > 0) {
									var re = Q.pos,
										se = h.normalizeSafe(h.sub(re, p.pos), h.create(1, 0)),
										le = u.intersectRayAabb(p.pos, se, U.min, U.max),
										ce = Math.atan2(se.y, -se.x) + .5 * Math.PI,
										me = p.pointToScreen(le),
										de = u.testCircleAabb(re, s.player.radius, U.min, U.max),
										pe = p.pixels(Q.borderSprite.baseScale),
										ue = p.pixels(Q.pingSprite.baseScale);
									if (te.scale.set(pe, pe), ae.scale.set(ue, ue), !Y.dead) {
										ne = Q.fadeOut < 0;
										var he = de ? p.pointToScreen(re).x : g.clamp(me.x, 64, p.screenWidth - 64),
											ge = de ? p.pointToScreen(re).y : g.clamp(me.y, 64, p.screenHeight - 64),
											fe = p.pointToScreen(re).x,
											ye = p.pointToScreen(re).y;
										ae.position.x = fe, ae.position.y = ye, te.position.x = fe, te.position.y = ye, ie.position.x = he, ie.position.y = ge, ie.rotation = ce, oe.position.x = he, oe.position.y = ge;
										var be = te.alpha <= 0 ? 1 : te.alpha - e;
										te.alpha = be;
										var xe = p.pixels(Q.borderSprite.baseScale * (2 - be));
										if (te.scale.set(xe, xe), oe.alpha = de ? 0 : be, Q.fadeIn > 0) {
											var ve = 1 - Q.fadeIn / this.pingFadeIn;
											$.alpha = 1, ee.alpha = 1, ae.alpha = 1, ie.alpha = de ? 0 : ve
										} else ie.alpha = de ? 0 : 1;
										if (Q.life < 0) {
											var ke = Q.fadeOut / this.pingFadeOut;
											$.alpha = ke, ee.alpha = ke
										}
										Q.displayed || ($.visible = !0, ee.visible = !Z, Q.displayed = !0)
									}
								}
								ne && Q.displayed && ($.visible = !1, ee.visible = !1, Q.displayed = !1)
							}
				}
			},
			displayWheel: function(e, t) {
				e.css("display", t ? "block" : "none")
			},
			updateEmoteWheel: function(e) {
				var t = {
					top: e[c.Top],
					right: e[c.Right],
					bottom: e[c.Bottom],
					left: e[c.Left]
				};
				for (var a in t)
					if (t.hasOwnProperty(a)) {
						var o = d[t[a]];
						if (this.emoteWheelData[a] && void 0 != o) {
							var r = d[t[a]];
							r.teamOnly || (this.emoteWheelData[a].emote = t[a])
						}
					}
				this.emoteWheelSelectors = [];
				for (var s in this.emoteWheelData)
					if (this.emoteWheelData.hasOwnProperty(s)) {
						var l = this.emoteWheelData[s],
							m = d[l.emote],
							p = i(l.vA),
							u = i(l.vC);
						this.emoteWheelSelectors.push(n({
							angleA: p,
							angleC: u,
							highlight: l.parent.find(".ui-emote-hl"),
							highlightDisplayed: !1,
							texture: m.texture
						}, l));
						var h = l.parent.find(".ui-emote-image");
						h.css("background-image", "url(" + m.texture + ")")
					}
			},
			render: function(e, t) {
				for (var a = 0; a < this.emotes.length; a++) {
					var i = this.emotes[a];
					if (i.container.visible = i.alive, i.alive) {
						var o = 0;
						if (i.lifeIn > 0) {
							var n = 1 - i.lifeIn / this.emoteLifeIn;
							o = g.easeOutElastic(n)
						} else if (i.life > 0) o = 1;
						else if (i.lifeOut > 0) {
							var r = i.lifeOut / this.emoteLifeOut;
							o = r
						}
						var s = h.add(i.pos, h.mul(i.posOffset, 1 / g.clamp(e.zoom, .75, 1))),
							l = e.pointToScreen(s),
							c = o * i.baseScale * g.clamp(e.zoom, .9, 1.75);
						i.container.position.set(l.x, l.y), i.container.scale.set(c, c)
					}
				}
			}
		}, e.exports = {
			EmoteManager: o
		}
	},
	"6XNf": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-04-07",
				locale: "jp"
			},
			"word-order": "svo",
			"index-slogan": "2Dãƒ?ãƒˆãƒ«ãƒ­ãƒ¯ã‚¤ãƒ¤ãƒ«",
			"index-region": "åœ°åŸŸ",
			"index-north-america": "åŒ—ã‚¢ãƒ¡ãƒªã‚«",
			"index-europe": "ãƒ¨ãƒ¼ãƒ­ãƒƒãƒ‘",
			"index-asia": "ã‚¢ã‚¸ã‚¢",
			"index-players": "ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼",
			"index-play-solo": "1äººã?§é?Šã?¶",
			"index-play-duo": "2äººã?§é?Šã?¶",
			"index-play-squad": "4äººã?§é?Šã?¶",
			"index-join-team": "ãƒ?ãƒ¼ãƒ ã?«å?‚åŠ ",
			"index-create-team": "ãƒ?ãƒ¼ãƒ ã‚’ä½œæˆ?",
			"index-leave-team": "ã‚­ãƒ£ãƒ³ã‚»ãƒ«",
			"index-joining-team": "ãƒ?ãƒ¼ãƒ ã?«å?‚åŠ ä¸­",
			"index-creating-team": "ãƒ?ãƒ¼ãƒ ã‚’ä½œæˆ?ä¸­",
			"index-invite-link": "æ‹›å¾…ãƒªãƒ³ã‚¯",
			"index-solo": "ã‚½ãƒ­",
			"index-duo": "ãƒ‡ãƒ¥ã‚ª",
			"index-squad": "ã‚¹ã‚¯ãƒ¯ãƒƒãƒ‰",
			"index-auto-fill": "è‡ªå‹•ç·¨æˆ?ã?‚ã‚Š",
			"index-no-fill": "è‡ªå‹•ç·¨æˆ?ã?ªã?—",
			"index-waiting-for-leader": "ãƒªãƒ¼ãƒ€ãƒ¼ã?Œã‚²ãƒ¼ãƒ ã‚’é–‹å§‹ã?™ã‚‹ã?®ã‚’å¾…ã?£ã?¦ã?„ã?¾ã?™",
			"index-play": "å‡ºç™ºã?™ã‚‹",
			"index-featured-youtuber": "ã?Šã?™ã?™ã‚?Youtuber",
			"index-settings": "è¨­å®š",
			"index-high-resolution": "é«˜ç?»è³ªãƒ¢ãƒ¼ãƒ‰",
			"index-screen-shake": "æŒ¯å‹•ã‚¨ãƒ•ã‚§ã‚¯ãƒˆ",
			"index-master-volume": "Master Volume",
			"index-sfx-volume": "SFX Volume",
			"index-music-volume": "Music Volume",
			"index-mobile-announce": "ã‚¹ãƒžãƒ¼ãƒˆãƒ•ã‚©ãƒ³ã?§ã‚‚ãƒ—ãƒ¬ã‚¤ã?§ã??ã‚‹ã‚ˆã?†ã?«ã?ªã‚Šã?¾ã?—ã?Ÿï¼?",
			"index-mobile-tooltip": "ã‚¹ãƒžãƒ¼ãƒˆãƒ•ã‚©ãƒ³ã?§ <span>surviv.io</span> ã‚’é–‹ã?„ã?¦ã?„ã?¤ã?§ã‚‚ã?©ã?“ã?§ã‚‚ãƒ—ãƒ¬ã‚¤ã?—ã?¾ã?—ã‚‡ã?†ï¼?",
			"index-team-is-full": "ãƒ?ãƒ¼ãƒ ã?¯æº€å“¡ã?§ã?™ï¼?",
			"index-failed-joining-team": "ãƒ?ãƒ¼ãƒ ã?¸ã?®å?‚åŠ ã?«å¤±æ•—ã?—ã?¾ã?—ã?Ÿ",
			"index-failed-creating-team": "ãƒ?ãƒ¼ãƒ ã?®ä½œæˆ?ã?«å¤±æ•—ã?—ã?¾ã?—ã?Ÿ",
			"index-failed-finding-game": "ã‚²ãƒ¼ãƒ ã?®æ¤œç´¢ã?«å¤±æ•—ã?—ã?¾ã?—ã?Ÿ",
			"index-failed-joining-game": "ã‚²ãƒ¼ãƒ ã?¸ã?®å?‚åŠ ã?«å¤±æ•—ã?—ã?¾ã?—ã?Ÿ",
			"index-lost-connection": "ãƒ?ãƒ¼ãƒ ã?¨ã?®æŽ¥ç¶šã?Œåˆ‡æ–­ã?•ã‚Œã?¾ã?—ã?Ÿ",
			"index-host-closed": "ãƒ›ã‚¹ãƒˆã?ŒæŽ¥ç¶šã‚’çµ‚äº†ã?—ã?¾ã?—ã?Ÿ",
			"index-invalid-protocol": "Old client version.",
			"index-view-more": "è©³ç´°",
			"index-back-to-main": "ãƒ¡ã‚¤ãƒ³ãƒ¡ãƒ‹ãƒ¥ãƒ¼ã?«æˆ»ã‚‹",
			"index-most-kills": "ã‚­ãƒ«æ•°",
			"index-total-kills": "ç·?ã‚­ãƒ«æ•°",
			"index-total-wins": "ãƒ‰ãƒ³å‹?æ•°",
			"index-top-5-percent": "ä¸Šä½?5%",
			"index-kill-death-ratio": "ã‚­ãƒ« / ãƒ‡ã‚¹",
			"index-mode": "Mode",
			"index-for": "For",
			"index-today": "ä»Šæ—¥",
			"index-this-week": "ä»Šé€±",
			"index-all-time": "å…¨æœŸé–“",
			"index-top-100": "ä¸Šä½?100å??",
			"index-rank": "é †ä½?",
			"index-player": "ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼å??",
			"index-total-games": "Total Games",
			"index-controls": "æ“?ä½œæ–¹æ³•",
			"index-movement": "ç§»å‹•",
			"index-movement-ctrl": "[W] , [A] , [S] , [D]",
			"index-aim": "ç…§æº–",
			"index-aim-ctrl": "ãƒžã‚¦ã‚¹ã‚«ãƒ¼ã‚½ãƒ«",
			"index-punch": "æ®´ã‚‹",
			"index-shoot": "å°„æ’ƒ",
			"index-shoot-ctrl": "å·¦ã‚¯ãƒªãƒƒã‚¯",
			"index-change-weapons": "æ­¦å™¨å¤‰æ›´",
			"index-change-weapons-ctrl": "[1] ã€œ [2] , ã‚¹ã‚¯ãƒ­ãƒ¼ãƒ«ãƒ›ã‚¤ãƒ¼ãƒ«",
			"index-stow-weapons": "æ­¦å™¨ã‚’ã?—ã?¾ã?†ï¼ˆæ‹³ã?§æŠµæŠ—ï¼‰",
			"index-stow-weapons-ctrl": "[3] , [E]",
			"index-swap-weapons": "ç›´å‰?ã?®æ­¦å™¨ã‚’è£…å‚™",
			"index-swap-weapons-ctrl": "[Q]",
			"index-reload": "ãƒªãƒ­ãƒ¼ãƒ‰",
			"index-reload-ctrl": "[R]",
			"index-scope-zoom": "ã‚¹ã‚³ãƒ¼ãƒ—å€?çŽ‡å¤‰æ›´",
			"index-scope-zoom-ctrl": "å€?çŽ‡ã‚’å·¦ã‚¯ãƒªãƒƒã‚¯",
			"index-pickup": "æ‹¾ã?†",
			"index-loot": "å¥ªã?†",
			"index-revive": "è˜‡ç?Ÿ",
			"index-pickup-ctrl": "[F]",
			"index-use-medical": "åŒ»è–¬å“?ã?®ä½¿ç?¨",
			"index-use-medical-ctrl": "ã‚¢ã‚¤ãƒ†ãƒ ã‚’å·¦ã‚¯ãƒªãƒƒã‚¯ , [7]ï½ž[0]",
			"index-drop-item": "ã‚¢ã‚¤ãƒ†ãƒ ã‚’æ?¨ã?¦ã‚‹",
			"index-drop-item-ctrl": "ã‚¢ã‚¤ãƒ†ãƒ ã‚’å?³ã‚¯ãƒªãƒƒã‚¯",
			"index-cancel-action": "è¡Œå‹•ã‚­ãƒ£ãƒ³ã‚»ãƒ«",
			"index-cancel-action-ctrl": "[X]",
			"index-view-map": "ãƒžãƒƒãƒ—ã‚’è¡¨ç¤º",
			"index-view-map-ctrl": "[M] , [G]",
			"index-toggle-minimap": "ãƒŸãƒ‹ãƒžãƒƒãƒ—è¡¨ç¤ºåˆ‡æ›¿",
			"index-toggle-minimap-ctrl": "[V]",
			"index-use-ping": "ãƒ?ãƒ¼ãƒ ã‚¨ãƒ¢ãƒ¼ãƒˆã?®ä½¿ç?¨",
			"index-use-ping-ctrl": "[C]ã‚’æŠ¼ã?—ã?ªã?Œã‚‰å?³ã‚¯ãƒªãƒƒã‚¯ã‚’ãƒ‰ãƒ©ãƒƒã‚°ã?—ã?¦è¡¨ç¤º. è©²å½“ã?®ã‚¨ãƒ¢ãƒ¼ãƒˆä¸Šã?§å?³ã‚¯ãƒªãƒƒã‚¯ã‚’é›¢ã?™.",
			"index-use-emote": "ã‚¨ãƒ¢ãƒ¼ãƒˆã?®ä½¿ç?¨",
			"index-use-emote-ctrl": "å?³ã‚¯ãƒªãƒƒã‚¯ã‚’ãƒ‰ãƒ©ãƒƒã‚°ã?—ã?¦è¡¨ç¤º. è©²å½“ã?®ã‚¨ãƒ¢ãƒ¼ãƒˆä¸Šã?§å?³ã‚¯ãƒªãƒƒã‚¯ã‚’é›¢ã?™.",
			"index-how-to-play": "é?Šã?³æ–¹",
			"index-tips-1-desc": "Surviv.ioã?®å‹?åˆ©æ?¡ä»¶ã?¯æœ€å¾Œã?®ä¸€äººã?«ã?ªã‚‹ã?¾ã?§ç?Ÿã??æ®‹ã‚‹ã?“ã?¨ã?§ã?™. å?Œã?˜è©¦å?ˆã?§ã?¯ä¸€åº¦æ­»äº¡ã?—ã?Ÿæ™‚ç‚¹ã?§ã‚²ãƒ¼ãƒ ã‚ªãƒ¼ãƒ?ãƒ¼ã?¨ã?ªã‚Šã?¾ã?™.",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "æ—¢ã?«PUBGã‚„Fortniteã€?H1Z1ã?¨ã?„ã?£ã?Ÿä»–ã?®ãƒ?ãƒˆãƒ«ãƒ­ãƒ¯ã‚¤ãƒ¤ãƒ«ã‚²ãƒ¼ãƒ ã‚’ãƒ—ãƒ¬ã‚¤ã?—ã?Ÿã?“ã?¨ã?Œã?‚ã‚‹ã?®ã?§ã?‚ã‚Œã?°ã€?å‹?åˆ©ã?¸ã?®é?“ã?¯ç›®å‰?ã?§ã?™ï¼?Surviv.ioã?¯2Dç‰ˆPUBGã?®ã‚ˆã?†ã?ªã‚‚ã?®ã?§ã?™.",
			"index-tips-3": "ã‚¢ã‚¤ãƒ†ãƒ ã‚’ç•¥å¥ªã?›ã‚ˆ",
			"index-tips-3-desc": "ã‚²ãƒ¼ãƒ é–‹å§‹æ™‚ç‚¹ã?§ã?¯ç°¡æ½?ã?ªãƒ?ãƒƒã‚¯ãƒ‘ãƒƒã‚¯ã?—ã?‹ã?‚ã‚Šã?¾ã?›ã‚“. ãƒžãƒƒãƒ—ä¸­ã‚’é§†ã?‘å·¡ã‚Šã€?æ­¦å™¨ã‚„éŠƒå¼¾ã€?ã‚¹ã‚³ãƒ¼ãƒ—ã€?åŒ»è–¬å“?ã?ªã?©æ§˜ã€…ã?ªã‚¢ã‚¤ãƒ†ãƒ ã‚’æ‰‹ã?«å…¥ã‚Œã?¾ã?—ã‚‡ã?†. ä»–ã?®ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‚’è¨Žã?¡å?–ã‚Šæˆ¦åˆ©å“?ã‚’ã‚²ãƒƒãƒˆã?—ã?¾ã?—ã‚‡ã?†ï¼?",
			"index-tips-4": "èµ¤è‰² = ã‚¬ã‚¹ã?‹ã‚‰é€ƒã?’ã‚?ï¼?",
			"index-tips-4-desc": "æ•µã?¯ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã? ã?‘ã?§ã?¯ã?‚ã‚Šã?¾ã?›ã‚“. ãƒžãƒƒãƒ—ã?®ç«¯ã?‹ã‚‰è¿«ã?£ã?¦ã??ã‚‹ãƒ¬ãƒƒãƒ‰ã‚¾ãƒ¼ãƒ³å†…ã?«å…¥ã‚Œã?°ã€?æ–­ç¶šçš„ã?ªãƒ€ãƒ¡ãƒ¼ã‚¸ã‚’å?—ã?‘ã?¦æ­»ã?«è‡³ã‚‹å?±é™ºã?Œã?‚ã‚Šã?¾ã?™. ãƒžãƒƒãƒ—ã?«ç›®ã‚’å…‰ã‚‰ã?›ã?¦å®‰å…¨åœ°å¸¯ã?§ç?Ÿã??æ®‹ã‚Šã?¾ã?—ã‚‡ã?†.",
			"index-movement-ctrl-touch": "Left stick",
			"index-aim-ctrl-touch": "Right stick",
			"index-shoot-ctrl-touch": "Drag right stick outside stick border",
			"index-change-weapons-ctrl-touch": "Tap weapon slot",
			"index-reload-ctrl-touch": "Tap equipped ammo counter",
			"index-scope-zoom-ctrl-touch": "Tap zoom item",
			"index-pickup-ctrl-touch": "Tap interaction button or loot name",
			"index-use-medical-ctrl-touch": "Tap medical item",
			"index-drop-item-ctrl-touch": "Touch and hold item",
			"index-cancel-action-ctrl-touch": "Tap interaction button",
			"index-view-map-ctrl-touch": "Tap minimap",
			"index-use-ping-ctrl-touch": "View map and tap anywhere on map",
			"index-use-emote-ctrl-touch": "Tap surviv icon",
			"game-alive": "ç?Ÿå­˜",
			"game-reloading": "ãƒªãƒ­ãƒ¼ãƒ‰ä¸­",
			"game-using": "ä½¿ç?¨ä¸­",
			"game-reviving": "è˜‡ç?Ÿä¸­",
			"game-revive-teammate": "ãƒ?ãƒ¼ãƒ ãƒ¡ã‚¤ãƒˆã‚’è˜‡ç?Ÿ",
			"game-equip": "è£…å‚™",
			"game-cancel": "ã‚­ãƒ£ãƒ³ã‚»ãƒ«",
			"game-open-door": "ãƒ‰ã‚¢ã‚’é–‹ã??",
			"game-close-door": "ãƒ‰ã‚¢ã‚’é–‰ã‚?ã‚‹",
			"game-You": "ã?‚ã?ªã?Ÿ",
			"game-you": "ã?‚ã?ªã?Ÿ",
			"game-themselves": "è‡ªåˆ†è‡ªèº«",
			"game-yourself": "ã?‚ã?ªã?Ÿè‡ªèº«",
			"game-you-died": "ã?Œæ­»äº¡ã?—ã?¾ã?—ã?Ÿ",
			"game-player-died": "ã?Œæ­»äº¡ã?—ã?¾ã?—ã?Ÿ",
			"game-with": "ä½¿ç?¨ã?—ã?¦",
			"game-knocked-out": "ã?Œæ°—çµ¶ã?•ã?›ã?¾ã?—ã?Ÿ",
			"game-killed": "ã?Œæ®ºã?—ã?¾ã?—ã?Ÿ",
			"game-finally-killed": "ã?¤ã?„ã?«æ®ºã?—ã?¾ã?—ã?Ÿ",
			"game-finally-bled-out": "ã?¤ã?„ã?«æ?¯çµ¶ã?ˆã?¾ã?—ã?Ÿ",
			"game-died-outside": "ã?Œã‚»ãƒ¼ãƒ•ã‚¾ãƒ¼ãƒ³ã?®å¤–ã?§æ­»äº¡ã?—ã?¾ã?—ã?Ÿ",
			"game-the-red-zone": "ãƒ¬ãƒƒãƒ‰ã‚¾ãƒ¼ãƒ³",
			"game-waiting-for-players": "ãƒ—ãƒ¬ã‚¤ãƒ¤ãƒ¼ã‚’å¾…ã?£ã?¦ã?„ã?¾ã?™",
			"game-spectating": "è¦³æˆ¦ä¸­",
			"game-red-zone-advances": "ã‚¬ã‚¹æ±šæŸ“ã‚¨ãƒªã‚¢æ‹¡å¤§ã?¾ã?§",
			"game-red-zone-advancing": "ã‚¬ã‚¹æ±šæŸ“ã‚¨ãƒªã‚¢ã?Œæ‹¡å¤§ä¸­ã€?å®‰å…¨åœ°å¸¯ã?«é€ƒã?’ã?¦ã??ã? ã?•ã?„ï¼?",
			"game-seconds": "ç§’",
			"game-minutes": "åˆ†",
			"game-minute": "åˆ†",
			"game-m": "åˆ†",
			"game-s": "ç§’",
			"game-not-enough-space": "ã‚¤ãƒ³ãƒ™ãƒ³ãƒˆãƒªã?«ç©ºã??ã?Œã?‚ã‚Šã?¾ã?›ã‚“ï¼?",
			"game-item-already-owned": "æ—¢ã?«æ‰€æŒ?ã?—ã?¦ã?„ã‚‹ã‚¢ã‚¤ãƒ†ãƒ ã?§ã?™ï¼?",
			"game-item-already-equipped": "æ—¢ã?«è£…å‚™ã?—ã?¦ã?„ã‚‹ã‚¢ã‚¤ãƒ†ãƒ ã?§ã?™ï¼?",
			"game-better-item-equipped": "ã‚ˆã‚Šå„ªã‚Œã?Ÿã‚¢ã‚¤ãƒ†ãƒ ã‚’è£…å‚™ã?—ã?¦ã?„ã?¾ã?™ï¼?",
			"game-play-new-game": "æ¬¡ã?®è©¦å?ˆã?«å?‚åŠ ã?™ã‚‹",
			"game-spectate": "è¦³æˆ¦ã?™ã‚‹",
			"game-full-screen": "å…¨ç?»é?¢è¡¨ç¤º",
			"game-sound": "ãƒŸãƒ¥ãƒ¼ãƒˆ",
			"game-quit-game": "æ’¤é€€ã?™ã‚‹",
			"game-return-to-game": "è©¦å?ˆã?«æˆ»ã‚‹",
			"game-hide-match-stats": "æˆ¦ç¸¾ã‚’é?žè¡¨ç¤º",
			"game-view-match-stats": "æˆ¦ç¸¾ã‚’è¡¨ç¤º",
			"game-previous-teammate": "å‰?ã?®ãƒ?ãƒ¼ãƒ ãƒ¡ã‚¤ãƒˆ",
			"game-next-teammate": "æ¬¡ã?®ãƒ?ãƒ¼ãƒ ãƒ¡ã‚¤ãƒˆ",
			"game-leave-game": "è©¦å?ˆã?‹ã‚‰é›¢è„±ã?™ã‚‹",
			"game-your-results": "ã?‚ã?ªã?Ÿã?®æˆ¦ç¸¾",
			"game-chicken": "å‹?ã?£ã?Ÿï¼?å‹?ã?£ã?Ÿï¼?å¤•é£¯ã?¯ãƒ‰ãƒ³å‹?ã? ï¼?ï¼?",
			"game-won-the-game": "ã?Œã‚²ãƒ¼ãƒ ã?«å‹?åˆ©ã?—ã?¾ã?—ã?Ÿ",
			"game-team-eliminated": "ã?¾ã?‚ã€?ã?“ã‚“ã?ªæ—¥ã‚‚ã?‚ã‚‹ã?®ã?•ï¼?æ¬¡ã?¯ã‚‚ã?†å°‘ã?—ãƒ„ã‚¤ã?¦ã?¾ã?™ã‚ˆã?†ã?«ï¼?",
			"game-solo-rank": "Solo é †ä½?",
			"game-duo-rank": "Duo é †ä½?",
			"game-squad-rank": "Squad é †ä½?",
			"game-rank": "é †ä½?",
			"game-team-rank": "ãƒ?ãƒ¼ãƒ é †ä½?",
			"game-team-kills": "ãƒ?ãƒ¼ãƒ ã‚­ãƒ«æ•°",
			"game-kill": "ã‚­ãƒ«æ•°",
			"game-kills": "ã‚­ãƒ«æ•°",
			"game-damage-dealt": "ä¸Žãƒ€ãƒ¡ãƒ¼ã‚¸",
			"game-damage-taken": "è¢«ãƒ€ãƒ¡ãƒ¼ã‚¸",
			"game-survived": "ç?Ÿå­˜æ™‚é–“",
			"game-backpack00": "ãƒ?ãƒ¼ãƒ?",
			"game-backpack01": "ã‚¹ãƒ¢ãƒ¼ãƒ«ãƒ?ãƒƒã‚¯ãƒ‘ãƒƒã‚¯",
			"game-backpack02": "ãƒ¬ã‚®ãƒ¥ãƒ©ãƒ¼ãƒ?ãƒƒã‚¯ãƒ‘ãƒƒã‚¯",
			"game-backpack03": "ãƒŸãƒªã‚¿ãƒªãƒ¼ãƒ?ãƒƒã‚¯ãƒ‘ãƒƒã‚¯",
			"game-bandage": "åŒ…å¸¯",
			"game-bandage-tooltip": "å·¦ã‚¯ãƒªãƒƒã‚¯ã?§HPã‚’15å›žå¾©ã?—ã?¾ã?™",
			"game-healing-tooltip": "75HPä»¥ä¸Šã?®å ´å?ˆã?¯å›žå¾©ã?§ã??ã?¾ã?›ã‚“",
			"game-healthkit": "æ•‘æ€¥ç®±",
			"game-healthkit-tooltip": "å·¦ã‚¯ãƒªãƒƒã‚¯ã?§HPã‚’100å›žå¾©ã?—ã?¾ã?™",
			"game-soda": "ã‚½ãƒ¼ãƒ€",
			"game-soda-tooltip": "å·¦ã‚¯ãƒªãƒƒã‚¯ã?§ã‚¢ãƒ‰ãƒ¬ãƒŠãƒªãƒ³ã‚’25å¢—åŠ ã?•ã?›ã?¾ã?™",
			"game-adrenaline-tooltip": "ã‚¢ãƒ‰ãƒ¬ãƒŠãƒªãƒ³ã?¯HPã‚’æ™‚é–“ã?¨ã?¨ã‚‚ã?«è‡ªå‹•å›žå¾©ã?•ã?›ã?¾ã?™",
			"game-painkiller": "éŽ®ç—›å‰¤",
			"game-painkiller-tooltip": "å·¦ã‚¯ãƒªãƒƒã‚¯ã?§ã‚¢ãƒ‰ãƒ¬ãƒŠãƒªãƒ³ã‚’50å¢—åŠ ã?•ã?›ã?¾ã?™",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "MP5, MAC-10, UMP9, Vector, M9, Glock 18Cç?¨ã?®å¼¾è–¬",
			"game-12gauge": "12 gauge",
			"game-12gauge-tooltip": "M870, MP220, Saiga-12ç?¨ã?®ã?®å¼¾è–¬",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "AK-47, SCAR-H, DP-28, Mosin Nagant, M39EMR, OT-38ç?¨ã?®å¼¾è–¬",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "FAMAS, HK416, Mk 12 SPR, M249ç?¨ã?®å¼¾è–¬",
			"game-chest01": "ãƒ¬ãƒ™ãƒ«1 ãƒ™ã‚¹ãƒˆ",
			"game-chest02": "ãƒ¬ãƒ™ãƒ«2 ãƒ™ã‚¹ãƒˆ",
			"game-chest03": "ãƒ¬ãƒ™ãƒ«3 ãƒ™ã‚¹ãƒˆ",
			"game-helmet01": "ãƒ¬ãƒ™ãƒ«1 ãƒ˜ãƒ«ãƒ¡ãƒƒãƒˆ",
			"game-helmet02": "ãƒ¬ãƒ™ãƒ«2 ãƒ˜ãƒ«ãƒ¡ãƒƒãƒˆ",
			"game-helmet03": "ãƒ¬ãƒ™ãƒ«3 ãƒ˜ãƒ«ãƒ¡ãƒƒãƒˆ",
			"game-1xscope": "1x ã‚¹ã‚³ãƒ¼ãƒ—",
			"game-2xscope": "2x ã‚¹ã‚³ãƒ¼ãƒ—",
			"game-4xscope": "4x ã‚¹ã‚³ãƒ¼ãƒ—",
			"game-8xscope": "8x ã‚¹ã‚³ãƒ¼ãƒ—",
			"game-15xscope": "15x ã‚¹ã‚³ãƒ¼ãƒ—",
			"game-level-1": "ãƒ¬ãƒ™ãƒ«1",
			"game-level-2": "ãƒ¬ãƒ™ãƒ«2",
			"game-level-3": "ãƒ¬ãƒ™ãƒ«3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-outfitWoodland": "Woodland Combat",
			"game-outfitJester": "Jester's Folly",
			"game-fists": "æ‹³",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-m9_dual": "Dual M9",
			"game-hud-m9_dual": "M9",
			"game-glock": "Glock 18C",
			"game-glock_dual": "Dual Glock 18C",
			"game-hud-glock_dual": "Glock 18C",
			"game-ot38": "OT-38",
			"game-ot38_dual": "Dual OT-38",
			"game-hud-ot38_dual": "OT-38",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "æ‰‹æ¦´å¼¾",
			"game-hud-frag": "æ‰‹æ¦´å¼¾",
			"game-smoke": "ã‚¹ãƒ¢ãƒ¼ã‚¯ã‚°ãƒ¬ãƒ?ãƒ¼ãƒ‰",
			"game-hud-smoke": "ã‚¹ãƒ¢ãƒ¼ã‚¯",
			"game-barrel_01": "ãƒ?ãƒ¬ãƒ«",
			"game-silo_01": "ã‚µã‚¤ãƒ­",
			"game-oven_01": "ã‚ªãƒ¼ãƒ–ãƒ³"
		};
		e.exports = i
	},
	"6YQA": function(e, t, a) {
		"use strict";

		function i() {
			return JSON.parse(localStorage.getItem(d)) || {}
		}

		function o(e, t) {
			var a = i();
			return void 0 !== a[e] ? a[e] : t
		}

		function n(e, t) {
			var a = i();
			a[e] = t, localStorage.setItem(d, JSON.stringify(a))
		}

		function r() {
			this.enabled = !1, this.zoom = l.scopeZoomRadius["1xscope"], this.cull = o("cull", !1), this.debug = o("debug", !0), this.setEnabled(!1)
		}
		var s = a("juYr"),
			l = (a("gKxX"), a("+0OL")),
			c = a("0od3"),
			m = (a("/2+T"), a("r4ug"), a("S40U")),
			d = "surviv_editor";
		r.prototype = {
			free: function() {},
			setEnabled: function(e) {
				var t = this;
				this.enabled = e, s("#ui-editor").css("display", e ? "block" : "none"), s("#ui-game").css("display", e ? "none" : "block"), s("#gameAreaWrapper").css("cursor", e ? "default" : "crosshair");
				var a = function(e) {
					var a = s("<input/>", {
						type: "checkbox",
						value: "value",
						checked: t[e]
					});
					return a.on("click", function(i) {
						i.stopPropagation(), t[e] = a.prop("checked"), n(e, t[e])
					}), a
				};
				this.uiPos = s("<div/>"), this.uiZoom = s("<div/>"), this.uiCull = a("cull"), this.uiDebug = a("debug");
				var i = s("#ui-editor-info-list");
				i.empty(), i.append(s("<li/>").append(this.uiPos)), i.append(s("<li/>").append(this.uiZoom));
				var o = s("<div/>", {
					html: "Cull: "
				});
				i.append(s("<li/>").append(o.append(this.uiCull)));
				var r = s("<div/>", {
					html: "Debug: "
				});
				i.append(s("<li/>").append(r.append(this.uiDebug)))
			},
			update: function(e, t, a, i) {
				t.keyPressed(m.Key.Plus) && (this.zoom -= 8), t.keyPressed(m.Key.Minus) && (this.zoom += 8), t.keyPressed(m.Key.Zero) && (this.zoom = a.getScopeZoom()), this.zoom = c.clamp(this.zoom, .5, 400);
				var o = a.netData.pos.x.toFixed(2),
					n = a.netData.pos.y.toFixed(2);
				this.uiPos.html("Pos:  " + o + ", " + n), this.uiZoom.html("Zoom: " + this.zoom)
			},
			renderCamera: function(e) {}
		}, e.exports = r
	},
	"85i3": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("juYr"),
			r = function() {
				function e() {
					i(this, e), this.requests = 0, this.enabled = !0, this.throttle = !1, this.throttleTimeout = 0
				}
				return o(e, [{
					key: "update",
					value: function() {
						var e = (new Date).getTime();
						this.throttle ? e > this.throttleTimeout && (this.throttle = !1, this.requests = 0) : this.requests = Math.max(this.requests - 1, 0)
					}
				}, {
					key: "sample",
					value: function() {
						return Math.random() <= .01
					}
				}, {
					key: "store",
					value: function(e, t) {
						if (this.enabled) {
							if (++this.requests > 5) return this.throttleTimeout = (new Date).getTime() + 18e4, void(this.throttle = !0);
							var a = "https://us-central1-surviv-fa40f.cloudfunctions.net/" + e;
							t.key = "AIzaSyCrPuZeAQ2-aXZdTwZNwQJdv4rvsTE-2i8", n.ajax({
								type: "POST",
								dataType: "html",
								url: a,
								data: t,
								timeout: 3e3
							})
						}
					}
				}, {
					key: "storeGeneric",
					value: function(e, t) {
						this.sample() && this.store("storeGeneric", {
							parent: e,
							child: t
						})
					}
				}, {
					key: "logWindowOnError",
					value: function(e) {
						this.store("windowOnError", {
							error: e
						})
					}
				}, {
					key: "logWindowOnAppError",
					value: function(e) {
						this.store("windowOnAppError", {
							error: e
						})
					}
				}, {
					key: "logError",
					value: function(e) {
						this.store("errorLog", {
							error: e
						})
					}
				}, {
					key: "logTest",
					value: function(e) {
						this.store("testLog", {
							error: e
						})
					}
				}, {
					key: "logProxy",
					value: function(e) {
						this.store("onProxy", {
							data: e
						})
					}
				}]), e
			}(),
			s = new r;
		setInterval(function() {
			s.update()
		}, 1e3), e.exports = s
	},
	"8iex": function(e, t, a) {
		"use strict";
		var i = (a("DlZn"), a("0od3")),
			o = a("/2+T"),
			n = {
				circleToAabb: function(e, t) {
					var a = o.create(t);
					return {
						min: o.sub(e, a),
						max: o.add(e, a)
					}
				},
				aabbToCircle: function(e, t) {
					var a = o.mul(o.sub(t, e), .5);
					return {
						pos: o.add(e, a),
						rad: o.length(a)
					}
				},
				lineSegmentToAabb: function(e, t) {
					return {
						min: o.create(e.x < t.x ? e.x : t.x, e.y < t.y ? e.y : t.y),
						max: o.create(e.x > t.x ? e.x : t.x, e.y > t.y ? e.y : t.y)
					}
				},
				boundingAabb: function(e) {
					for (var t = o.create(Number.MAX_VALUE, Number.MAX_VALUE), a = o.create(-Number.MAX_VALUE, -Number.MAX_VALUE), i = 0; i < e.length; i++) {
						var n = e[i];
						t.x = Math.min(t.x, n.min.x), t.y = Math.min(t.y, n.min.y), a.x = Math.max(a.x, n.max.x), a.y = Math.max(a.y, n.max.y)
					}
					return {
						min: t,
						max: a
					}
				},
				splitAabb: function(e, t) {
					var a = o.mul(o.sub(e.max, e.min), .5),
						i = o.add(e.min, a),
						n = {
							min: o.copy(e.min),
							max: o.copy(e.max)
						},
						r = {
							min: o.copy(e.min),
							max: o.copy(e.max)
						};
					Math.abs(t.y) > Math.abs(t.x) ? (n.max = o.create(e.max.x, i.y), r.min = o.create(e.min.x, i.y)) : (n.max = o.create(i.x, e.max.y), r.min = o.create(i.x, e.min.y));
					var s = o.sub(e.max, e.min);
					return o.dot(s, t) > 0 ? [r, n] : [n, r]
				},
				testCircleAabb: function(e, t, a, n) {
					var r = o.create(i.clamp(e.x, a.x, n.x), i.clamp(e.y, a.y, n.y));
					return o.lengthSqr(o.sub(e, r)) < t * t || e.x >= a.x && e.x <= n.x && e.y >= a.y && e.y <= n.y
				},
				testCircleCircle: function(e, t, a, i) {
					var n = t + i;
					return o.lengthSqr(o.sub(a, e)) < n * n
				},
				testAabbAabb: function(e, t, a, i) {
					return e.x < i.x && e.y < i.y && a.x < t.x && a.y < t.y
				},
				intersectSegmentCircle: function(e, t, a, i) {
					var n = o.sub(t, e),
						r = Math.max(o.length(n), 1e-6);
					n = o.div(n, r);
					var s = o.sub(e, a),
						l = o.dot(s, n),
						c = o.dot(s, s) - i * i;
					if (c > 0 && l > 0) return null;
					var m = l * l - c;
					if (m < 0) return null;
					var d = Math.sqrt(m),
						p = -l - d;
					if (p < 0 && (p = -l + d), p <= r) {
						var u = o.add(e, o.mul(n, p));
						return {
							point: u,
							normal: o.normalize(o.sub(u, a))
						}
					}
					return null
				},
				intersectSegmentAabb: function(e, t, a, i) {
					var n = 0,
						r = Number.MAX_VALUE,
						s = e,
						l = o.sub(t, e),
						c = o.length(l);
					if (l = c > 1e-5 ? o.div(l, c) : o.create(1, 0), Math.abs(l.x) < 1e-5 && (l.x = 2e-5), Math.abs(l.y) < 1e-5 && (l.y = 2e-5), Math.abs(l.x) > 1e-5) {
						var m = (a.x - s.x) / l.x,
							d = (i.x - s.x) / l.x;
						if (n = Math.max(n, Math.min(m, d)), r = Math.min(r, Math.max(m, d)), n > r) return null
					}
					if (Math.abs(l.y) > 1e-5) {
						var p = (a.y - s.y) / l.y,
							u = (i.y - s.y) / l.y;
						if (n = Math.max(n, Math.min(p, u)), r = Math.min(r, Math.max(p, u)), n > r) return null
					}
					if (n > c) return null;
					var h = o.add(e, o.mul(l, n)),
						g = o.add(a, o.mul(o.sub(i, a), .5)),
						f = o.sub(h, g),
						y = o.mul(o.sub(a, i), .5);
					return {
						point: h,
						normal: o.normalizeSafe(o.create(parseInt(f.x / Math.abs(y.x) * 1.001), parseInt(f.y / Math.abs(y.y) * 1.001)), o.create(1, 0))
					}
				},
				intersectRayAabb: function(e, t, a, i) {
					Math.abs(t.x) < 1e-5 && (t.x = 2e-5), Math.abs(t.y) < 1e-5 && (t.y = 2e-5);
					var n = o.divElems(o.sub(a, e), t),
						r = o.divElems(o.sub(i, e), t),
						s = o.minElems(n, r),
						l = o.maxElems(n, r),
						c = Math.min(l.x, l.y);
					return c >= Math.max(s.x, s.y) ? o.add(e, o.mul(t, c)) : null
				},
				intersectCircleCircle: function(e, t, a, i) {
					var n = t + i,
						r = o.sub(a, e),
						s = o.lengthSqr(r);
					if (s < n * n) {
						var l = Math.sqrt(s);
						return {
							dir: l > 1e-5 ? o.div(r, l) : o.create(1, 0),
							pen: n - l
						}
					}
					return null
				},
				intersectAabbCircle: function(e, t, a, n) {
					if (a.x >= e.x && a.x <= t.x && a.y >= e.y && a.y <= t.y) {
						var r = o.mul(o.sub(t, e), .5),
							s = o.add(e, r),
							l = o.sub(a, s),
							c = Math.abs(l.x) - r.x - n,
							m = Math.abs(l.y) - r.y - n;
						return c > m ? {
							dir: o.create(l.x > 0 ? 1 : -1, 0),
							pen: -c
						} : {
							dir: o.create(0, l.y > 0 ? 1 : -1),
							pen: -m
						}
					}
					var d = o.create(i.clamp(a.x, e.x, t.x), i.clamp(a.y, e.y, t.y)),
						p = o.sub(a, d),
						u = o.lengthSqr(p);
					if (u < n * n) {
						var h = Math.sqrt(u);
						return {
							dir: h > 1e-4 ? o.div(p, h) : o.create(1, 0),
							pen: n - h
						}
					}
					return null
				},
				intersectAabbAabb: function(e, t, a, i) {
					var n = o.mul(o.sub(t, e), .5),
						r = o.add(e, n),
						s = o.mul(o.sub(i, a), .5),
						l = o.add(a, s),
						c = o.sub(l, r),
						m = n.x + s.x - Math.abs(c.x);
					if (m > 0) {
						var d = n.y + s.y - Math.abs(c.y);
						if (d > 0) return m > d ? {
							dir: c.x < 0 ? o.create(-1, 0) : o.create(1, 0),
							pen: m
						} : {
							dir: c.y < 0 ? o.create(0, -1) : o.create(0, 1),
							pen: d
						}
					}
					return null
				}
			};
		e.exports = n
	},
	"8jco": function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "ru"
			},
			"word-order": "svo",
			"index-slogan": "?š?¾Ñ€?¾?»?µ?²Ñ??º?°Ñ? ?‘?¸Ñ‚?²?° ?² 2D",
			"index-region": "? ?µ?³?¸?¾?½",
			"index-north-america": "?¡?µ?²?µÑ€?½?°Ñ? ???¼?µÑ€?¸?º?°",
			"index-europe": "?•?²Ñ€?¾?¿?°",
			"index-asia": "???·?¸Ñ?",
			"index-players": "?¸?³Ñ€?¾?º?¾?²",
			"index-play-solo": "?˜?³Ñ€?°Ñ‚ÑŒ ?¡?¾?»?¾",
			"index-play-duo": "?˜?³Ñ€?°Ñ‚ÑŒ ?² ??ÑƒÑ?Ñ‚?µ",
			"index-play-squad": "?˜?³Ñ€?°Ñ‚ÑŒ ?² ?žÑ‚Ñ€Ñ??´",
			"index-join-team": "?’?¾?¹Ñ‚?¸ ?² ?º?¾?¼?°?½?´Ñƒ",
			"index-create-team": "?¡?¾?·?´?°Ñ‚ÑŒ ?š?¾?¼?°?½?´Ñƒ",
			"index-how-to-play": "?š?°?º ?¸?³Ñ€?°Ñ‚ÑŒ",
			"index-leave-team": "?Ÿ?¾?º?¸?½ÑƒÑ‚ÑŒ ?š?¾?¼?°?½?´Ñƒ",
			"index-joining-team": "?ŸÑ€?¸Ñ??¾?µ?´?¸?½?µ?½?¸?µ ?º ?š?¾?¼?°?½?´?µ",
			"index-creating-team": "?¡?¾?·?´?°?½?¸?µ ?š?¾?¼?°?½?´Ñ‹",
			"index-invite-link": "?¡Ñ?Ñ‹?»?º?°-?¿Ñ€?¸?³?»?°Ñˆ?µ?½?¸?µ",
			"index-invite-code": "?š?¾?´ ?¿Ñ€?¸?³?»?°Ñˆ?µ?½?¸Ñ?",
			"index-join-team-help": "?•Ñ?Ñ‚ÑŒ Ñ?Ñ?Ñ‹?»?º?° ?½?° ?º?¾?¼?°?½?´Ñƒ ?¸?»?¸ ?º?¾?´? ???°?¿?¸Ñˆ?¸ ?µ?³?¾ Ñ?ÑŽ?´?°:",
			"index-solo": "?¡?¾?»?¾",
			"index-duo": "??ÑƒÑ?Ñ‚",
			"index-squad": "?žÑ‚Ñ€Ñ??´",
			"index-auto-fill": "???²Ñ‚?¾?·?°?¿?¾?»?½?µ?½?¸?µ",
			"index-no-fill": "???µ ?·?°?¿?¾?»?½Ñ?Ñ‚ÑŒ",
			"index-waiting-for-leader": "?ž?¶?¸?´?°?½?¸?µ ?»?¸?´?µÑ€?°, Ñ‡Ñ‚?¾?±Ñ‹ ?½?°Ñ‡?°Ñ‚ÑŒ ?¸?³Ñ€Ñƒ",
			"index-play": "?˜?³Ñ€?°Ñ‚ÑŒ",
			"index-customize-loadout": "???°Ñ?Ñ‚Ñ€?°?¸?²?°?µ?¼Ñ‹?µ Ñ??¼?¾Ñ†?¸?¸",
			"index-twitter-follow": "?¡?»?µ?´?¾?²?°Ñ‚ÑŒ ?² Twitter",
			"index-youtube-subscribe": "?Ÿ?¾?´?¿?¸Ñ??°Ñ‚ÑŒÑ?Ñ? ?½?° YouTube",
			"index-facebook-like": "?›?°?¹?º?½ÑƒÑ‚ÑŒ ?² Facebook",
			"index-featured-youtuber": "? ?µ?º?¾?¼?µ?½?´Ñƒ?µ?¼Ñ‹?µ ?®Ñ‚Ñƒ?±?µÑ€Ñ‹",
			"index-streaming-live": "?¡?µ?¹Ñ‡?°Ñ? Ñ?Ñ‚Ñ€?¸?¼Ñ?Ñ‚!",
			"index-settings": "???°Ñ?Ñ‚Ñ€?¾?¹?º?¸",
			"index-high-resolution": "?’Ñ‹Ñ??¾?º?¾?µ Ñ€?°?·Ñ€?µÑˆ?µ?½?¸?µ (?¿Ñ€?¾?²?µÑ€ÑŒÑ‚?µ, Ñ‡Ñ‚?¾?±Ñ‹ Ñƒ?²?µ?»?¸Ñ‡?¸Ñ‚ÑŒ ?º?°Ñ‡?µÑ?Ñ‚?²?¾ ?¸?·?¾?±Ñ€?°?¶?µ?½?¸Ñ?)",
			"index-screen-shake": "??Ñ€?¾?¶?°?½?¸?µ Ñ??ºÑ€?°?½?°",
			"index-master-volume": "?£Ñ€?¾?²?µ?½ÑŒ ?“Ñ€?¾?¼?º?¾Ñ?Ñ‚?¸",
			"index-sfx-volume": " ?“Ñ€?¾?¼?º?¾Ñ?Ñ‚ÑŒ ?­Ñ„Ñ„?µ?ºÑ‚?¾?²",
			"index-music-volume": "?“Ñ€?¾?¼?º?¾Ñ?Ñ‚ÑŒ ?œÑƒ?·Ñ‹?º?¸",
			"index-mobile-announce": "?¢?µ?¿?µÑ€ÑŒ ?´?¾Ñ?Ñ‚Ñƒ?¿?½?¾ ?½?° ?²?°Ñˆ?¸Ñ… Ñ‚?µ?»?µÑ„?¾?½?°Ñ…!",
			"index-mobile-tooltip": "?’Ñ‹ ?¼?¾?¶?µÑ‚?µ ?·?°?¹Ñ‚?¸ ?² surviv.io ?½?° Ñ??²?¾Ñ‘?¼ Ñ‚?µ?»?µÑ„?¾?½?µ, ?¸?³Ñ€?°?¹Ñ‚?µ ?² <span>surviv.io</span> ?² ?»ÑŽ?±?¾?¼ ?¼?µÑ?Ñ‚?µ!",
			"index-version": "?²?µÑ€Ñ??¸Ñ?",
			"index-privacy": "?š?¾?½Ñ„?¸?´?µ?½Ñ†?¸?°?»ÑŒ?½?¾Ñ?Ñ‚ÑŒ",
			"index-attributions": "?°Ñ‚Ñ€?¸?±ÑƒÑ†?¸?¸",
			"index-proxy-sites": "?¿Ñ€?¾?ºÑ??¸ Ñ??°?¹Ñ‚Ñ‹",
			"index-team-is-full": "?š?¾?¼?°?½?´?° ?·?°?¿?¾?»?½?µ?½?°!",
			"index-failed-joining-team": "???µ Ñƒ?´?°?»?¾Ñ?ÑŒ ?¿Ñ€?¸Ñ??¾?µ?´?¸?½?¸Ñ‚ÑŒÑ?Ñ? ?º ?º?¾?¼?°?½?´?µ.",
			"index-failed-creating-team": "???µ Ñƒ?´?°?»?¾Ñ?ÑŒ Ñ??¾?·?´?°Ñ‚ÑŒ ?º?¾?¼?°?½?´Ñƒ.",
			"index-failed-finding-game": "???µ Ñƒ?´?°?»?¾Ñ?ÑŒ ?½?°?¹Ñ‚?¸ ?¸?³Ñ€Ñƒ.",
			"index-failed-joining-game": "???µ Ñƒ?´?°?»?¾Ñ?ÑŒ ?¿Ñ€?¸Ñ??¾?µ?´?¸?½?¸Ñ‚ÑŒÑ?Ñ? ?º ?¸?³Ñ€?µ.",
			"index-lost-connection": "?¡?¾?µ?´?¸?½?µ?½?¸?µ Ñ? ?º?¾?¼?°?½?´?¾?¹ ?¿Ñ€?µÑ€?²?°?»?¾Ñ?ÑŒ.",
			"index-host-closed": "?¡?¾?µ?´?¸?½?µ?½?¸?µ Ñ? Ñ??µÑ€?²?µÑ€?¾?¼ ?·?°?ºÑ€Ñ‹Ñ‚?¾.",
			"index-view-more": "?Ÿ?¾Ñ??¼?¾Ñ‚Ñ€?µÑ‚ÑŒ ?µÑ‰Ñ‘",
			"index-back-to-main": "?’?µÑ€?½ÑƒÑ‚ÑŒÑ?Ñ? ?² ?³?»?°?²?½?¾?µ ?¼?µ?½ÑŽ",
			"index-most-kills": "???°?¸?±?¾?»ÑŒÑˆ?µ?µ ?º?¾?»-?²?¾ Ñƒ?±?¸?¹Ñ?Ñ‚?²",
			"index-total-kills": "?’Ñ??µ?³?¾ Ñƒ?±?¸?¹Ñ?Ñ‚?²",
			"index-total-wins": "?’Ñ??µ?³?¾ ?¿?¾?±?µ?´",
			"index-top-5-percent": "?ŸÑ€?¾Ñ†?µ?½Ñ‚ ?¢?¾?¿ 5",
			"index-kill-death-ratio": "?¡?¾?¾Ñ‚?½?¾Ñˆ?µ?½?¸?µ Ñƒ?±?¸?¹Ñ?Ñ‚?²?¾-Ñ??¼?µÑ€Ñ‚ÑŒ",
			"index-for": "?—?°",
			"index-today": "?¡?µ?³?¾?´?½Ñ?",
			"index-this-week": "?­Ñ‚Ñƒ ?½?µ?´?µ?»ÑŽ",
			"index-all-time": "?’Ñ?Ñ‘ ?²Ñ€?µ?¼Ñ?",
			"index-top-100": "TOP 100",
			"index-rank": "? ?°?½?³",
			"index-player": "?˜?³Ñ€?¾?º",
			"index-total-games": "?’Ñ??µ?³?¾ ?¸?³Ñ€",
			"index-controls": "?£?¿Ñ€?°?²?»?µ?½?¸?µ",
			"index-movement": "?Ÿ?µÑ€?µ?¼?µÑ‰?µ?½?¸?µ",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "?¦?µ?»?¸Ñ‚ÑŒÑ?Ñ?",
			"index-aim-ctrl": "?œÑ‹ÑˆÑŒ",
			"index-punch": "?£?´?°Ñ€?¸Ñ‚ÑŒ",
			"index-shoot": "?’Ñ‹Ñ?Ñ‚Ñ€?µ?»?¸Ñ‚ÑŒ",
			"index-shoot-ctrl": "?›?µ?²Ñ‹?¹ ?©?µ?»Ñ‡?¾?º",
			"index-change-weapons": "?¡?¼?µ?½?¸Ñ‚ÑŒ ?žÑ€Ñƒ?¶?¸?µ",
			"index-change-weapons-ctrl": "1-4 ?¸?»?¸ ?š?¾?»?µÑ??¾ ?ŸÑ€?¾?ºÑ€ÑƒÑ‚?º?¸",
			"index-stow-weapons": "?£?±Ñ€?°Ñ‚ÑŒ ?¾Ñ€Ñƒ?¶?¸?µ ?¸?· Ñ€Ñƒ?º",
			"index-stow-weapons-ctrl": "3 ?¸?»?¸ ?•",
			"index-swap-weapons": "?¡?¼?µ?½?° ?½?° ?ŸÑ€?µ?´Ñ‹?´ÑƒÑ‰?µ?µ ?žÑ€Ñƒ?¶?¸?µ",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "?Ÿ?µÑ€?µ?·?°Ñ€Ñ??´?º?°",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "?¡?¼?µ?½?° ?¿Ñ€?¸Ñ†?µ?»?°",
			"index-scope-zoom-ctrl": "?›?µ?²Ñ‹?¹ Ñ‰?µ?»Ñ‡?¾?º ?½?° ?ŸÑ€?¸Ñ†?µ?»",
			"index-pickup": "?Ÿ?¾?´?¾?±Ñ€?°Ñ‚ÑŒ ?´?¾?±Ñ‹Ñ‡Ñƒ",
			"index-loot": "???¾?±Ñ‹Ñ‡Ñƒ",
			"index-revive": "?¾?¶?¸?²?»?µ?½?¸?µ",
			"index-pickup-ctrl": "F",
			"index-use-medical": "?œ?µ?´?¸Ñ†?¸?½Ñ??º?¸?¹ ?ŸÑ€?µ?´?¼?µÑ‚ change on ?œ?µ?´?¸?º?°?¼?µ?½Ñ‚",
			"index-use-medical-ctrl": "?›?µ?²Ñ‹?¹ ?©?µ?»Ñ‡?¾?º ?½?° ?ŸÑ€?µ?´?¼?µÑ‚ ?¸?»?¸ Ñ†?¸Ñ„Ñ€Ñ‹ ?¾Ñ‚ 0-7",
			"index-drop-item": "?’Ñ‹?º?¸?½ÑƒÑ‚ÑŒ ?¿Ñ€?µ?´?¼?µÑ‚",
			"index-drop-item-ctrl": "?ŸÑ€?°?²Ñ‹?¹ ?©?µ?»Ñ‡?¾?º ?½?° ?ŸÑ€?µ?´?¼?µÑ‚",
			"index-cancel-action": "?žÑ‚?¼?µ?½?¸Ñ‚ÑŒ ?´?µ?¹Ñ?Ñ‚?²?¸?µ",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "?Ÿ?¾Ñ??¼?¾Ñ‚Ñ€?µÑ‚ÑŒ ?š?°Ñ€Ñ‚Ñƒ",
			"index-view-map-ctrl": "M ?¸?»?¸ G",
			"index-toggle-minimap": "?Ÿ?µÑ€?µ?º?»ÑŽÑ‡?¸Ñ‚ÑŒ Ñ€?µ?¶?¸?¼ ?¿Ñ€?¾Ñ??¼?¾Ñ‚Ñ€?°",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "?˜Ñ??¿?¾?»ÑŒ?·?¾?²?°?½?¸?µ ?º?¾?¼?°?½?´",
			"index-use-ping-ctrl": "?£?´?µÑ€?¶?¸?²?°Ñ? C ?·?°?¶?°Ñ‚ÑŒ ?ŸÑ€?°?²ÑƒÑŽ ?º?½?¾?¿?ºÑƒ ?¼Ñ‹Ñˆ?¸ ?¸ ?²?¾?´?¸Ñ‚ÑŒ ?¼Ñ‹Ñˆ?º?¾?¹, ?·?°Ñ‚?µ?¼ ?²Ñ‹?±Ñ€?°?² ?º?¾?¼?°?½?´Ñƒ ?¾Ñ‚?¿ÑƒÑ?Ñ‚?¸Ñ‚ÑŒ",
			"index-use-emote": "?˜Ñ??¿?¾?»ÑŒ?·?¾?²?°?½?¸?µ ?­?¼?¾?´?·?¸",
			"index-use-emote-ctrl": "?—?°?¶?°Ñ‚ÑŒ ?ŸÑ€?°?²ÑƒÑŽ ?º?½?¾?¿?ºÑƒ ?¼Ñ‹Ñˆ?¸ ?¸ ?²?¾?´?¸Ñ‚ÑŒ ?¼Ñ‹Ñˆ?º?¾?¹, ?·?°Ñ‚?µ?¼ ?¾Ñ‚?¿ÑƒÑ?Ñ‚?¸Ñ‚ÑŒ ?ŸÑ€?°?²ÑƒÑŽ ?º?½?¾?¿?ºÑƒ ?¼Ñ‹Ñˆ?¸",
			"index-tips-1-desc": "?¦?µ?»ÑŒ surviv.io - ?¾Ñ?Ñ‚?°Ñ‚ÑŒÑ?Ñ? ?¿?¾Ñ??»?µ?´?½?¸?¼ ?²Ñ‹?¶?¸?²Ñˆ?¸?¼. ?’ ?¾?´?½?¾?¼ Ñ€?°Ñƒ?½?´?µ Ñƒ ?²?°Ñ? Ñ‚?¾?»ÑŒ?º?¾ ?¾?´?½?° ?¶?¸?·?½ÑŒ ?¸ ?½?µÑ‚ ?²?¾?·?¼?¾?¶?½?¾Ñ?Ñ‚?¸ ?²?¾?·Ñ€?¾?´?¸Ñ‚ÑŒÑ?Ñ?.",
			"index-tips-2": "PUBG ?² 2D",
			"index-tips-2-desc": "?•Ñ??»?¸ ?²Ñ‹ ?¸?³Ñ€?°?»?¸ ?² ?´Ñ€Ñƒ?³?¸?µ ?¸?³Ñ€Ñ‹ ?¶?°?½Ñ€?° ?š?¾Ñ€?¾?»?µ?²Ñ??º?¾?¹ ?‘?¸Ñ‚?²Ñ‹ (Ñ‚?°?º?¸?µ ?º?°?º PUBG, Fortnite ?¸?»?¸ H1Z1), Ñ‚?¾ ?²Ñ‹ Ñƒ?¶?µ ?·?½?°?µÑ‚?µ ?¿Ñ€?°?²?¸?»?°. ?Ÿ?¾ Ñ?ÑƒÑ‚?¸, surviv.io - Ñ?Ñ‚?¾ ?´?²Ñƒ?¼?µÑ€?½Ñ‹?¹ PUBG (Ñ‚?¾?»ÑŒ?º?¾ ?¼?µ?½ÑŒÑˆ?µ ?»?°?³?°?µÑ‚).",
			"index-tips-3": "?£?±?¸?²?°?¹ ?¸ ?´?¾?±Ñ‹?²?°?¹",
			"index-tips-3-desc": "?’Ñ‹ ?½?°Ñ‡?½?µÑ‚?µ ?¸?³Ñ€Ñƒ ?±?µ?· ?º?°?º?¸Ñ…-?»?¸?±?¾ ?¿Ñ€?µ?´?¼?µÑ‚?¾?² ?¸?»?¸ ?¾Ñ€Ñƒ?¶?¸Ñ?, Ñƒ ?²?°Ñ? ?µÑ?Ñ‚ÑŒ Ñ‚?¾?»ÑŒ?º?¾ ?¿Ñ€?¾Ñ?Ñ‚?¾?¹ Ñ€ÑŽ?º?·?°?º. ?Ÿ?µÑ€?µ?´?²?¸?³?°?¹Ñ‚?µÑ?ÑŒ ?¿?¾ ?º?°Ñ€Ñ‚?µ, Ñ‡Ñ‚?¾?±Ñ‹ ?½?°?¹Ñ‚?¸ ?¿?¾?»?µ?·?½Ñ‹?µ ?²?µÑ‰?¸: ?¾Ñ€Ñƒ?¶?¸?µ, ?±?¾?µ?¿Ñ€?¸?¿?°Ñ?Ñ‹, ?¿Ñ€?¸Ñ†?µ?»Ñ‹ ?¸ ?¼?µ?´?¸?º?°?¼?µ?½Ñ‚Ñ‹. ?£?±?¸?²?°?¹Ñ‚?µ ?´Ñ€Ñƒ?³?¸Ñ… ?¸?³Ñ€?¾?º?¾?² ?¸ ?·?°?±?¸Ñ€?°?¹Ñ‚?µ Ñ??µ?±?µ ?¸Ñ… ?²?µÑ‰?¸!",
			"index-tips-4": "?šÑ€?°Ñ??½Ñ‹?¹ - ?¾?¿?°Ñ??½Ñ‹?¹!",
			"index-tips-4-desc": "??Ñ€Ñƒ?³?¸?µ ?¸?³Ñ€?¾?º?¸ - Ñ?Ñ‚?¾ ?½?µ ?µ?´?¸?½Ñ?Ñ‚?²?µ?½?½?¾?µ, Ñ‡Ñ‚?¾ ?¼?¾?¶?µÑ‚ ?²?°Ñ? Ñ€?°?½?¸Ñ‚ÑŒ. ?Ÿ?¾ Ñ…?¾?´Ñƒ ?¸?³Ñ€Ñ‹ ?šÑ€?°Ñ??½?°Ñ? ?—?¾?½?° ?±Ñƒ?´?µÑ‚ ?½?°?´?²?¸?³?°Ñ‚ÑŒÑ?Ñ? Ñ? ?ºÑ€?°Ñ‘?² ?º?°Ñ€Ñ‚Ñ‹ ?¸ ?½?°?½?¾Ñ??¸Ñ‚ÑŒ ?²Ñ?Ñ‘ ?±?¾?»ÑŒÑˆ?µ ÑƒÑ€?¾?½?°, ?µÑ??»?¸ ?²Ñ‹ ?¾?º?°?¶?µÑ‚?µÑ?ÑŒ ?² ?½?µ?¹. ?¢?°?º Ñ‡Ñ‚?¾ ?¿?¾Ñ??¼?°Ñ‚Ñ€?¸?²?°?¹Ñ‚?µ ?½?° ?º?°Ñ€Ñ‚Ñƒ ?¸ ?±Ñƒ?´ÑŒÑ‚?µ ?¾Ñ?Ñ‚?¾Ñ€?¾?¶?½Ñ‹!",
			"game-alive": "?’ ?¶?¸?²Ñ‹Ñ…",
			"game-reloading": "?Ÿ?µÑ€?µ?·?°Ñ€Ñ??´?º?°",
			"game-using": "?˜Ñ??¿?¾?»ÑŒ?·?¾?²?°?½?¸?µ",
			"game-reviving": "?’?¾?·Ñ€?¾?¶?´?µ?½?¸?µ",
			"game-revive-teammate": "?’?¾?·Ñ€?¾?´?¸Ñ‚ÑŒ ?¡?¾ÑŽ?·?½?¸?º?°",
			"game-equip": "?’?·Ñ?Ñ‚ÑŒ",
			"game-cancel": "?žÑ‚?¼?µ?½?°",
			"game-open-door": "?žÑ‚?ºÑ€Ñ‹Ñ‚ÑŒ ?´?²?µÑ€ÑŒ",
			"game-close-door": "?—?°?ºÑ€Ñ‹Ñ‚ÑŒ ?´?²?µÑ€ÑŒ",
			"game-You": "?’Ñ‹",
			"game-you": "?²Ñ‹",
			"game-themselves": "Ñ??µ?±Ñ?",
			"game-yourself": "Ñ??µ?±Ñ?",
			"game-you-died": "Ñƒ?¼?µÑ€?»?¸",
			"game-player-died": "?£?¼?µÑ€",
			"game-with": "Ñ? ?¿?¾?¼?¾Ñ‰ÑŒÑŽ",
			"game-knocked-out": "???¾?º?°ÑƒÑ‚?¸Ñ€?¾?²?°?»",
			"game-killed": "Ñƒ?±?¸?»?¸",
			"game-finally-killed": "?½?°?º?¾?½?µÑ† Ñƒ?±?¸?»?¸",
			"game-finally-bled-out": "?½?°?º?¾?½?µÑ† Ñƒ?¼?µÑ€",
			"game-died-outside": "Ñƒ?¼?µÑ€ ?·?° ?¿Ñ€?µ?´?µ?»?°?¼?¸ ?±?µ?·?¾?¿?°Ñ??½?¾?¹ ?·?¾?½Ñ‹",
			"game-the-red-zone": "?šÑ€?°Ñ??½?°Ñ? ?·?¾?½?°",
			"game-waiting-for-players": "?ž?¶?¸?´?°?½?¸?µ ?¸?³Ñ€?¾?º?¾?²",
			"game-spectating": "???°?±?»ÑŽ?´?µ?½?¸?µ ?·?°",
			"game-red-zone-advances": "?šÑ€?°Ñ??½?°Ñ? ?·?¾?½?° ?½?°Ñ?Ñ‚Ñƒ?¿?¸Ñ‚ Ñ‡?µÑ€?µ?·",
			"game-red-zone-advancing": "?šÑ€?°Ñ??½?°Ñ? ?·?¾?½?° ?½?°Ñ?Ñ‚Ñƒ?¿?°?µÑ‚, ?´?¾?±?µÑ€?¸Ñ‚?µÑ?ÑŒ ?´?¾ ?±?µ?·?¾?¿?°Ñ??½?¾?¹ ?·?¾?½Ñ‹!",
			"game-seconds": "Ñ??µ?ºÑƒ?½?´Ñ‹",
			"game-minutes": "?¼?¸?½ÑƒÑ‚Ñ‹",
			"game-minute": "?¼?¸?½ÑƒÑ‚?°",
			"game-m": "?¼",
			"game-s": "Ñ?",
			"game-not-enough-space": "???µ?´?¾Ñ?Ñ‚?°Ñ‚?¾Ñ‡?½?¾ ?¼?µÑ?Ñ‚?°!",
			"game-item-already-owned": "?­Ñ‚?¾Ñ‚ ?¿Ñ€?µ?´?¼?µÑ‚ Ñƒ?¶?µ ?µÑ?Ñ‚ÑŒ!",
			"game-item-already-equipped": "?­Ñ‚?¾Ñ‚ ?¿Ñ€?µ?´?¼?µÑ‚ Ñƒ?¶?µ Ñ??º?¸?¿?¸Ñ€?¾?²?°?½!",
			"game-better-item-equipped": "?ŸÑ€?µ?´?¼?µÑ‚ ?¿?¾?»ÑƒÑ‡Ñˆ?µ Ñƒ?¶?µ ?µÑ?Ñ‚ÑŒ!",
			"game-play-new-game": "???°Ñ‡?°Ñ‚ÑŒ ???¾?²ÑƒÑŽ ?˜?³Ñ€Ñƒ",
			"game-spectate": "???°?±?»ÑŽ?´?°Ñ‚ÑŒ",
			"game-full-screen": "?Ÿ?¾?»?½Ñ‹?¹ Ñ??ºÑ€?°?½",
			"game-sound": "?—?²Ñƒ?º",
			"game-quit-game": "?’Ñ‹?¹Ñ‚?¸ ?¸?· ?˜?³Ñ€Ñ‹",
			"game-return-to-game": "?’?µÑ€?½ÑƒÑ‚ÑŒÑ?Ñ? ?² ?˜?³Ñ€Ñƒ",
			"game-hide-match-stats": "?¡?ºÑ€Ñ‹Ñ‚ÑŒ ?¡Ñ‚?°Ñ‚?¸Ñ?Ñ‚?¸?ºÑƒ ?œ?°Ñ‚Ñ‡?°",
			"game-view-match-stats": "?Ÿ?¾Ñ??¼?¾Ñ‚Ñ€?µÑ‚ÑŒ ?¡Ñ‚?°Ñ‚?¸Ñ?Ñ‚?¸?ºÑƒ ?œ?°Ñ‚Ñ‡?°",
			"game-previous-teammate": "?ŸÑ€?µ?´Ñ‹?´ÑƒÑ‰?¸?¹ ???°?¿?°Ñ€?½?¸?º",
			"game-next-teammate": "?¡?»?µ?´ÑƒÑŽÑ‰?¸?¹ ???°?¿?°Ñ€?½?¸?º",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "?Ÿ?¾?º?¸?½ÑƒÑ‚ÑŒ ?˜?³Ñ€Ñƒ",
			"game-your-results": "?¢?²?¾?¸ ? ?µ?·Ñƒ?»ÑŒÑ‚?°Ñ‚Ñ‹",
			"game-chicken": "?Ÿ?¾?±?µ?´?°, ?¿?¾?±?µ?´?° ?¿?¾Ñ??»?µ ?¾?±?µ?´?°!",
			"game-won-the-game": "?²Ñ‹?¸?³Ñ€?°?» ?¸?³Ñ€Ñƒ.",
			"game-team-eliminated": "?’?°Ñˆ?° ?º?¾?¼?°?½?´?° ?¿?¾Ñ‚?µÑ€?¿?µ?»?° ?¿?¾Ñ€?°?¶?µ?½?¸?µ.",
			"game-rank": "? ?°?½?³",
			"game-team-rank": "? ?°?½?³ ?º?¾?¼?°?½?´Ñ‹",
			"game-team-kills": "?š?¾?¼?°?½?´?½Ñ‹Ñ… Ñƒ?±?¸?¹Ñ?Ñ‚?²",
			"game-kill": "?£?±?¸?¹Ñ?Ñ‚?²?¾",
			"game-kills": "?£?±?¸?¹Ñ?Ñ‚?²?°",
			"game-damage-dealt": "???°?½?µÑ?Ñ‘?½?½Ñ‹?¹ ?£Ñ€?¾?½",
			"game-damage-taken": "?Ÿ?¾?»ÑƒÑ‡?µ?½?½Ñ‹?¹ ?£Ñ€?¾?½",
			"game-survived": "?’Ñ‹?¶?¸?»",
			"game-backpack00": "?Ÿ?°Ñ‚Ñ€?¾?½Ñ‚?°Ñˆ",
			"game-backpack01": "?œ?°?»?µ?½ÑŒ?º?¸?¹ ? ÑŽ?º?·?°?º",
			"game-backpack02": "?ž?±Ñ‹Ñ‡?½Ñ‹?¹ ? ÑŽ?º?·?°?º",
			"game-backpack03": "?’?¾?µ?½?½Ñ‹?¹ ? ÑŽ?º?·?°?º",
			"game-bandage": "?‘?¸?½Ñ‚",
			"game-bandage-tooltip": "?›?µ?²Ñ‹?¹ ?©?µ?»Ñ‡?¾?º, Ñ‡Ñ‚?¾?±Ñ‹ ?²?¾Ñ?Ñ?Ñ‚?°?½?¾?²?¸Ñ‚ÑŒ 15 ?·?´?¾Ñ€?¾?²ÑŒÑ?.",
			"game-healing-tooltip": "???µ ?²?¾Ñ?Ñ‚?°?½?°?²?»?¸?²?°?µÑ‚ ?±?¾?»ÑŒÑˆ?µ 75 ?·?´?¾Ñ€?¾?²ÑŒÑ?.",
			"game-healthkit": "???¿Ñ‚?µÑ‡?º?°",
			"game-healthkit-tooltip": "?›?µ?²Ñ‹?¹ ?©?µ?»Ñ‡?¾?º, Ñ‡Ñ‚?¾?±Ñ‹ ?²?¾Ñ?Ñ?Ñ‚?°?½?¾?²?¸Ñ‚ÑŒ 100 ?·?´?¾Ñ€?¾?²ÑŒÑ?.",
			"game-soda": "?¡?¾?´?°",
			"game-soda-tooltip": "?›?µ?²Ñ‹?¹ ?©?µ?»Ñ‡?¾?º, Ñ‡Ñ‚?¾?±Ñ‹ Ñƒ?²?µ?»?¸Ñ‡?¸Ñ‚ÑŒ ?°?´Ñ€?µ?½?°?»?¸?½ ?½?° 25.",
			"game-adrenaline-tooltip": "???´Ñ€?µ?½?°?»?¸?½ Ñ??¾ ?²Ñ€?µ?¼?µ?½?µ?¼ ?²?¾Ñ?Ñ?Ñ‚?°?½?°?²?»?¸?²?°?µÑ‚ ?·?´?¾Ñ€?¾?²ÑŒ?µ.",
			"game-painkiller": "?¢?°?±?»?µÑ‚?º?¸",
			"game-painkiller-tooltip": "?›?µ?²Ñ‹?¹ ?©?µ?»Ñ‡?¾?º, Ñ‡Ñ‚?¾?±Ñ‹ Ñƒ?²?µ?»?¸Ñ‡?¸Ñ‚ÑŒ ?°?´Ñ€?µ?½?°?»?¸?½ ?½?° 50.",
			"game-9mm": "9?¼?¼",
			"game-9mm-tooltip": "?Ÿ?°Ñ‚Ñ€?¾?½Ñ‹ ?´?»Ñ? M9, Glock, MP5, MAC-10, UMP9 ?¸ Vector.",
			"game-12gauge": "12 ?º?°?»?¸?±Ñ€",
			"game-12gauge-tooltip": "?Ÿ?°Ñ‚Ñ€?¾?½Ñ‹ ?´?»Ñ? M870, ?¡?°?¹?³?°-12 ?¸ MP220.",
			"game-762mm": "7.62?¼?¼",
			"game-762mm-tooltip": "?Ÿ?°Ñ‚Ñ€?¾?½Ñ‹ ?´?»Ñ? AK-47, SCAR-H, M39, ?’?¸?½Ñ‚?¾?²?º?° ?œ?¾Ñ??¸?½?°, OT-38 ?¸ DP-28.",
			"game-556mm": "5.56?¼?¼",
			"game-556mm-tooltip": "?Ÿ?°Ñ‚Ñ€?¾?½Ñ‹ ?´?»Ñ? FAMAS, HK416, Mk 12 ?¸ M249.",
			"game-chest01": "?–?¸?»?µÑ‚ 1-?¾?³?¾ ÑƒÑ€?¾?²?½Ñ?",
			"game-chest02": "?–?¸?»?µÑ‚ 2-?¾?³?¾ ÑƒÑ€?¾?²?½Ñ?",
			"game-chest03": "?–?¸?»?µÑ‚ 3-?¾?³?¾ ÑƒÑ€?¾?²?½Ñ?",
			"game-helmet01": "?¨?»?µ?¼ 1-?¾?³?¾ ÑƒÑ€?¾?²?½Ñ?",
			"game-helmet02": "?¨?»?µ?¼ 2-?¾?³?¾ ÑƒÑ€?¾?²?½Ñ?",
			"game-helmet03": "?¨?»?µ?¼ 3-?¾?³?¾ ÑƒÑ€?¾?²?½Ñ?",
			"game-1xscope": "1x ?ŸÑ€?¸Ñ†?µ?»",
			"game-2xscope": "2x ?ŸÑ€?¸Ñ†?µ?»",
			"game-4xscope": "4x ?ŸÑ€?¸Ñ†?µ?»",
			"game-8xscope": "8x ?ŸÑ€?¸Ñ†?µ?»",
			"game-15xscope": "15x ?ŸÑ€?¸Ñ†?µ?»",
			"game-level-1": "1-?¹ ?£Ñ€.",
			"game-level-2": "2-?¹ ?£Ñ€.",
			"game-level-3": "3-?¹ ?£Ñ€.",
			"game-outfitBase": "?‘?°?·?¾?²?°Ñ? ?­?º?¸?¿?¸Ñ€?¾?²?º?°",
			"game-outfitRoyalFortune": "?š?¾Ñ€?¾?»?µ?²Ñ??º?°Ñ? Ñƒ?´?°Ñ‡?°",
			"game-outfitKeyLime": "?›?°?¹?¼?¾?²Ñ‹?¹ ?¾Ñ‚Ñ‚?µ?½?¾?º",
			"game-outfitCobaltShell": "?š?¾?±?°?»ÑŒÑ‚?¾?²?°Ñ? ?ž?±?¾?»?¾Ñ‡?º?°",
			"game-outfitCarbonFiber": "?£?³?»?µÑ€?¾?´?½?¾?µ ?²?¾?»?¾?º?½?¾",
			"game-outfitDarkGloves": "?ŸÑ€?¾Ñ„?µÑ?Ñ??¸?¾?½?°?»",
			"game-outfitGhillie": "?œ?°Ñ??º?¸Ñ€?¾?²?¾Ñ‡?½Ñ‹?¹ ?º?¾Ñ?Ñ‚ÑŽ?¼",
			"game-outfitCamo": "?›?µÑ??½?¾?¹ ?º?°?¼ÑƒÑ„?»Ñ??¶",
			"game-outfitRed": "?œ?¸Ñˆ?µ?½ÑŒ",
			"game-outfitWhite": "??Ñ€?ºÑ‚?¸Ñ‡?µÑ??º?¸?¹ ?œÑ?Ñ‚?¸Ñ‚?µ?»ÑŒ",
			"game-outfitWoodland": "?‘?¾?µ?²?¾?¹ ?º?°?¼ÑƒÑ„?»Ñ??¶",
			"game-outfitJester": "?¨ÑƒÑ‚?¾?²Ñ??º?¾?¹ ???°Ñ€Ñ??´",
			"game-outfitPrisoner": "???¾?²Ñ‹?¹ ?§Ñ‘Ñ€?½Ñ‹?¹",
			"game-outfitCasanova": "?¡?°Ñ‚?¸?½?¾?²?°Ñ? ?ºÑƒÑ€Ñ‚?º?°",
			"game-outfitKhaki": "?Ÿ?¾?»?¾?¶?¸?²Ñˆ?¸?¹ ???°Ñ‡?°?»?¾",
			"game-fists": "Ñƒ?´?°Ñ€",
			"game-ak47": "AK-47",
			"game-dp28": "???Ÿ-28",
			"game-mosin": "?’?¸?½Ñ‚?¾?²?º?° ?œ?¾Ñ??¸?½?°",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "?¡?°?¹?³?°-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "?ž?¦-38",
			"game-frag": "?žÑ??º?¾?»?¾Ñ‡?½?°Ñ? ?“Ñ€?°?½?°Ñ‚?°",
			"game-hud-frag": "?žÑ??º?¾?»?¾Ñ‡?½?°Ñ?",
			"game-smoke": "??Ñ‹?¼?¾?²?°Ñ? ?“Ñ€?°?½?°Ñ‚?°",
			"game-hud-smoke": "??Ñ‹?¼?¾?²?°Ñ?",
			"game-barrel_01": "?²?·Ñ€Ñ‹?²?¾?¼ ?±?¾Ñ‡?º?¸",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	"9MzZ": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e) {
			try {
				return e.createGain().disconnect(e.destination), !1
			} catch (e) {
				return !0
			}
		}
		var n = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			r = window.navigator.userAgent.indexOf("iPod") > -1 || window.navigator.userAgent.indexOf("iPhone") > -1 || window.navigator.userAgent.indexOf("iPad") > -1,
			s = null,
			l = !1,
			c = 128,
			m = function() {
				function e(t) {
					i(this, e), this.ctx = t, this.sound = null, this.id = 0, this.volume = 1, this.volumeOld = this.volume, this.pan = 0, this.panOld = this.pan, this.sourceNode = null, this.gainNode = this.ctx.createGain(), this.pannerNode = this.ctx.createPanner(), this.pannerNode.panningModel = "equalpower", this.gainNode.connect(this.pannerNode), this.destination = null, this.paramEvents = 0, this.stopTime = 0, this.stopping = !1, this.playState = "playFinished"
				}
				return n(e, [{
					key: "setGain",
					value: function(e) {
						this.stopping || (r ? this.gainNode.gain.value = e : (this.gainNode.gain.setTargetAtTime(e, this.ctx.currentTime, .02), ++this.paramEvents))
					}
				}, {
					key: "setPan",
					value: function(e) {
						this.stopping || (this.pannerNode.setPosition(e, 0, -.5), this.paramEvents += 3)
					}
				}, {
					key: "start",
					value: function(e, t, a, i, o, n) {
						this.volume = this.volumeOld = a, this.pan = this.panOld = i, this.destination = e, this.sourceNode = this.ctx.createBufferSource(), this.sourceNode.buffer = t, this.sourceNode.connect(this.gainNode), this.pannerNode.connect(this.destination), this.sourceNode.loop = o, r ? this.gainNode.gain.value = a : (this.gainNode.gain.setValueAtTime(a, this.ctx.currentTime), ++this.paramEvents), this.setPan(i), this.sourceNode.start(this.ctx.currentTime + n), this.stopTime = o ? 1e100 : this.ctx.currentTime + n + t.duration, this.stopping = !1, this.playState = "playSucceeded"
					}
				}, {
					key: "stop",
					value: function() {
						this.stopping || (this.setGain(0), this.stopTime = this.ctx.currentTime + .1, this.stopping = !0, this.playState = "playInterrupted")
					}
				}, {
					key: "disconnect",
					value: function() {
						if (this.sound.instances.splice(this.sound.instances.indexOf(this), 1), this.sound = null, this.sourceNode.stop(0), this.sourceNode.disconnect(this.gainNode), this.pannerNode.disconnect(this.destination), r) try {
							this.sourceNode.buffer = s
						} catch (e) {}
						this.destination = null, this.sourceNode = null, this.playState = "playFinished"
					}
				}, {
					key: "reallocNodes",
					value: function() {
						this.gainNode.disconnect(this.pannerNode), this.gainNode = this.ctx.createGain(), this.pannerNode = this.ctx.createPanner(), this.pannerNode.panningModel = "equalpower", this.gainNode.connect(this.pannerNode), this.paramEvents = 0
					}
				}]), e
			}(),
			d = null,
			p = function() {
				function e(t) {
					i(this, e), this.instance = t, this.id = t.id
				}
				return n(e, [{
					key: "check",
					value: function(e) {
						this.id != this.instance.id && (this.instance = d, this.id = d.id)
					}
				}, {
					key: "stop",
					value: function() {
						this.check(), this.instance.stop()
					}
				}, {
					key: "volume",
					get: function() {
						return this.check(), this.instance.volume
					},
					set: function(e) {
						this.check(!0), this.instance.volume = e
					}
				}, {
					key: "pan",
					get: function() {
						return this.check(), this.instance.pan
					},
					set: function(e) {
						this.check(!0), this.instance.pan = e
					}
				}, {
					key: "playState",
					get: function() {
						return this.check(), this.instance.playState
					}
				}]), e
			}(),
			u = null,
			h = function() {
				function e(t, a, o, n, r) {
					if (i(this, e), this.ctx = t, this.inNode = a, this.outNode = o, this.name = n, this.volume = void 0 != r.volume ? r.volume : 1, this.echoVolume = r.echoVolume || 0, this.echoDelay = r.echoDelay || 0, this.echoLowPass = r.echoLowPass || 3e3, this.stereoSpread = r.stereoSpread || 0, !l) {
						var s = this.ctx.createGain();
						this.inNode.connect(s), this.inNode = s
					}
					this.gainNode = null, this.convolverNode = null, this.echoGainNode = null, this.echoLowPassNode = null, this.echoDelayNode = null, this.stereoDelayNode = null, this.mergerNode = null, this.convolverNode = this.ctx.createConvolver(), this.echoVolume && (this.echoLowPassNode = this.ctx.createBiquadFilter(), this.echoLowPassNode.type = "lowpass", this.echoLowPassNode.frequency.setValueAtTime(this.echoLowPass, 0), this.echoLowPassNode.Q.setValueAtTime(-3.0102999566398125, 0), this.echoDelayNode = this.ctx.createDelay(this.echoDelay || .01), this.echoDelayNode.delayTime.setValueAtTime(this.echoDelay, 0)), this.stereoSpread && (this.stereoDelayNode = this.ctx.createDelay(this.stereoSpread), this.stereoDelayNode.delayTime.setValueAtTime(this.stereoSpread, 0), this.mergerNode = this.ctx.createChannelMerger(2)), this.targetLevel = 0, this.gain = 0, this.drainEndTime = 0, this.active = !1
				}
				return n(e, [{
					key: "isConnected",
					value: function() {
						return null != this.gainNode
					}
				}, {
					key: "connect",
					value: function() {
						if (this.gainNode = this.ctx.createGain(), this.gainNode.channelCount = 1, this.gainNode.channelCountMode = "explicit", this.gainNode.gain.setValueAtTime(0, 0), this.echoVolume && (this.echoGainNode = this.ctx.createGain(), this.echoGainNode.channelCount = 1, this.echoGainNode.channelCountMode = "explicit", this.echoGainNode.gain.setValueAtTime(this.echoVolume, 0)), this.inNode.connect(this.gainNode), this.gainNode.connect(this.convolverNode), this.echoVolume && (this.convolverNode.connect(this.echoGainNode), this.echoGainNode.connect(this.echoLowPassNode), this.echoLowPassNode.connect(this.echoDelayNode), this.echoDelayNode.connect(this.convolverNode)), this.stereoSpread) {
							var e = this.convolverNode.buffer;
							e && 1 != e.numberOfChannels && console.error("stereoSpread can only be applied to mono IRs"), this.convolverNode.connect(this.stereoDelayNode), this.convolverNode.connect(this.mergerNode, 0, 0), this.stereoDelayNode.connect(this.mergerNode, 0, 1), this.mergerNode.connect(this.outNode)
						} else this.convolverNode.connect(this.outNode)
					}
				}, {
					key: "disconnect",
					value: function() {
						this.inNode.disconnect(this.gainNode), this.gainNode.disconnect(this.convolverNode), this.echoVolume && (this.convolverNode.disconnect(this.echoGainNode), this.echoGainNode.disconnect(this.echoLowPassNode), this.echoLowPassNode.disconnect(this.echoDelayNode), this.echoDelayNode.disconnect(this.convolverNode)), this.stereoSpread ? (this.convolverNode.disconnect(this.stereoDelayNode), this.convolverNode.disconnect(this.mergerNode, 0, 0), this.stereoDelayNode.disconnect(this.mergerNode, 0, 1), this.mergerNode.disconnect(this.outNode)) : this.convolverNode.disconnect(this.outNode), this.gainNode = null, this.echoGainNode = null
					}
				}, {
					key: "setGain",
					value: function(e, t, a) {
						if (e *= this.volume, this.gain != e) {
							if (0 == e || this.gainNode || this.connect(), 0 == e) {
								this.echoGainNode && this.echoGainNode.gain.setValueAtTime(0, a);
								var i = this.convolverNode.buffer,
									o = i ? i.duration : 0;
								this.drainEndTime = a + o + this.echoDelay + this.stereoSpread
							}
							0 == this.gain && this.echoGainNode && this.echoGainNode.gain.setValueAtTime(this.echoVolume, t), this.gainNode.gain.setValueAtTime(this.gain, t), this.gainNode.gain.linearRampToValueAtTime(e, a), this.gain = e
						}
					}
				}]), e
			}(),
			g = function() {
				function e() {
					var t = this;
					if (i(this, e), this.ctx = new(window.AudioContext || window.webkitAudioContext), r) {
						var a = this.ctx.createBuffer(1, 1, 44100),
							n = this.ctx.createBufferSource();
						n.buffer = a, n.connect(this.ctx.destination), n.start(), n.disconnect(this.ctx.destination), this.ctx.close(), this.ctx = new(window.AudioContext || window.webkitAudioContext)
					}
					l = o(this.ctx), window.audioEngine = this, this.masterGainNode = this.ctx.createGain(), this.compressorNode = this.ctx.createDynamicsCompressor(), this.masterGainNode.connect(this.compressorNode), this.compressorNode.connect(this.ctx.destination), this.reverbNode = this.ctx.createGain(), this.reverbNode.connect(this.masterGainNode), this.muffleNode = this.ctx.createGain(), this.muffleNode.gain.setValueAtTime(16, 0);
					for (var h = [
							[20, 1.4142, -6],
							[40, 1.4142, -7],
							[80, 1.4142, -10],
							[160, 1.4142, -13],
							[320, 1.4142, -22],
							[640, 1.4142, -18],
							[1280, 1.4142, -25],
							[2560, 1.4142, -10],
							[5120, 1.4142, -30],
							[10240, 1.4142, -25]
						], g = this.muffleNode, f = 0; f < h.length; f++) {
						var y = this.ctx.createBiquadFilter();
						g.connect(y), g = y, y.type = "peaking", y.frequency.setValueAtTime(h[f][0], 0), y.Q.setValueAtTime(h[f][1], 0), y.gain.setValueAtTime(h[f][2], 0)
					}
					g.connect(this.reverbNode), this.files = {}, this.sounds = {}, this.instances = [];
					for (var b = 0; b < c; b++) {
						var x = new m(this.ctx);
						this.instances[b] = x
					}
					if (this.instanceId = 0, this.playingInstances = [], d = new m(this.ctx), u = new p(d), this.reverbs = {}, this.activeReverbs = [], this.reverbFadeEndTime = 0, this.volume = 1, this.volumeOld = this.volume, this.muted = !1, this.mutedOld = this.muted, "suspended" == this.ctx.state) {
						var v = function e() {
							t.ctx.resume();
							var a = t.ctx.createBufferSource();
							a.buffer = t.ctx.createBuffer(1, 1, 22050), a.connect(t.ctx.destination), a.start(), setTimeout(function() {
								"running" == t.ctx.state && (document.body.removeEventListener("mousedown", e, !1), document.body.removeEventListener("touchend", e, !1))
							}, 0)
						};
						document.body.addEventListener("mousedown", v, !1), document.body.addEventListener("touchend", v, !1)
					}
					r && (s = this.ctx.createBuffer(1, 1, 22050)), this.onfileload = function() {}, this.PLAY_INITED = "playInited", this.PLAY_SUCCEEDED = "playSucceeded", this.PLAY_INTERRUPTED = "playInterrupted", this.PLAY_FINISHED = "playFinished", this.PLAY_FAILED = "playFailed", this.INTERRUPT_LATE = "late", this.defaultInterruptBehavior = this.INTERRUPT_LATE
				}
				return n(e, [{
					key: "initializeDefaultPlugins",
					value: function() {}
				}, {
					key: "loadFile",
					value: function(e, t) {
						var a = this;
						if (void 0 != this.files[e]) return t(e), this.files[e];
						this.files[e] = {
							buffer: null
						};
						var i = new XMLHttpRequest;
						i.open("GET", e), i.responseType = "arraybuffer";
						var o = function(t) {
							console.error("Failed loading sound file: " + e)
						};
						return i.addEventListener("load", function(n) {
							var r = i.response;
							if (!r) return void o();
							a.ctx.decodeAudioData(r, function(i) {
								a.files[e].buffer = i, t(e)
							}, function() {
								console.error("Failed decoding sound: " + e)
							})
						}), i.addEventListener("abort", o), i.addEventListener("error", o), i.addEventListener("timeout", o), i.send(), this.files[e]
					}
				}, {
					key: "registerSound",
					value: function(e, t, a) {
						var i = this.loadFile(e, this.onfileload.bind(this)),
							o = {
								file: i,
								canCoalesce: !!a.canCoalesce,
								maxInstances: a.channels || 16,
								instances: []
							};
						this.sounds[t] = o
					}
				}, {
					key: "play",
					value: function(e, t) {
						var a = this.sounds[e];
						if (!a) return console.error("No sound named: " + e), u;
						var i = t.filter || "none",
							o = void 0 != t.volume ? t.volume : 1;
						o = this.muted ? 0 : o;
						var n = t.pan || 0,
							r = !!t.loop,
							s = t.delay ? .001 * t.delay : 0;
						if (!a.file.buffer) return u;
						if (this.muted && !t.loop) return u;
						if ("none" !== i && "reverb" !== i && "muffled" !== i) return console.error("Invalid filter: " + i + ". Only valid filters are 'none', 'reverb' and 'muffled'."), u;
						if (a.canCoalesce)
							for (var l = this.ctx.currentTime + a.file.buffer.duration, m = 0; m < a.instances.length; m++) {
								var d = a.instances[m];
								if (!(Math.abs(l - d.stopTime) > .03)) {
									var h = d.volume * d.volume + o * o,
										g = d.volume * d.pan + o * n,
										f = d.volume + o;
									return d.volume = Math.sqrt(h), d.pan = g / Math.max(.001, f), u
								}
							}
						for (var y = 0; y < c && (++this.instanceId, this.instances[this.instanceId % c].sound); y++);
						var b = this.instances[this.instanceId % c];
						if (b.sound) return console.error("All " + c + " sound instances in use. You are using way too many sounds!"), u;
						b.id = this.instanceId;
						var x = b.paramEvents > 150,
							v = b.paramEvents > 20 && !(this.instanceId % 7);
						for ((x || v) && b.reallocNodes(); a.instances.length >= a.maxInstances;) {
							for (var k = a.instances[0], _ = 1; _ < a.instances.length; _++) k.stopTime > a.instances[_].stopTime && (k = a.instances[_]);
							k.disconnect()
						}
						b.sound = a, a.instances.push(b);
						var w = "none" === i ? this.masterGainNode : "reverb" === i ? this.reverbNode : this.muffleNode;
						return b.start(w, a.file.buffer, o, n, r, s), -1 == this.playingInstances.indexOf(b) && this.playingInstances.push(b), new p(b)
					}
				}, {
					key: "registerReverb",
					value: function(e, t, a) {
						var i = this,
							o = new h(this.ctx, this.reverbNode, this.masterGainNode, t, a);
						this.loadFile(e, function(e) {
							o.convolverNode.buffer = i.files[e].buffer, i.onfileload(e)
						}), this.reverbs[t] = o
					}
				}, {
					key: "setReverbs",
					value: function(e) {
						for (var t = 0; t < this.activeReverbs.length; t++) {
							var a = this.activeReverbs[t];
							e[a.name] || (a.targetLevel = 0)
						}
						for (var i in e)
							if (e[i]) {
								var o = this.reverbs[i];
								o ? (this.reverbs[i].active || (this.activeReverbs.push(o), o.active = !0), o.targetLevel = e[i]) : console.error("No reverb named " + i)
							}
					}
				}, {
					key: "stop",
					value: function() {}
				}, {
					key: "update",
					value: function(e) {
						"suspended" == this.ctx.state && this.ctx.resume();
						var t = this.muted ? 0 : this.volume,
							a = this.mutedOld ? 0 : this.volumeOld;
						this.volumeOld = this.volume, this.mutedOld = this.muted, t != a && this.masterGainNode.gain.setTargetAtTime(t, this.ctx.currentTime, .02);
						for (var i = this.playingInstances.length - 1; i >= 0; i--) {
							var o = this.playingInstances[i];
							o.volumeOld != o.volume && (o.volumeOld = o.volume, o.setGain(o.volume)), o.panOld != o.pan && (o.panOld = o.pan, o.setPan(o.pan)), o.sound && this.ctx.currentTime > o.stopTime && o.disconnect(), o.sound || this.playingInstances.splice(i, 1)
						}
						if (this.ctx.currentTime > this.reverbFadeEndTime) {
							var n = this.ctx.currentTime + .006;
							this.reverbFadeEndTime = n + .025;
							for (var r = 0, s = 0; s < this.activeReverbs.length; s++) {
								r += this.activeReverbs[s].targetLevel
							}
							for (var l = r > 1 ? 1 / r : 1, c = 0; c < this.activeReverbs.length; c++) {
								var m = this.activeReverbs[c],
									d = Math.sqrt(l * m.targetLevel);
								m.setGain(d, n, this.reverbFadeEndTime)
							}
							for (var p = this.activeReverbs.length - 1; p >= 0; p--) {
								var u = this.activeReverbs[p],
									h = this.ctx.currentTime > u.drainEndTime;
								0 == u.gain && h && (u.isConnected() && u.disconnect(), u.active = !1, this.activeReverbs.splice(p, 1))
							}
						}
					}
				}, {
					key: "_setMute",
					value: function(e) {
						this.muted = e
					}
				}, {
					key: "on",
					value: function(e, t, a) {
						if ("fileload" != e) return void console.error('Only "fileload" event supported');
						this.onfileload = t.bind(a)
					}
				}, {
					key: "updatePerformanceTest",
					value: function() {
						var e = this;
						if (this.runningOfflineTest = void 0 != this.runningOfflineTest && this.runningOfflineTest, !this.runningOfflineTest) {
							this.runningOfflineTest = !0;
							this.offlineCtx = new OfflineAudioContext(2, 10 * this.ctx.sampleRate, this.ctx.sampleRate);
							for (var t = this.offlineCtx.createBuffer(2, 10 * this.ctx.sampleRate, this.ctx.sampleRate), a = 0; a < t.numberOfChannels; a++)
								for (var i = t.getChannelData(a), o = 0; o < i.length; o++) i[o] = Math.sin(o / 2333) * Math.sin(o / 5741) * 2 * Math.random() - 1;
							var n = this.offlineCtx.createBufferSource();
							n.buffer = t;
							for (var r = this.offlineCtx.createConvolver(), s = this.offlineCtx.createBuffer(1, 4 * this.ctx.sampleRate, this.ctx.sampleRate), l = 0; l < s.numberOfChannels; l++)
								for (var c = s.getChannelData(l), m = 0; m < c.length; m++) c[m] = 2 * Math.random() - 1;
							r.buffer = s;
							var d = {
								volume: .7,
								echoVolume: .5,
								echoLowPass: 800,
								echoDelay: .25,
								stereoSpread: .004
							};
							if (d.convolverNode = r, d.echoLowPassNode = this.offlineCtx.createBiquadFilter(), d.echoLowPassNode.type = "lowpass", d.echoLowPassNode.frequency.setValueAtTime(d.echoLowPass, 0), d.echoLowPassNode.Q.setValueAtTime(-3.0102999566398125, 0), d.echoDelayNode = this.offlineCtx.createDelay(d.echoDelay || .01), d.echoDelayNode.delayTime.setValueAtTime(d.echoDelay, 0), d.stereoSpread && (d.stereoDelayNode = this.offlineCtx.createDelay(d.stereoSpread), d.stereoDelayNode.delayTime.setValueAtTime(d.stereoSpread, 0), d.mergerNode = this.offlineCtx.createChannelMerger(2)), d.gainNode = this.offlineCtx.createGain(), d.gainNode.channelCount = 1, d.gainNode.channelCountMode = "explicit", d.gainNode.gain.setValueAtTime(1, 0), d.echoGainNode = this.offlineCtx.createGain(), d.echoGainNode.channelCount = 1, d.echoGainNode.channelCountMode = "explicit", d.echoGainNode.gain.setValueAtTime(d.echoVolume, 0), d.outNode = this.offlineCtx.createGain(), d.gainNode.connect(d.convolverNode), d.stereoSpread) {
								var p = d.convolverNode.buffer;
								p && 1 != p.numberOfChannels && console.error("stereoSpread can only be applied to mono IRs"), d.convolverNode.connect(d.stereoDelayNode), d.convolverNode.connect(d.mergerNode, 0, 0), d.stereoDelayNode.connect(d.mergerNode, 0, 1), d.mergerNode.connect(d.outNode)
							} else d.convolverNode.connect(d.outNode);
							this.offlineCtx.createDynamicsCompressor();
							console.log("starting convolver"), n.connect(d.gainNode), d.outNode.connect(this.offlineCtx.destination), n.start(), this.startTime = performance.now(), this.offlineCtx.oncomplete = function(t) {
								var a = performance.now();
								console.log("Offline render time: ", a - e.startTime), e.runningOfflineTest = !1
							}, this.offlineCtx.startRendering()
						}
					}
				}]), e
			}(),
			f = {
				Sound: new g
			};
		e.exports = f
	},
	"9xSA": function(e, t, a) {
		"use strict";
		var i = (a("DlZn"), a("8iex")),
			o = (a("0od3"), a("/2+T")),
			n = {
				Type: {
					Circle: 0,
					Aabb: 1
				},
				createCircle: function(e, t, a) {
					return {
						type: n.Type.Circle,
						pos: o.copy(e),
						rad: t,
						height: void 0 !== a ? a : 0
					}
				},
				createAabb: function(e, t, a) {
					return {
						type: n.Type.Aabb,
						min: o.copy(e),
						max: o.copy(t),
						height: void 0 !== a ? a : 0
					}
				},
				createAabbExtents: function(e, t, a) {
					var i = o.sub(e, t),
						r = o.add(e, t);
					return n.createAabb(i, r, a)
				},
				createBounding: function(e) {
					if (1 == e.length) return n.copy(e[0]);
					for (var t = [], a = 0, o = 0; o < e.length; o++) {
						var r = e[o];
						t.push(n.toAabb(r)), a = Math.max(a, r.height)
					}
					var s = i.boundingAabb(t);
					return n.createAabb(s.min, s.max, a)
				},
				toAabb: function(e) {
					if (e.type == n.Type.Aabb) return n.createAabb(e.min, e.max, e.height);
					var t = i.circleToAabb(e.pos, e.rad);
					return n.createAabb(t.min, t.max, e.height)
				},
				copy: function(e) {
					return e.type == n.Type.Circle ? n.createCircle(e.pos, e.rad, e.height) : n.createAabb(e.min, e.max, e.height)
				},
				transform: function(e, t, a, i) {
					if (e.type == n.Type.Aabb) {
						for (var r = o.mul(o.sub(e.max, e.min), .5), s = o.add(e.min, r), l = [o.create(s.x - r.x, s.y - r.y), o.create(s.x - r.x, s.y + r.y), o.create(s.x + r.x, s.y - r.y), o.create(s.x + r.x, s.y + r.y)], c = o.create(Number.MAX_VALUE, Number.MAX_VALUE), m = o.create(-Number.MAX_VALUE, -Number.MAX_VALUE), d = 0; d < l.length; d++) {
							var p = o.add(o.rotate(o.mul(l[d], i), a), t);
							c.x = Math.min(c.x, p.x), c.y = Math.min(c.y, p.y), m.x = Math.max(m.x, p.x), m.y = Math.max(m.y, p.y)
						}
						return n.createAabb(c, m, e.height)
					}
					return n.createCircle(o.add(o.rotate(o.mul(e.pos, i), a), t), e.rad * i, e.height)
				},
				intersectCircle: function(e, t, a) {
					return e.type == n.Type.Aabb ? i.intersectAabbCircle(e.min, e.max, t, a) : i.intersectCircleCircle(e.pos, e.rad, t, a)
				},
				intersectAabb: function(e, t, a) {
					return e.type == n.Type.Aabb ? i.intersectAabbAabb(e.min, e.max, t, a) : i.intersectAabbCircle(t, a, e.pos, e.rad)
				},
				intersectSegment: function(e, t, a) {
					return e.type == n.Type.Aabb ? i.intersectSegmentAabb(t, a, e.min, e.max) : i.intersectSegmentCircle(t, a, e.pos, e.rad)
				},
				intersect: function(e, t) {
					return t.type == n.Type.Aabb ? n.intersectAabb(e, t.min, t.max) : n.intersectCircle(e, t.pos, t.rad)
				}
			};
		e.exports = n
	},
	Bk7F: function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function o(e) {
			return e % 4 * .5 * Math.PI
		}

		function n(e) {
			var t = E[e];
			if ("structure" == t.type) {
				for (var a = [], i = 0; i < t.layers.length; i++) {
					var r = t.layers[i],
						s = o(r.ori),
						l = A.transform(n(r.type), r.pos, s, 1);
					a.push(A.toAabb(l))
				}
				var c = D.boundingAabb(a);
				return A.createAabb(c.min, c.max)
			}
			if ("building" == t.type) {
				for (var m = [], d = 0; d < t.floor.surfaces.length; d++) m = m.concat(t.floor.surfaces[d].collision);
				m = m.concat(t.ceiling.scopeIn), m = m.concat(t.ceiling.scopeOut);
				for (var p = 0; p < t.mapObjects.length; p++) {
					var u = t.mapObjects[p],
						h = u.type;
					if ("function" == typeof h && (h = h()), "" != h) {
						var g = o(u.ori),
							f = A.transform(n(h), u.pos, g, u.scale);
						m.push(A.toAabb(f))
					}
				}
				var y = D.boundingAabb(m);
				return A.createAabb(y.min, y.max)
			}
			return I(t.collision), t.collision
		}

		function r(e, t, a) {
			return {
				tier: e,
				min: t,
				max: a
			}
		}

		function s(e, t) {
			return {
				name: e,
				count: t
			}
		}

		function l(e) {
			return e && "object" === (void 0 === e ? "undefined" : z(e)) && !Array.isArray(e)
		}

		function c(e) {
			for (var t = arguments.length, a = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
			if (!a.length) return e;
			var n = a.shift();
			if (l(e) && l(n))
				for (var r in n) l(n[r]) ? (e[r] || Object.assign(e, i({}, r, {})), c(e[r], n[r])) : Object.assign(e, i({}, r, n[r]));
			return c.apply(void 0, [e].concat(a))
		}

		function m(e) {
			var t = [];
			for (var a in e) e.hasOwnProperty(a) && t.push({
				type: a,
				weight: e[a]
			});
			I(t.length > 0);
			for (var i = 0, o = 0; o < t.length; o++) i += t[o].weight;
			return function() {
				for (var e = O.random(0, i), a = 0; e > t[a].weight;) e -= t[a].weight, a++;
				return t[a].type
			}
		}

		function d(e, t) {
			return {
				sprite: e,
				scale: .5,
				alpha: 1,
				tint: t || 16777215,
				zIdx: 10
			}
		}

		function p(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .8
				},
				collision: A.createCircle(L.create(0, 0), 1.75),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 20,
				hitParticle: "outhouseChip",
				explodeParticle: "barrelPlank",
				reflectBullets: !1,
				loot: [r("tier_world", 1, 1)],
				map: {
					display: !0,
					color: 6697728,
					scale: 1
				},
				terrain: {
					grass: !0,
					beach: !0
				},
				img: {
					sprite: "img/map/map-barrel-02.svg",
					residue: "img/map/map-barrel-res-02.svg",
					scale: .4,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "barrel_break_02",
					enter: "none"
				}
			}, e || {})
		}

		function u(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .75
				},
				collision: A.createAabbExtents(L.create(0, 0), L.create(3.5, 1)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: ["woodPlank", "book"],
				reflectBullets: !1,
				loot: [r("tier_world", 1, 1)],
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-bookshelf-01.svg",
					residue: "img/map/map-drawers-res.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_prop_bullet",
					punch: "wood_prop_bullet",
					explode: "drawers_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function h(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1.05,
					createMax: 1.2,
					destroy: 1
				},
				collision: A.createCircle(L.create(0, 0), 1.4),
				height: 10,
				collidable: !1,
				destructible: !0,
				health: 100,
				hitParticle: "leaf",
				explodeParticle: "leaf",
				reflectBullets: !1,
				isBush: !0,
				loot: [],
				map: {
					display: !0,
					color: 24320,
					scale: 1.5
				},
				terrain: {
					grass: !0,
					beach: !1
				},
				img: {
					sprite: "img/map/map-bush-01.svg",
					residue: "img/map/map-bush-res-01.svg",
					scale: .5,
					alpha: .4,
					tint: 16777215,
					zIdx: 60
				},
				sound: {
					bullet: "bush_bullet",
					punch: "bush_bullet",
					explode: "bush_break_01",
					enter: "bush_enter_01"
				}
			}, e || {})
		}

		function g(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .9
				},
				collision: A.createAabbExtents(L.create(0, 0), L.create(2.25, 1.6)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [],
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-case-deagle-01.svg",
					residue: "img/map/map-crate-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "crate_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function f(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .75
				},
				collision: A.createAabbExtents(L.create(0, 0), L.create(2.25, 1.6)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 140,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [r("tier_chest", 3, 4)],
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-chest-01.svg",
					residue: "img/map/map-crate-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "crate_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function y(e) {
			var t = [{
					type: "container_wall_top",
					pos: L.create(0, 7.95),
					scale: 1,
					ori: 0
				}, {
					type: "container_wall_side",
					pos: L.create(2.35, 2.1),
					scale: 1,
					ori: 0
				}, {
					type: "container_wall_side",
					pos: L.create(-2.35, 2.1),
					scale: 1,
					ori: 0
				}, {
					type: "loot_tier_2",
					pos: L.create(0, 3.25),
					scale: 1,
					ori: 0
				}, {
					type: m({
						loot_tier_1: 2,
						"": 1
					}),
					pos: L.create(0, .05),
					scale: 1,
					ori: 0
				}],
				a = [{
					type: "container_wall_side_open",
					pos: L.create(2.35, 0),
					scale: 1,
					ori: 0
				}, {
					type: "container_wall_side_open",
					pos: L.create(-2.35, 0),
					scale: 1,
					ori: 0
				}, {
					type: "loot_tier_2",
					pos: L.create(0, -.05),
					scale: 1,
					ori: 0
				}, {
					type: m({
						loot_tier_1: 1,
						"": 1
					}),
					pos: L.create(0, .05),
					scale: 1,
					ori: 0
				}];
			return {
				type: "building",
				map: {
					display: !0,
					color: e.tint,
					scale: 1
				},
				terrain: {
					grass: !0,
					beach: !0
				},
				floor: {
					surfaces: [{
						type: "container",
						collision: [e.open ? A.createAabbExtents(L.create(0, 0), L.create(2.5, 11)) : A.createAabbExtents(L.create(0, 0), L.create(2.5, 8))]
					}],
					imgs: [{
						sprite: e.open ? "img/map/map-building-container-open-floor.svg" : "img/map/map-building-container-floor.svg",
						scale: .5,
						alpha: 1,
						tint: e.tint
					}]
				},
				ceiling: {
					scopeIn: [e.open ? A.createAabbExtents(L.create(0, 0), L.create(2.5, 5.75)) : A.createAabbExtents(L.create(0, 2.25), L.create(2.5, 5.5))],
					scopeOut: [e.open ? A.createAabbExtents(L.create(0, 0), L.create(2.5, 11)) : A.createAabbExtents(L.create(0, -.5), L.create(2.5, 8.75))],
					imgs: [{
						sprite: "img/map/" + e.ceilingSprite,
						scale: .5,
						alpha: 1,
						tint: e.tint
					}]
				},
				mapObjects: e.open ? a : t
			}
		}

		function b(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .5
				},
				collision: A.createAabbExtents(L.create(0, 0), L.create(2.25, 2.25)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [r("tier_world", 1, 1)],
				map: {
					display: !0,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !0,
					beach: !0
				},
				img: {
					sprite: "img/map/map-crate-01.svg",
					residue: "img/map/map-crate-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_crate_bullet",
					punch: "wood_crate_bullet",
					explode: "crate_break_02",
					enter: "none"
				}
			}, e || {})
		}

		function x(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: A.createAabbExtents(L.create(0, .15), L.create(2.5, 1)),
				height: 10,
				collidable: !0,
				destructible: !0,
				health: 20,
				hitParticle: "barrelChip",
				explodeParticle: "depositBoxGreyFrag",
				reflectBullets: !0,
				loot: [r("tier_world", 1, 1)],
				lootSpawnOffset: L.create(0, -.75),
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-deposit-box-01.svg",
					residue: "none",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wall_bullet",
					punch: "metal_punch",
					explode: "deposit_box_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function v(e) {
			var t = {
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: A.createAabbExtents(e.hinge, e.extents),
				height: 10,
				collidable: !0,
				destructible: !0,
				health: 150,
				hitParticle: "whiteChip",
				explodeParticle: "whitePlank",
				reflectBullets: !1,
				door: {
					interactionRad: 1.75,
					canUse: !0,
					openSpeed: 2,
					openOneWay: 0,
					openDelay: 0,
					openOnce: !1,
					autoOpen: !1,
					autoClose: !1,
					autoCloseDelay: 1,
					slideToOpen: !1,
					slideOffset: 3.5,
					spriteAnchor: L.create(.5, 1),
					sound: {
						open: e.soundOpen || "door_open_01",
						close: e.soundClose || "door_close_01",
						change: "",
						error: ""
					}
				},
				loot: [],
				img: {
					sprite: "img/map/map-door-01.svg",
					residue: "none",
					scale: .5,
					alpha: 1,
					tint: 14671839,
					zIdx: 15
				},
				sound: {
					bullet: "wall_wood_bullet",
					punch: "wall_wood_bullet",
					explode: "wall_wood_break_01",
					enter: "none"
				}
			};
			return I(B[e.material]), c(t, B[e.material], e || {})
		}

		function k(e) {
			return c(v({
				material: "concrete",
				hinge: L.create(0, 2),
				extents: L.create(.3, 2),
				door: {
					interactionRad: 3,
					openOneWay: !1,
					openSpeed: 7,
					autoOpen: !0,
					autoClose: !0,
					autoCloseDelay: 1,
					slideToOpen: !0,
					slideOffset: 3.75,
					sound: {
						open: "door_open_03",
						close: "door_close_03",
						error: "door_error_01"
					},
					casingImg: {
						sprite: "img/map/map-door-slot-01.svg",
						pos: L.create(-2, 0),
						scale: .5,
						alpha: 1,
						tint: 1316379,
						zIdx: 60
					}
				},
				img: {
					tint: 5373952
				}
			}), e || {})
		}

		function _(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .75
				},
				collision: A.createAabbExtents(L.create(0, .15), L.create(2.5, 1.25)),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 75,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [r("tier_container", 1, 1)],
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-drawers-01.svg",
					residue: "img/map/map-drawers-res.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wood_prop_bullet",
					punch: "wood_prop_bullet",
					explode: "drawers_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function w(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: A.createAabbExtents(L.create(0, .15), L.create(1.5, .6)),
				height: 10,
				collidable: !0,
				destructible: !0,
				health: 20,
				hitParticle: "barrelChip",
				explodeParticle: "lockerFrag",
				reflectBullets: !0,
				loot: [r("tier_world", 1, 1)],
				lootSpawnOffset: L.create(0, -.5),
				map: {
					display: !1,
					color: 6697728,
					scale: .875
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-locker-01.svg",
					residue: "",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wall_bullet",
					punch: "metal_punch",
					explode: "deposit_box_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function S(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .8
				},
				collision: A.createAabbExtents(L.create(0, 0), L.create(1, 1)),
				height: .5,
				collidable: !0,
				destructible: !0,
				explosion: "explosion_barrel",
				health: 250,
				hitParticle: "barrelChip",
				explodeParticle: "depositBoxGreyFrag",
				reflectBullets: !0,
				loot: [],
				map: {
					display: !1
				},
				terrain: {
					grass: !1,
					beach: !0
				},
				img: {
					sprite: "img/map/map-power-box-01.svg",
					residue: "",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "wall_bullet",
					punch: "metal_punch",
					explode: "deposit_box_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function M(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: .8
				},
				collision: A.createCircle(L.create(0, .25), 1.18),
				height: .5,
				collidable: !0,
				destructible: !0,
				health: 100,
				reflectBullets: !1,
				hitParticle: "whiteChip",
				explodeParticle: "toiletFrag",
				loot: [r("tier_toilet", 2, 3)],
				map: {
					display: !1,
					color: 11776947,
					scale: 1
				},
				img: {
					sprite: "img/map/map-toilet-01.svg",
					residue: "img/map/map-toilet-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "toilet_porc_bullet",
					punch: "toilet_porc_bullet",
					explode: "toilet_break_01",
					enter: "none"
				},
				terrain: {
					grass: !0,
					beach: !1
				}
			}, e || {})
		}

		function T(e) {
			var t = {
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: A.createAabbExtents(L.create(0, 0), L.copy(e.extents)),
				height: 10,
				isWall: !0,
				collidable: !0,
				destructible: !0,
				health: 150,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [],
				map: {
					display: !1
				},
				img: {},
				sound: {
					bullet: "wall_bullet",
					punch: "wall_bullet",
					explode: "barrel_break_01",
					enter: "none"
				}
			};
			return I(B[e.material]), c(t, B[e.material], e || {})
		}

		function P(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: A.createAabbExtents(L.create(0, 0), L.create(.4, 2)),
				height: 10,
				collidable: !0,
				destructible: !0,
				isWindow: !0,
				health: 1,
				hitParticle: "glassChip",
				explodeParticle: "windowFrag",
				reflectBullets: !1,
				loot: [],
				destroyType: "house_window_broken_01",
				img: {
					sprite: "img/map/map-building-house-window-01.svg",
					residue: "none",
					scale: .5,
					alpha: 1,
					tint: 16777215,
					zIdx: 10
				},
				sound: {
					bullet: "glass_bullet",
					punch: "glass_bullet",
					explode: "window_break_01",
					enter: "none"
				}
			}, e || {})
		}

		function C(e) {
			return c({
				type: "obstacle",
				scale: {
					createMin: 1,
					createMax: 1,
					destroy: 1
				},
				collision: A.createAabbExtents(L.create(0, 0), L.create(.4, 2)),
				height: .2,
				collidable: !0,
				destructible: !1,
				health: 100,
				hitParticle: "woodChip",
				explodeParticle: "woodPlank",
				reflectBullets: !1,
				loot: [],
				img: {
					sprite: "img/map/map-building-house-window-res-01.svg",
					scale: .5,
					alpha: 1,
					tint: 4456448,
					zIdx: 10
				},
				sound: {
					bullet: "wall_wood_bullet",
					punch: "wall_wood_bullet",
					explode: "wall_wood_break_01",
					enter: "none"
				}
			}, e || {})
		}
		var z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			},
			I = a("DlZn"),
			D = a("8iex"),
			A = a("9xSA"),
			O = a("Tf6H"),
			L = a("/2+T"),
			B = {
				metal: {
					destructible: !1,
					reflectBullets: !0,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					sound: {
						bullet: "wall_bullet",
						punch: "metal_punch",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				wood: {
					destructible: !0,
					reflectBullets: !1,
					sound: {
						bullet: "wall_wood_bullet",
						punch: "wall_wood_bullet",
						explode: "wall_break_01",
						enter: "none"
					}
				},
				brick: {
					destructible: !1,
					reflectBullets: !1,
					hitParticle: "brickChip",
					sound: {
						bullet: "wall_brick_bullet",
						punch: "wall_brick_bullet",
						explode: "wall_break_01",
						enter: "none"
					}
				},
				concrete: {
					destructible: !1,
					reflectBullets: !1,
					hitParticle: "barrelChip",
					sound: {
						bullet: "concrete_hit",
						punch: "concrete_hit",
						explode: "wall_break_01",
						enter: "none"
					}
				},
				glass: {
					destructible: !0,
					reflectBullets: !1,
					hitParticle: "glassChip",
					explodeParticle: "windowFrag",
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_01",
						enter: "none"
					}
				}
			},
			E = {
				barrel_01: {
					type: "obstacle",
					name: "a barrel",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .6
					},
					collision: A.createCircle(L.create(0, 0), 1.75),
					height: .5,
					collidable: !0,
					destructible: !0,
					explosion: "explosion_barrel",
					health: 150,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !0,
					loot: [],
					map: {
						display: !0,
						color: 6447714,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !0
					},
					img: {
						sprite: "img/map/map-barrel-01.svg",
						scale: .4,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "barrel_bullet",
						punch: "barrel_bullet",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				barrel_02: p({
					health: 60
				}),
				barrel_03: p({
					collision: A.createAabbExtents(L.create(0, 0), L.create(1.25, .5)),
					health: 20,
					img: {
						sprite: "img/map/map-barrel-03.svg",
						residue: "img/map/map-barrel-res-03.svg",
						scale: .45
					}
				}),
				barrel_04: p({
					collision: A.createAabbExtents(L.create(0, 0), L.create(1.25, .5)),
					health: 20,
					loot: [r("tier_soviet", 2, 3)],
					img: {
						sprite: "img/map/map-barrel-04.svg",
						residue: "img/map/map-barrel-res-03.svg",
						scale: .45
					}
				}),
				bookshelf_01: u({
					img: {
						sprite: "img/map/map-bookshelf-01.svg"
					},
					loot: [r("tier_world", 1, 1)]
				}),
				bookshelf_02: u({
					img: {
						sprite: "img/map/map-bookshelf-02.svg"
					},
					loot: [r("tier_soviet", 2, 3)]
				}),
				bush_01: h({}),
				bush_02: h({
					img: {
						residue: "img/map/map-bush-res-02.svg"
					}
				}),
				bush_03: h({
					img: {
						sprite: "img/map/map-bush-03.svg",
						alpha: 1
					}
				}),
				case_01: g({
					loot: [s("deagle", 1)]
				}),
				case_02: g({
					img: {
						sprite: "img/map/map-case-deagle-02.svg"
					},
					loot: [s("deagle", 1), s("deagle", 1)]
				}),
				case_03: g({
					health: 140,
					img: {
						sprite: "img/map/map-case-hatchet-01.svg",
						residue: "img/map/map-crate-res-02.svg"
					},
					loot: [r("tier_hatchet", 1, 1)]
				}),
				chest_01: f({
					loot: [r("tier_chest", 3, 4), s("outfitRoyalFortune", 1)]
				}),
				chest_02: f({
					img: {
						sprite: "img/map/map-chest-02.svg"
					},
					loot: [r("tier_chest", 2, 2)]
				}),
				control_panel_01: S({
					collision: A.createAabbExtents(L.create(0, 0), L.create(2.25, 1.7)),
					button: {
						interactionRad: 1.75,
						useOnce: !0,
						useType: "cell_door_01",
						useDelay: 1.1,
						useDir: L.create(-1, 0),
						useImg: "img/map/map-control-panel-02.svg",
						sound: "cell_control_01"
					},
					img: {
						sprite: "img/map/map-control-panel-01.svg"
					}
				}),
				control_panel_02: S({
					collision: A.createAabbExtents(L.create(0, 0), L.create(2.25, 1.7)),
					health: 175,
					img: {
						sprite: "img/map/map-control-panel-02.svg"
					}
				}),
				control_panel_03: S({
					collision: A.createAabbExtents(L.create(0, 0), L.create(1.25, 1.2)),
					health: 150,
					img: {
						sprite: "img/map/map-control-panel-03.svg"
					}
				}),
				crate_01: b(),
				crate_02: b({
					health: 140,
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-crate-02.svg"
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				crate_03: b({
					health: 100,
					collision: A.createAabbExtents(L.create(0, 0), L.create(1.575, 1.575)),
					loot: [r("tier_throwables", 2, 4)],
					map: {
						color: 5066014,
						scale: .875
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-crate-03.svg",
						scale: .35
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				crate_04: b({
					destructible: !1,
					hitParticle: "greenChip",
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1
					},
					img: {
						sprite: "img/map/map-crate-04.svg"
					},
					sound: {
						bullet: "ammo_crate_bullet",
						punch: "ammo_crate_bullet"
					}
				}),
				crate_05: b({
					collision: A.createAabbExtents(L.create(0, 0), L.create(2, 2)),
					destructible: !1,
					hitParticle: "goldChip",
					loot: [],
					map: {
						display: !1
					},
					img: {
						sprite: "img/map/map-crate-05.svg"
					},
					sound: {
						bullet: "wall_brick_bullet",
						punch: "wall_brick_bullet"
					}
				}),
				crate_06: b({
					collision: A.createAabbExtents(L.create(0, 0), L.create(2.25, 1.1)),
					destructible: !1,
					hitParticle: "greenChip",
					loot: [],
					map: {
						display: !1
					},
					img: {
						sprite: "img/map/map-crate-06.svg"
					},
					sound: {
						bullet: "ammo_crate_bullet",
						punch: "ammo_crate_bullet"
					}
				}),
				crate_07: b({
					health: 140,
					loot: [r("tier_throwables", 2, 4)],
					img: {
						sprite: "img/map/map-crate-07.svg"
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				crate_08: b({
					health: 140,
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-crate-08.svg"
					},
					sound: {
						explode: "crate_break_01"
					}
				}),
				deposit_box_01: x({
					img: {
						sprite: "img/map/map-deposit-box-01.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				deposit_box_02: x({
					explodeParticle: "depositBoxGoldFrag",
					img: {
						sprite: "img/map/map-deposit-box-02.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				drawers_01: _({
					img: {
						sprite: "img/map/map-drawers-01.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				drawers_02: _({
					img: {
						sprite: "img/map/map-drawers-02.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				locker_01: w({
					img: {
						sprite: "img/map/map-locker-01.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				locker_02: w({
					img: {
						sprite: "img/map/map-locker-02.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				locker_03: w({
					img: {
						sprite: "img/map/map-locker-02.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				oven_01: {
					type: "obstacle",
					name: "an oven",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: A.createAabbExtents(L.create(0, .15), L.create(1.7, 1.3)),
					height: .5,
					collidable: !0,
					destructible: !0,
					explosion: "explosion_barrel",
					health: 200,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !0,
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-oven-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "barrel_bullet",
						punch: "barrel_bullet",
						explode: "oven_break_01",
						enter: "none"
					}
				},
				power_box_01: S(),
				refrigerator_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: A.createAabbExtents(L.create(0, .15), L.create(1.7, 1.25)),
					height: .5,
					collidable: !0,
					destructible: !1,
					health: 100,
					hitParticle: "redChip",
					explodeParticle: "woodPlank",
					reflectBullets: !0,
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-refrigerator-01.svg",
						residue: "img/map/map-crate-res-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wall_bullet",
						punch: "metal_punch",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				sandbags_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .5
					},
					collision: A.createAabbExtents(L.create(0, 0), L.create(3.1, 1.4)),
					height: .5,
					collidable: !0,
					destructible: !1,
					health: 150,
					hitParticle: "goldChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !1,
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1,
						color: 16777215,
						scale: 1.75
					},
					img: {
						sprite: "img/map/map-sandbags-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wall_brick_bullet",
						punch: "wall_brick_bullet",
						explode: "crate_break_02",
						enter: "none"
					}
				},
				silo_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: 1
					},
					collision: A.createCircle(L.create(0, 0), 7.75),
					height: 10,
					collidable: !0,
					destructible: !1,
					health: 300,
					hitParticle: "barrelChip",
					explodeParticle: "barrelFrag",
					reflectBullets: !0,
					loot: [],
					map: {
						display: !0,
						color: 4079166,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-silo-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "silo_bullet",
						punch: "silo_bullet",
						explode: "barrel_break_01",
						enter: "none"
					}
				},
				stairs_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: 1
					},
					collision: A.createAabbExtents(L.create(0, 0), L.create(2.5, 2)),
					height: .5,
					collidable: !1,
					destructible: !0,
					health: 100,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-stairs-broken-01.svg",
						residue: "img/map/map-table-res.svg",
						scale: .5,
						alpha: .4,
						tint: 16777215,
						zIdx: 60
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "crate_break_01",
						enter: "none"
					}
				},
				stand_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: A.createAabbExtents(L.create(0, .15), L.create(1.25, 1.25)),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 75,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-stand-01.svg",
						residue: "img/map/map-drawers-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "drawers_break_01",
						enter: "none"
					}
				},
				stone_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1.2,
						destroy: .5
					},
					collision: A.createCircle(L.create(0, 0), 1.6),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 250,
					reflectBullets: !1,
					hitParticle: "rockChip",
					explodeParticle: "rockFrag",
					loot: [],
					map: {
						display: !0,
						color: 11776947,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-stone-01.svg",
						residue: "img/map/map-stone-res.svg",
						scale: .4,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "stone_bullet",
						punch: "stone_bullet",
						explode: "stone_break_01",
						enter: "none"
					}
				},
				table_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: A.createAabbExtents(L.create(0, 0), L.create(2.5, 2)),
					height: .5,
					collidable: !1,
					destructible: !0,
					health: 100,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-table-01.svg",
						residue: "img/map/map-table-res.svg",
						scale: .5,
						alpha: .4,
						tint: 16777215,
						zIdx: 60
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "crate_break_01",
						enter: "none"
					}
				},
				table_02: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: A.createAabbExtents(L.create(0, 0), L.create(4.5, 2.5)),
					height: .5,
					collidable: !1,
					destructible: !0,
					health: 125,
					hitParticle: "woodChip",
					explodeParticle: "woodPlank",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-table-02.svg",
						residue: "img/map/map-table-res.svg",
						scale: .5,
						alpha: .4,
						tint: 16777215,
						zIdx: 60
					},
					sound: {
						bullet: "wood_prop_bullet",
						punch: "wood_prop_bullet",
						explode: "crate_break_01",
						enter: "none"
					}
				},
				toilet_01: M({
					img: {
						sprite: "img/map/map-toilet-01.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				toilet_02: M({
					img: {
						sprite: "img/map/map-toilet-02.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
				}),
				toilet_03: M({
					reflectBullets: !0,
					hitParticle: "barrelChip",
					explodeParticle: "toiletMetalFrag",
					img: {
						sprite: "img/map/map-toilet-03.svg",
						residue: "img/map/map-toilet-res-02.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
					sound: {
						bullet: "toilet_metal_bullet",
						punch: "toilet_metal_bullet",
						explode: "toilet_break_02"
					}
				}),
				toilet_04: M({
					reflectBullets: !0,
					hitParticle: "barrelChip",
					explodeParticle: "toiletMetalFrag",
					img: {
						sprite: "img/map/map-toilet-04.svg",
						residue: "img/map/map-toilet-res-02.svg"
					},
					loot: [r("tier_throwables", 2, 4)],
					sound: {
						bullet: "toilet_metal_bullet",
						punch: "toilet_metal_bullet",
						explode: "toilet_break_02"
					}
				}),
				tree_01: {
					type: "obstacle",
					scale: {
						createMin: .8,
						createMax: 1,
						destroy: .5
					},
					collision: A.createCircle(L.create(0, 0), 1.55),
					aabb: A.createAabbExtents(L.create(0, 0), L.create(5.75, 5.75)),
					height: 10,
					collidable: !0,
					destructible: !0,
					health: 175,
					hitParticle: "woodChip",
					explodeParticle: "woodLog",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !0,
						color: 4083758,
						scale: 2.5
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-tree-03.svg",
						residue: "img/map/map-tree-res.svg",
						scale: .7,
						alpha: .4,
						tint: 16777215,
						zIdx: 200
					},
					sound: {
						bullet: "tree_bullet",
						punch: "tree_bullet",
						explode: "tree_break_01",
						enter: "none"
					}
				},
				tree_02: {
					type: "obstacle",
					scale: {
						createMin: .8,
						createMax: 1,
						destroy: .5
					},
					collision: A.createCircle(L.create(0, 0), 4.4),
					height: 10,
					collidable: !0,
					destructible: !1,
					health: 100,
					hitParticle: "woodChip",
					explodeParticle: "woodLog",
					reflectBullets: !1,
					loot: [],
					map: {
						display: !0,
						color: 4083758,
						scale: 2.25
					},
					img: {
						sprite: "img/map/map-tree-03.svg",
						residue: "img/map/map-tree-res.svg",
						scale: 1,
						alpha: .4,
						tint: 16777215,
						zIdx: 230
					},
					sound: {
						bullet: "tree_bullet",
						punch: "tree_bullet",
						explode: "tree_break_01",
						enter: "none"
					}
				},
				vat_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .9
					},
					collision: A.createCircle(L.create(0, 0), 2),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 250,
					reflectBullets: !1,
					hitParticle: "glassChip",
					explodeParticle: "windowFrag",
					loot: [],
					map: {
						display: !0,
						color: 11776947,
						scale: 1
					},
					terrain: {
						grass: !1,
						beach: !1
					},
					img: {
						sprite: "img/map/map-vat-01.svg",
						residue: "img/map/map-vat-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_01",
						enter: "none"
					}
				},
				vat_02: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .95
					},
					collision: A.createCircle(L.create(0, 0), 3.1),
					height: .5,
					collidable: !0,
					destructible: !1,
					health: 1e3,
					reflectBullets: !1,
					hitParticle: "glassChip",
					explodeParticle: "windowFrag",
					loot: [],
					map: {
						display: !0,
						color: 11776947,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					img: {
						sprite: "img/map/map-vat-02.svg",
						residue: "img/map/map-vat-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_01",
						enter: "none"
					}
				},
				vending_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: .75
					},
					collision: A.createAabbExtents(L.create(0, .15), L.create(1.7, 1.25)),
					height: .5,
					collidable: !0,
					destructible: !0,
					health: 150,
					hitParticle: "blueChip",
					explodeParticle: ["windowFrag", "lockerFrag"],
					reflectBullets: !0,
					loot: [r("tier_throwables", 2, 4)],
					map: {
						display: !1,
						color: 6697728,
						scale: .875
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					img: {
						sprite: "img/map/map-vending-soda-01.svg",
						residue: "img/map/map-vending-res.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "wall_bullet",
						punch: "metal_punch",
						explode: "vending_break_01",
						enter: "none"
					}
				},
				bank_window_01: {
					type: "obstacle",
					scale: {
						createMin: 1,
						createMax: 1,
						destroy: 1
					},
					collision: A.createAabbExtents(L.create(0, 0), L.create(.4, 2)),
					height: 10,
					collidable: !0,
					destructible: !0,
					isWindow: !0,
					health: 75,
					hitParticle: "glassChip",
					explodeParticle: ["windowFrag", "redPlank"],
					reflectBullets: !1,
					loot: [],
					img: {
						sprite: "img/map/map-building-bank-window-01.svg",
						residue: "img/map/map-building-bank-window-res-01.svg",
						scale: .5,
						alpha: 1,
						tint: 16777215,
						zIdx: 10
					},
					sound: {
						bullet: "glass_bullet",
						punch: "glass_bullet",
						explode: "window_break_02",
						enter: "none"
					}
				},
				house_door_01: v({
					material: "wood",
					hinge: L.create(0, 2),
					extents: L.create(.3, 2)
				}),
				house_door_02: v({
					material: "metal",
					hinge: L.create(0, 2),
					extents: L.create(.3, 2),
					door: {
						sound: {
							open: "door_open_02",
							close: "door_close_02"
						}
					},
					img: {
						tint: 4934475
					}
				}),
				house_door_03: v({
					material: "wood",
					hinge: L.create(0, 2),
					extents: L.create(.5, 1.75),
					img: {
						sprite: "img/map/map-door-03.svg"
					}
				}),
				cell_door_01: v({
					material: "metal",
					hinge: L.create(0, 2),
					extents: L.create(.3, 2),
					door: {
						canUse: !1,
						openOnce: !0,
						sound: {
							open: "door_open_02",
							close: "door_close_02"
						}
					},
					img: {
						tint: 1776411
					}
				}),
				lab_door_01: k(),
				lab_door_02: k({
					door: {
						openOneWay: !0,
						slideOffset: -3.75,
						casingImg: {
							pos: L.create(6, 0)
						}
					}
				}),
				lab_door_03: k({
					door: {
						openOneWay: !0
					}
				}),
				house_window_01: P(),
				house_window_broken_01: C(),
				lab_window_01: P({
					destroyType: "lab_window_broken_01"
				}),
				lab_window_broken_01: C({
					img: {
						tint: 1316379
					}
				}),
				hedgehog_wall: T({
					material: "metal",
					extents: L.create(3, .5),
					height: .5,
					map: {
						display: !0,
						color: 5854285,
						scale: 1
					}
				}),
				hedgehog_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !1,
						beach: !0
					},
					floor: {
						surfaces: [{
							type: "grass",
							collision: [A.createAabbExtents(L.create(0, 0), L.create(3, 3))]
						}],
						imgs: [{
							sprite: "img/map/map-hedgehog-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						scopeOut: [A.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						imgs: []
					},
					mapObjects: [{
						type: "hedgehog_wall",
						pos: L.create(0, 0),
						scale: 1,
						ori: 1
					}, {
						type: "hedgehog_wall",
						pos: L.create(0, 0),
						scale: 1,
						ori: 0
					}]
				},
				warehouse_wall_side: T({
					material: "metal",
					extents: L.create(25, .6)
				}),
				warehouse_wall_edge: T({
					material: "metal",
					extents: L.create(.6, 3.2)
				}),
				warehouse_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: A.createAabbExtents(L.create(27, 0), L.create(3, 12.25)),
							color: 10066329
						}, {
							collider: A.createAabbExtents(L.create(-27, 0), L.create(3, 12.25)),
							color: 10066329
						}, {
							collider: A.createAabbExtents(L.create(0, 0), L.create(24.5, 12.25)),
							color: 5915450
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					floor: {
						surfaces: [{
							type: "warehouse",
							collision: [A.createAabbExtents(L.create(0, 0), L.create(32, 12.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-warehouse-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 0), L.create(24.5, 12.25))],
						scopeOut: [A.createAabbExtents(L.create(0, 0), L.create(32, 12.5))],
						vision: {
							dist: 8,
							width: 5
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "warehouse_wall_side",
						pos: L.create(0, 11.9),
						scale: 1,
						ori: 0
					}, {
						type: "warehouse_wall_edge",
						pos: L.create(-24.4, 8.2),
						scale: 1,
						ori: 0
					}, {
						type: "warehouse_wall_edge",
						pos: L.create(24.4, 8.2),
						scale: 1,
						ori: 0
					}, {
						type: "warehouse_wall_side",
						pos: L.create(0, -11.9),
						scale: 1,
						ori: 0
					}, {
						type: "warehouse_wall_edge",
						pos: L.create(-24.4, -8.2),
						scale: 1,
						ori: 0
					}, {
						type: "warehouse_wall_edge",
						pos: L.create(24.4, -8.2),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(-21.25, 8.75),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "crate_04",
						pos: L.create(-16.25, 8.75),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(-21.25, -8.75),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(-16.5, -8.75),
						scale: .9,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(21.25, 8.75),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(16.5, 8.75),
						scale: .9,
						ori: 0
					}, {
						type: "crate_04",
						pos: L.create(16.25, -8.75),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(21.25, -8.75),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: m({
							crate_02: 1,
							crate_01: 3
						}),
						pos: L.create(0, 0),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "crate_01",
						pos: L.create(5, 0),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "crate_01",
						pos: L.create(-5, 0),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "crate_04",
						pos: L.create(0, 5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_04",
						pos: L.create(0, -5),
						scale: 1,
						ori: 0
					}]
				},
				shack_wall_top: T({
					material: "wood",
					extents: L.create(5.6, .35),
					height: 10,
					img: d("img/map/map-wall-shack-top.svg")
				}),
				shack_wall_side_left: T({
					material: "wood",
					extents: L.create(.35, 3.43),
					height: 10,
					img: d("img/map/map-wall-shack-left.svg")
				}),
				shack_wall_side_right: T({
					material: "wood",
					extents: L.create(.35, 3.8),
					height: 10,
					img: d("img/map/map-wall-shack-right.svg")
				}),
				shack_wall_bot: T({
					material: "wood",
					extents: L.create(3.75, .35),
					height: 10,
					img: d("img/map/map-wall-shack-bot.svg")
				}),
				shack_01: {
					type: "building",
					map: {
						display: !0,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					floor: {
						surfaces: [{
							type: "shack",
							collision: [A.createAabbExtents(L.create(0, .9), L.create(5.6, 3.5)), A.createAabbExtents(L.create(3.75, -4), L.create(2.25, 1.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-shack-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, .9), L.create(5.6, 3.5))],
						scopeOut: [A.createAabbExtents(L.create(0, .8), L.create(5.9, 3.8))],
						vision: {
							width: 4
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						destroy: {
							wallCount: 2,
							particle: "shackFrag",
							particleCount: 25,
							residue: "img/map/map-shack-res.svg"
						}
					},
					mapObjects: [{
						type: "shack_wall_bot",
						pos: L.create(-1.49, -2.4),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_side_left",
						pos: L.create(-5.55, .69),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_top",
						pos: L.create(-.3, 4.33),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_side_right",
						pos: L.create(5.55, .95),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(7.9, 2.85),
						scale: .8,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(7.45, -.9),
						scale: .85,
						ori: 0
					}, {
						type: m({
							loot_tier_2: 1
						}),
						pos: L.create(-2, .8),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(2, .8),
						scale: 1,
						ori: 0
					}]
				},
				outhouse_wall_top: T({
					material: "wood",
					extents: L.create(3.2, .35),
					height: 10,
					hitParticle: "outhouseChip",
					explodeParticle: "outhousePlank",
					health: 100,
					img: d("img/map/map-wall-outhouse-top.svg")
				}),
				outhouse_wall_side: T({
					material: "wood",
					extents: L.create(.35, 3.1),
					height: 10,
					hitParticle: "outhouseChip",
					explodeParticle: "outhousePlank",
					health: 100,
					img: d("img/map/map-wall-outhouse-side.svg")
				}),
				outhouse_wall_bot: T({
					material: "wood",
					extents: L.create(1.15, .35),
					height: 10,
					hitParticle: "outhouseChip",
					explodeParticle: "outhousePlank",
					health: 100,
					img: d("img/map/map-wall-outhouse-bot.svg")
				}),
				outhouse_01: {
					type: "building",
					map: {
						display: !0,
						color: 8145976,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					floor: {
						surfaces: [{
							type: "shack",
							collision: [A.createAabbExtents(L.create(0, 0), L.create(3.8, 5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-outhouse-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 1.45), L.create(3.6, 3.2))],
						scopeOut: [A.createAabbExtents(L.create(0, 1.4), L.create(3.8, 3.4))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						destroy: {
							wallCount: 2,
							particleCount: 15,
							particle: "outhouseFrag",
							residue: "img/map/map-outhouse-res.svg"
						}
					},
					mapObjects: [{
						type: "outhouse_wall_top",
						pos: L.create(0, 4.46),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_side",
						pos: L.create(3.4, 1.73),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_side",
						pos: L.create(-3.4, 1.73),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_bot",
						pos: L.create(-2.65, -1.52),
						scale: 1,
						ori: 0
					}, {
						type: "outhouse_wall_bot",
						pos: L.create(2.65, -1.52),
						scale: 1,
						ori: 0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(0, 2),
						scale: .95,
						ori: 0
					}]
				},
				brick_wall_ext_1: T({
					material: "brick",
					extents: L.create(.5, .5)
				}),
				brick_wall_ext_2: T({
					material: "brick",
					extents: L.create(.5, 1)
				}),
				brick_wall_ext_3: T({
					material: "brick",
					extents: L.create(.5, 1.5)
				}),
				brick_wall_ext_4: T({
					material: "brick",
					extents: L.create(.5, 2)
				}),
				brick_wall_ext_5: T({
					material: "brick",
					extents: L.create(.5, 2.5)
				}),
				brick_wall_ext_6: T({
					material: "brick",
					extents: L.create(.5, 3)
				}),
				brick_wall_ext_7: T({
					material: "brick",
					extents: L.create(.5, 3.5)
				}),
				brick_wall_ext_8: T({
					material: "brick",
					extents: L.create(.5, 4)
				}),
				brick_wall_ext_9: T({
					material: "brick",
					extents: L.create(.5, 4.5)
				}),
				brick_wall_ext_10: T({
					material: "brick",
					extents: L.create(.5, 5)
				}),
				brick_wall_ext_11: T({
					material: "brick",
					extents: L.create(.5, 5.5)
				}),
				brick_wall_ext_12: T({
					material: "brick",
					extents: L.create(.5, 6)
				}),
				brick_wall_ext_13: T({
					material: "brick",
					extents: L.create(.5, 6.5)
				}),
				brick_wall_ext_14: T({
					material: "brick",
					extents: L.create(.5, 7)
				}),
				brick_wall_ext_15: T({
					material: "brick",
					extents: L.create(.5, 7.5)
				}),
				brick_wall_ext_16: T({
					material: "brick",
					extents: L.create(.5, 8)
				}),
				brick_wall_ext_17: T({
					material: "brick",
					extents: L.create(.5, 8.5)
				}),
				brick_wall_ext_18: T({
					material: "brick",
					extents: L.create(.5, 9)
				}),
				brick_wall_ext_19: T({
					material: "brick",
					extents: L.create(.5, 9.5)
				}),
				brick_wall_ext_20: T({
					material: "brick",
					extents: L.create(.5, 10)
				}),
				brick_wall_ext_21: T({
					material: "brick",
					extents: L.create(.5, 10.5)
				}),
				brick_wall_ext_22: T({
					material: "brick",
					extents: L.create(.5, 11)
				}),
				brick_wall_ext_23: T({
					material: "brick",
					extents: L.create(.5, 11.5)
				}),
				brick_wall_ext_33: T({
					material: "brick",
					extents: L.create(.5, 16.5)
				}),
				brick_wall_ext_41: T({
					material: "brick",
					extents: L.create(.5, 20.5)
				}),
				brick_wall_ext_short_7: T({
					material: "brick",
					extents: L.create(.5, 3.5),
					height: .5
				}),
				brick_wall_ext_thicker_5: T({
					material: "brick",
					extents: L.create(1.5, 2.5)
				}),
				brick_wall_ext_thicker_6: T({
					material: "brick",
					extents: L.create(1.5, 3)
				}),
				brick_wall_ext_thicker_7: T({
					material: "brick",
					extents: L.create(1.5, 3.5)
				}),
				brick_wall_ext_thicker_8: T({
					material: "brick",
					extents: L.create(1.5, 4)
				}),
				brick_wall_ext_thicker_9: T({
					material: "brick",
					extents: L.create(1.5, 4.5)
				}),
				brick_wall_ext_thicker_12: T({
					material: "brick",
					extents: L.create(1.5, 6)
				}),
				brick_wall_ext_thicker_14: T({
					material: "brick",
					extents: L.create(1.5, 7)
				}),
				brick_wall_ext_thicker_15: T({
					material: "brick",
					extents: L.create(1.5, 7.5)
				}),
				brick_wall_ext_thicker_16: T({
					material: "brick",
					extents: L.create(1.5, 8)
				}),
				brick_wall_ext_thicker_24: T({
					material: "brick",
					extents: L.create(1.5, 12)
				}),
				metal_wall_ext_1: T({
					material: "metal",
					extents: L.create(.5, .5)
				}),
				metal_wall_ext_2: T({
					material: "metal",
					extents: L.create(.5, 1)
				}),
				metal_wall_ext_3: T({
					material: "metal",
					extents: L.create(.5, 1.5)
				}),
				metal_wall_ext_4: T({
					material: "metal",
					extents: L.create(.5, 2)
				}),
				metal_wall_ext_5: T({
					material: "metal",
					extents: L.create(.5, 2.5)
				}),
				metal_wall_ext_6: T({
					material: "metal",
					extents: L.create(.5, 3)
				}),
				metal_wall_ext_7: T({
					material: "metal",
					extents: L.create(.5, 3.5)
				}),
				metal_wall_ext_8: T({
					material: "metal",
					extents: L.create(.5, 4)
				}),
				metal_wall_ext_9: T({
					material: "metal",
					extents: L.create(.5, 4.5)
				}),
				metal_wall_ext_10: T({
					material: "metal",
					extents: L.create(.5, 5)
				}),
				metal_wall_ext_11: T({
					material: "metal",
					extents: L.create(.5, 5.5)
				}),
				metal_wall_ext_12: T({
					material: "metal",
					extents: L.create(.5, 6)
				}),
				metal_wall_ext_13: T({
					material: "metal",
					extents: L.create(.5, 6.5)
				}),
				metal_wall_ext_14: T({
					material: "metal",
					extents: L.create(.5, 7)
				}),
				metal_wall_ext_15: T({
					material: "metal",
					extents: L.create(.5, 7.5)
				}),
				metal_wall_ext_16: T({
					material: "metal",
					extents: L.create(.5, 8)
				}),
				metal_wall_ext_17: T({
					material: "metal",
					extents: L.create(.5, 8.5)
				}),
				metal_wall_ext_18: T({
					material: "metal",
					extents: L.create(.5, 9)
				}),
				metal_wall_ext_19: T({
					material: "metal",
					extents: L.create(.5, 9.5)
				}),
				metal_wall_ext_20: T({
					material: "metal",
					extents: L.create(.5, 10)
				}),
				metal_wall_ext_short_6: T({
					material: "metal",
					extents: L.create(.5, 3),
					height: .5
				}),
				metal_wall_ext_short_7: T({
					material: "metal",
					extents: L.create(.5, 3.5),
					height: .5
				}),
				metal_wall_ext_thick_5: T({
					material: "metal",
					extents: L.create(1, 2.5)
				}),
				metal_wall_ext_thick_20: T({
					material: "metal",
					extents: L.create(1, 10)
				}),
				metal_wall_ext_thicker_3: T({
					material: "metal",
					extents: L.create(1.5, 1.5)
				}),
				metal_wall_ext_thicker_4: T({
					material: "metal",
					extents: L.create(1.5, 2)
				}),
				metal_wall_ext_thicker_5: T({
					material: "metal",
					extents: L.create(1.5, 2.5)
				}),
				metal_wall_ext_thicker_6: T({
					material: "metal",
					extents: L.create(1.5, 3)
				}),
				metal_wall_ext_thicker_7: T({
					material: "metal",
					extents: L.create(1.5, 3.5)
				}),
				metal_wall_ext_thicker_8: T({
					material: "metal",
					extents: L.create(1.5, 4)
				}),
				metal_wall_ext_thicker_9: T({
					material: "metal",
					extents: L.create(1.5, 4.5)
				}),
				metal_wall_ext_thicker_10: T({
					material: "metal",
					extents: L.create(1.5, 5)
				}),
				metal_wall_ext_thicker_11: T({
					material: "metal",
					extents: L.create(1.5, 5.5)
				}),
				metal_wall_ext_thicker_12: T({
					material: "metal",
					extents: L.create(1.5, 6)
				}),
				metal_wall_ext_thicker_13: T({
					material: "metal",
					extents: L.create(1.5, 6.5)
				}),
				metal_wall_ext_thicker_14: T({
					material: "metal",
					extents: L.create(1.5, 7)
				}),
				metal_wall_ext_thicker_15: T({
					material: "metal",
					extents: L.create(1.5, 7.5)
				}),
				metal_wall_ext_thicker_16: T({
					material: "metal",
					extents: L.create(1.5, 8)
				}),
				metal_wall_ext_thicker_17: T({
					material: "metal",
					extents: L.create(1.5, 8.5)
				}),
				metal_wall_ext_thicker_18: T({
					material: "metal",
					extents: L.create(1.5, 9)
				}),
				metal_wall_ext_thicker_19: T({
					material: "metal",
					extents: L.create(1.5, 9.5)
				}),
				metal_wall_ext_thicker_20: T({
					material: "metal",
					extents: L.create(1.5, 10)
				}),
				metal_wall_ext_thicker_21: T({
					material: "metal",
					extents: L.create(1.5, 10.5)
				}),
				metal_wall_ext_thicker_22: T({
					material: "metal",
					extents: L.create(1.5, 11)
				}),
				metal_wall_ext_thicker_23: T({
					material: "metal",
					extents: L.create(1.5, 11.5)
				}),
				metal_wall_ext_thicker_24: T({
					material: "metal",
					extents: L.create(1.5, 12)
				}),
				metal_wall_ext_thicker_29: T({
					material: "metal",
					extents: L.create(1.5, 14.5)
				}),
				metal_wall_ext_thicker_42: T({
					material: "metal",
					extents: L.create(1.5, 21)
				}),
				glass_wall_10: T({
					material: "glass",
					extents: L.create(.5, 5),
					health: 50,
					img: d("img/map/map-wall-glass-10.svg")
				}),
				glass_wall_12: T({
					material: "glass",
					extents: L.create(.5, 6),
					health: 50,
					img: d("img/map/map-wall-glass-12.svg")
				}),
				concrete_wall_ext_2: T({
					material: "concrete",
					extents: L.create(.5, 1)
				}),
				concrete_wall_ext_6: T({
					material: "concrete",
					extents: L.create(.5, 3)
				}),
				concrete_wall_ext_7: T({
					material: "concrete",
					extents: L.create(.5, 3.5)
				}),
				concrete_wall_ext_8: T({
					material: "concrete",
					extents: L.create(.5, 4)
				}),
				concrete_wall_ext_11: T({
					material: "concrete",
					extents: L.create(.5, 5.5)
				}),
				concrete_wall_ext_13: T({
					material: "concrete",
					extents: L.create(.5, 6.5)
				}),
				concrete_wall_ext_17: T({
					material: "concrete",
					extents: L.create(.5, 8.5)
				}),
				panicroom_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "container",
							collision: [A.createAabbExtents(L.create(0, 0), L.create(4.5, 6))]
						}],
						imgs: [{
							sprite: "img/map/map-building-panicroom-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 0), L.create(4.5, 6))],
						scopeOut: [A.createAabbExtents(L.create(0, 0), L.create(4.5, 6))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_12",
						pos: L.create(-4, 0),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_3",
						pos: L.create(-2, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_7",
						pos: L.create(0, -5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_12",
						pos: L.create(4, 0),
						scale: 1,
						ori: 0
					}, {
						type: "loot_tier_2",
						pos: L.create(0, -.05),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(0, .05),
						scale: 1,
						ori: 0
					}]
				},
				barn_wall_int_1: T({
					material: "wood",
					extents: L.create(.5, .5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-01-rounded.svg", 7173701)
				}),
				barn_wall_int_2: T({
					material: "wood",
					extents: L.create(.5, 1),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-02-rounded.svg", 7173701)
				}),
				barn_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-04-rounded.svg", 7173701)
				}),
				barn_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-05-rounded.svg", 7173701)
				}),
				barn_wall_int_6: T({
					material: "wood",
					extents: L.create(.5, 3),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-06-rounded.svg", 7173701)
				}),
				barn_wall_int_7: T({
					material: "wood",
					extents: L.create(.5, 3.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-07-rounded.svg", 7173701)
				}),
				barn_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-08-rounded.svg", 7173701)
				}),
				barn_wall_int_9: T({
					material: "wood",
					extents: L.create(.5, 4.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-09-rounded.svg", 7173701)
				}),
				barn_wall_int_11: T({
					material: "wood",
					extents: L.create(.5, 5.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-11-rounded.svg", 7173701)
				}),
				barn_wall_int_13: T({
					material: "wood",
					extents: L.create(.5, 6.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-13-rounded.svg", 7173701)
				}),
				barn_column_1: T({
					material: "concrete",
					extents: L.create(1, 1),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-column-01.svg", 2764060)
				}),
				barn_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: A.createAabbExtents(L.create(0, 12), L.create(5, 2)),
							color: 12300935
						}, {
							collider: A.createAabbExtents(L.create(0, -2), L.create(24.5, 12.8)),
							color: 3816739
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "house",
							collision: [A.createAabbExtents(L.create(0, -2), L.create(25, 13.2)), A.createAabbExtents(L.create(0, 12), L.create(5.5, 2.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-barn-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, -2), L.create(24.5, 12.8)), A.createAabbExtents(L.create(0, 12), L.create(5.5, 2.5))],
						scopeOut: [A.createAabbExtents(L.create(0, -14.5), L.create(5.5, 4)), A.createAabbExtents(L.create(0, 14.5), L.create(5.5, 4))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_4",
						pos: L.create(-24.5, 9),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(-22.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_12",
						pos: L.create(-24.5, -2),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-24.5, -13),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(-22.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-24.75, 5.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-24.75, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-19.5, 10.75),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-19.5, -14.75),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(-10, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(10, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(-10, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-5.5, 13),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(5.5, 13),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(-3.5, 14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(3.5, 14.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(9.5, -14.75),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(2, 14.75),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-2, -14.75),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(24.5, 9),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_3",
						pos: L.create(22.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_13",
						pos: L.create(17.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_19",
						pos: L.create(24.5, -5.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_1",
						pos: L.create(23.5, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(24.75, 5.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(19.5, 10.75),
						scale: 1,
						ori: 1
					}, {
						type: "panicroom_01",
						pos: L.create(19.5, -8),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barn_wall_int_6",
						pos: L.create(-21, .5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_6",
						pos: L.create(-21, -4.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_5",
						pos: L.create(-11.5, .5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_2",
						pos: L.create(-13, -4.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_7",
						pos: L.create(-6.5, -4.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_8",
						pos: L.create(-11.5, -10),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_8",
						pos: L.create(-7.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_5",
						pos: L.create(-3.5, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_7",
						pos: L.create(10.5, .5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_wall_int_5",
						pos: L.create(14.5, 7.5),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_13",
						pos: L.create(14.5, -7.5),
						scale: 1,
						ori: 0
					}, {
						type: "barn_wall_int_4",
						pos: L.create(17, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-18, -4.5),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(-18, .5),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(-3.5, -5),
						scale: 1,
						ori: 2
					}, {
						type: "house_door_01",
						pos: L.create(14.5, 1),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_02",
						pos: L.create(23, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "barn_column_1",
						pos: L.create(-8, 1),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barn_column_1",
						pos: L.create(-11, -5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barn_column_1",
						pos: L.create(15, 0),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(-7.5, -12),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-12.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-5.5, 7.25),
						scale: 1,
						ori: 1
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-13.5, -9.5),
						scale: 1,
						ori: 3
					}, {
						type: "stand_01",
						pos: L.create(16.5, 8.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(3.5, 12.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "table_01",
						pos: L.create(8, -8),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "oven_01",
						pos: L.create(12.25, -1.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "refrigerator_01",
						pos: L.create(8.75, -1.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(-22, -2),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(12, 8),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(-19, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(-19, 5.5),
						scale: 1,
						ori: 0
					}, {
						type: "loot_tier_1",
						pos: L.create(0, 5.5),
						scale: 1,
						ori: 0
					}]
				},
				bank_wall_int_3: T({
					material: "wood",
					extents: L.create(.5, 1.5),
					img: d("img/map/map-wall-03-rounded.svg", 7951934)
				}),
				bank_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					img: d("img/map/map-wall-04-rounded.svg", 7951934)
				}),
				bank_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					img: d("img/map/map-wall-05-rounded.svg", 7951934)
				}),
				bank_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					img: d("img/map/map-wall-08-rounded.svg", 7951934)
				}),
				bank_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: A.createAabbExtents(L.create(-16, 7), L.create(10.75, 11)),
							color: 7820585
						}, {
							collider: A.createAabbExtents(L.create(6, 0), L.create(11.5, 18.25)),
							color: 9989427
						}, {
							collider: A.createAabbExtents(L.create(22, 4), L.create(4.5, 7.5)),
							color: 7820585
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [A.createAabbExtents(L.create(6, -1), L.create(11.25, 18.25)), A.createAabbExtents(L.create(21.5, 4), L.create(4.75, 7.25))]
						}],
						imgs: [{
							sprite: "img/map/map-building-bank-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(6, -1), L.create(11.25, 18.25)), A.createAabbExtents(L.create(21.5, 4), L.create(4.75, 7.25)), A.createAabbExtents(L.create(-16, 6), L.create(10.25, 11))],
						scopeOut: [A.createAabbExtents(L.create(6, 1.25), L.create(15.25, 20))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_23",
						pos: L.create(-14, 17),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_23",
						pos: L.create(-25.9, 6),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_20",
						pos: L.create(-15.5, -5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-5, -7),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(-5, -16.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-2.5, -19),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(6, -19),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(14.5, -19),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(17, -16.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(17, -6),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(1, -19.25),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(11, -19.25),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-5.25, -13.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(17.25, -13.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(22, -3),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_13",
						pos: L.create(26, 4),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(22, 11),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(17, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(14.5, 17),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(4.5, 17),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-1, 17.25),
						scale: 1,
						ori: 1
					}, {
						type: "vault_01",
						pos: L.create(-12, 6),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bank_wall_int_4",
						pos: L.create(-2.5, -5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(1, -5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_3",
						pos: L.create(4, -5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_4",
						pos: L.create(6, -3.5),
						scale: 1,
						ori: 0
					}, {
						type: "bank_window_01",
						pos: L.create(6, 0),
						scale: 1,
						ori: 0
					}, {
						type: "bank_wall_int_4",
						pos: L.create(6, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "bank_wall_int_4",
						pos: L.create(8.5, 5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(12, 5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_3",
						pos: L.create(15, 5),
						scale: 1,
						ori: 1
					}, {
						type: "bank_wall_int_5",
						pos: L.create(17, 4),
						scale: 1,
						ori: 0
					}, {
						type: "bank_wall_int_8",
						pos: L.create(21.5, 4),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(17, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(17, 10.5),
						scale: 1,
						ori: 2
					}, {
						type: "house_door_01",
						pos: L.create(12.5, 17.25),
						scale: 1,
						ori: 1
					}, {
						type: "vending_01",
						pos: L.create(4.5, -16.9),
						scale: 1,
						ori: 2
					}, {
						type: "stand_01",
						pos: L.create(7.65, -17),
						scale: 1,
						ori: 2
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(23.5, .5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(23.5, 7.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(15, 15),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(-2.5, -16.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(14.5, -16.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_01",
						pos: L.create(19.75, 13.75),
						scale: .9,
						ori: 0,
						inheritOri: !1
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(12, 0),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1,
							"": 1
						}),
						pos: L.create(1, 0),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-16.5, -12.5),
						scale: 1.1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barrel_01",
						pos: L.create(-7.5, -7.25),
						scale: .85,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(21, -7),
						scale: .55,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(21, -16.25),
						scale: .55,
						ori: 0,
						inheritOri: !0
					}]
				},
				vault_door_main: v({
					material: "metal",
					hinge: L.create(1, 3.5),
					extents: L.create(1, 3.5),
					img: {
						sprite: "img/map/map-door-02.svg"
					},
					door: {
						interactionRad: 2.5,
						openSpeed: .23,
						openOneWay: -1,
						openDelay: 4.1,
						openOnce: !0,
						spriteAnchor: L.create(.2, 1),
						sound: {
							open: "none",
							close: "none",
							change: "vault_change_01"
						}
					}
				}),
				vault_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "container",
							collision: [A.createAabbExtents(L.create(-3.5, 0), L.create(10, 10.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-vault-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(-3.5, 0), L.create(9.25, 10.5))],
						scopeOut: [A.createAabbExtents(L.create(-3.5, 0), L.create(10, 10.5))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thick_20",
						pos: L.create(-12.5, 0),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thick_20",
						pos: L.create(-3.5, -9.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thick_20",
						pos: L.create(-3.5, 9.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thick_5",
						pos: L.create(5.5, -6),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thick_5",
						pos: L.create(5.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "vault_door_main",
						pos: L.create(6.5, 3.5),
						scale: 1,
						ori: 2
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-12.3, 5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-12.3, -5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-8, 9.3),
						scale: 1,
						ori: 0
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(-8, -9.3),
						scale: 1,
						ori: 2
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(1, 9.3),
						scale: 1,
						ori: 0
					}, {
						type: m({
							deposit_box_01: 7,
							deposit_box_02: 1
						}),
						pos: L.create(1, -9.3),
						scale: 1,
						ori: 2
					}, {
						type: "crate_05",
						pos: L.create(-3.5, 6.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_05",
						pos: L.create(-3.5, -6.5),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							loot_tier_vault_floor: 1
						}),
						pos: L.create(-3.5, 0),
						scale: 1,
						ori: 0
					}]
				},
				police_wall_int_2: T({
					material: "wood",
					extents: L.create(.5, 1),
					img: d("img/map/map-wall-02-rounded.svg", 1777447)
				}),
				police_wall_int_3: T({
					material: "wood",
					extents: L.create(.5, 1.5),
					img: d("img/map/map-wall-03-rounded.svg", 1777447)
				}),
				police_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					img: d("img/map/map-wall-04-rounded.svg", 1777447)
				}),
				police_wall_int_6: T({
					material: "wood",
					extents: L.create(.5, 3),
					img: d("img/map/map-wall-06-rounded.svg", 1777447)
				}),
				police_wall_int_7: T({
					material: "wood",
					extents: L.create(.5, 3.5),
					img: d("img/map/map-wall-07-rounded.svg", 1777447)
				}),
				police_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					img: d("img/map/map-wall-08-rounded.svg", 1777447)
				}),
				police_wall_int_10: T({
					material: "wood",
					extents: L.create(.5, 5),
					img: d("img/map/map-wall-10-rounded.svg", 1777447)
				}),
				police_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: A.createAabbExtents(L.create(-24.5, 8.5), L.create(17.75, 9.75)),
							color: 3355970
						}, {
							collider: A.createAabbExtents(L.create(-3.5, 12), L.create(3.5, 6.25)),
							color: 4278620
						}, {
							collider: A.createAabbExtents(L.create(10.35, 0), L.create(10.5, 22)),
							color: 3355970
						}, {
							collider: A.createAabbExtents(L.create(31.25, 12.5), L.create(10.75, 9.5)),
							color: 3355970
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [A.createAabbExtents(L.create(-24.5, 8.5), L.create(17.75, 9.75)), A.createAabbExtents(L.create(-3.5, 12), L.create(3.5, 6.25)), A.createAabbExtents(L.create(10.35, 0), L.create(10.5, 22)), A.createAabbExtents(L.create(31.25, 12.5), L.create(10.75, 9.5))]
						}, {
							type: "asphalt",
							collision: [A.createAabbExtents(L.create(-21.5, -13), L.create(21, 11.5)), A.createAabbExtents(L.create(-3.5, 2), L.create(3, 3.5))]
						}],
						imgs: [{
							sprite: "img/map/map-building-police-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(-24.5, 8.5), L.create(17.75, 9.75)), A.createAabbExtents(L.create(-3.5, 12), L.create(3.5, 6.25)), A.createAabbExtents(L.create(10.35, 0), L.create(10.5, 22)), A.createAabbExtents(L.create(31.25, 12.5), L.create(10.75, 9.5))],
						scopeOut: [A.createAabbExtents(L.create(12, 0), L.create(12.75, 26))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_20",
						pos: L.create(-42, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_41",
						pos: L.create(-21, 18),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(-38, -1),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_21",
						pos: L.create(-18, -1),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(-7, 2),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(-4, 6),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_16",
						pos: L.create(0, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-.5, -11),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_10",
						pos: L.create(0, -17.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(3.5, -22),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(6.5, -22.5),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(14.5, -22.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(17.5, -22),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_11",
						pos: L.create(21, -17),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(21.5, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_11",
						pos: L.create(21, -2),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_20",
						pos: L.create(31.5, 3),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_20",
						pos: L.create(42, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_33",
						pos: L.create(25, 22),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(4.5, 22.5),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(2.5, 22),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(0, 20),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_2",
						pos: L.create(-40.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_3",
						pos: L.create(-34, 8),
						scale: 1,
						ori: 1
					}, {
						type: "cell_door_01",
						pos: L.create(-35.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-35, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_3",
						pos: L.create(-27, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-28, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "cell_door_01",
						pos: L.create(-21.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_3",
						pos: L.create(-20, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-21, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "cell_door_01",
						pos: L.create(-14.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_3",
						pos: L.create(-13, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_8",
						pos: L.create(-14, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "cell_door_01",
						pos: L.create(-7.5, 8),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_6",
						pos: L.create(-7, 9.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_7",
						pos: L.create(-4, 13),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(-7, 17.5),
						scale: 1,
						ori: 2
					}, {
						type: "police_wall_int_4",
						pos: L.create(2.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(6, -1),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_6",
						pos: L.create(10.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "bank_window_01",
						pos: L.create(15, -1),
						scale: 1,
						ori: 1
					}, {
						type: "police_wall_int_4",
						pos: L.create(18.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(21, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_10",
						pos: L.create(21, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(21, 21.5),
						scale: 1,
						ori: 2
					}, {
						type: "metal_wall_ext_10",
						pos: L.create(35.5, 4),
						scale: 1,
						ori: 1
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(33, 4.15),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: "metal_wall_ext_10",
						pos: L.create(35.5, 21),
						scale: 1,
						ori: 1
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(33, 20.85),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(38, 20.85),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "metal_wall_ext_18",
						pos: L.create(41, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(40.85, 7.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(40.85, 17.5),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "metal_wall_ext_thicker_10",
						pos: L.create(35.5, 12.5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(38, 11.35),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							locker_01: 8,
							locker_02: 1
						}),
						pos: L.create(33, 13.65),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-37, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-23, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-16, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(-9, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: "control_panel_01",
						pos: L.create(-4.5, 9.5),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(-24.5, 20.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(14.5, 12.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(18.75, 12.5),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "crate_06",
						pos: L.create(10.5, 1.25),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "vending_01",
						pos: L.create(2, -6.75),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(2, -14.5),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "bush_01",
						pos: L.create(2.5, -19.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bush_01",
						pos: L.create(18.5, -19.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: m({
							loot_tier_police_floor: 1
						}),
						pos: L.create(-38.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-31.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-24.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-17.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: m({
							loot_tier_1: 1
						}),
						pos: L.create(-10.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(-3.5, 2.5),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "sandbags_01",
						pos: L.create(-38.5, -7),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: "sandbags_01",
						pos: L.create(-7.5, -19.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barrel_01",
						pos: L.create(-30.5, -18),
						scale: .9,
						ori: 0,
						inheritOri: !0
					}, {
						type: "barrel_01",
						pos: L.create(-20.5, -10.5),
						scale: .9,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(39, -6),
						scale: .8,
						ori: 0,
						inheritOri: !0
					}, {
						type: "tree_01",
						pos: L.create(28, -17.5),
						scale: .8,
						ori: 0,
						inheritOri: !0
					}, {
						type: "hedgehog_01",
						pos: L.create(39, -17.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "crate_01",
						pos: L.create(24.5, -.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}]
				},
				house_wall_int_3: T({
					material: "wood",
					extents: L.create(.5, 1.5),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-03-rounded.svg", 10584424)
				}),
				house_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-04-rounded.svg", 10584424)
				}),
				house_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-05-rounded.svg", 10584424)
				}),
				house_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-08-rounded.svg", 10584424)
				}),
				house_wall_int_9: T({
					material: "wood",
					extents: L.create(.5, 4.5),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-09-rounded.svg", 10584424)
				}),
				house_wall_int_11: T({
					material: "wood",
					extents: L.create(.5, 5.5),
					hitParticle: "tanChip",
					img: d("img/map/map-wall-11-rounded.svg", 10584424)
				}),
				house_column_1: T({
					material: "concrete",
					extents: L.create(1, 1),
					hitParticle: "tanChip",
					img: d("img/map/map-column-01.svg", 5587506)
				}),
				house_red_01: {
					type: "building",
					map: {
						display: !0,
						color: 6429724,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "house",
							collision: [A.createAabbExtents(L.create(0, 0), L.create(14.5, 13))]
						}],
						imgs: [{
							sprite: "img/map/map-building-house-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 0), L.create(14.5, 13))],
						scopeOut: [A.createAabbExtents(L.create(0, 0), L.create(16.5, 15))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_12",
						pos: L.create(-9, 13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_14",
						pos: L.create(8, 13),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(1, 13.25),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-14.5, 10.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_10",
						pos: L.create(-14.5, -.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-14.5, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-14.75, 6),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-14.75, -7),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-12.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(-4.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(4.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_5",
						pos: L.create(12.5, -13),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(-8.5, -13.25),
						scale: 1,
						ori: 3
					}, {
						type: "house_window_01",
						pos: L.create(8.5, -13.25),
						scale: 1,
						ori: 3
					}, {
						type: "house_door_01",
						pos: L.create(-2, -13.25),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(14.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(14.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_2",
						pos: L.create(14.5, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(14.75, -9),
						scale: 1,
						ori: 2
					}, {
						type: "house_window_01",
						pos: L.create(14.75, 3),
						scale: 1,
						ori: 2
					}, {
						type: "house_wall_int_9",
						pos: L.create(-9.5, -1),
						scale: 1,
						ori: 1
					}, {
						type: "house_wall_int_5",
						pos: L.create(4.5, -6),
						scale: 1,
						ori: 0
					}, {
						type: "house_wall_int_9",
						pos: L.create(9.5, -4),
						scale: 1,
						ori: 1
					}, {
						type: "house_wall_int_8",
						pos: L.create(5.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_wall_int_4",
						pos: L.create(8, 7),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(4.5, -12.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(6, 2.5),
						scale: 1,
						ori: 2
					}, {
						type: "house_door_01",
						pos: L.create(14, 7),
						scale: 1,
						ori: 1
					}, {
						type: "house_column_1",
						pos: L.create(6, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_column_1",
						pos: L.create(6, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							toilet_01: 5,
							toilet_02: 1
						}),
						pos: L.create(8, 10),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "stand_01",
						pos: L.create(12.25, -2),
						scale: 1,
						ori: 3,
						inheritOri: !0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(7.75, -6),
						scale: 1,
						ori: 0
					}, {
						type: "stand_01",
						pos: L.create(-12.25, -3),
						scale: 1,
						ori: 1,
						inheritOri: !0
					}, {
						type: "table_01",
						pos: L.create(-11.25, 1.75),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "oven_01",
						pos: L.create(-7, 11),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "refrigerator_01",
						pos: L.create(-7, 1),
						scale: 1,
						ori: 2,
						inheritOri: !0
					}, {
						type: "bush_02",
						pos: L.create(-12, -10.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "loot_tier_1",
						pos: L.create(0, 4.5),
						scale: 1,
						ori: 0
					}]
				},
				mansion_wall_int_1: T({
					material: "wood",
					extents: L.create(.5, .5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-01-rounded.svg", 16768917)
				}),
				mansion_wall_int_4: T({
					material: "wood",
					extents: L.create(.5, 2),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-04-rounded.svg", 16768917)
				}),
				mansion_wall_int_5: T({
					material: "wood",
					extents: L.create(.5, 2.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-05-rounded.svg", 16768917)
				}),
				mansion_wall_int_6: T({
					material: "wood",
					extents: L.create(.5, 3),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-06-rounded.svg", 16768917)
				}),
				mansion_wall_int_7: T({
					material: "wood",
					extents: L.create(.5, 3.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-07-rounded.svg", 16768917)
				}),
				mansion_wall_int_8: T({
					material: "wood",
					extents: L.create(.5, 4),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-08-rounded.svg", 16768917)
				}),
				mansion_wall_int_9: T({
					material: "wood",
					extents: L.create(.5, 4.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-09-rounded.svg", 16768917)
				}),
				mansion_wall_int_10: T({
					material: "wood",
					extents: L.create(.5, 5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-10-rounded.svg", 16768917)
				}),
				mansion_wall_int_11: T({
					material: "wood",
					extents: L.create(.5, 5.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-11-rounded.svg", 16768917)
				}),
				mansion_wall_int_12: T({
					material: "wood",
					extents: L.create(.5, 6),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-12-rounded.svg", 16768917)
				}),
				mansion_wall_int_13: T({
					material: "wood",
					extents: L.create(.5, 6.5),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-13-rounded.svg", 16768917)
				}),
				mansion_wall_int_14: T({
					material: "wood",
					extents: L.create(.5, 7),
					hitParticle: "ltgreenChip",
					img: d("img/map/map-wall-14-rounded.svg", 16768917)
				}),
				mansion_column_1: T({
					material: "concrete",
					extents: L.create(1, 1),
					hitParticle: "tanChip",
					img: d("img/map/map-column-01.svg", 7432016)
				}),
				saferoom_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "container",
							collision: [A.createAabbExtents(L.create(0, 0), L.create(6, 4))]
						}],
						imgs: [{
							sprite: "img/map/map-building-saferoom-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 0), L.create(5, 3))],
						scopeOut: [A.createAabbExtents(L.create(0, 0), L.create(5, 3))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_7",
						pos: L.create(-5, 0),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_6",
						pos: L.create(1.5, 3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_9",
						pos: L.create(0, -3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_7",
						pos: L.create(5, 0),
						scale: 1,
						ori: 0
					}, {
						type: m({
							case_01: 1,
							case_02: .025,
							chest_02: 1
						}),
						pos: L.create(2.5, 0),
						scale: 1,
						ori: 3
					}]
				},
				mansion_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: A.createAabbExtents(L.create(-1.5, 20.5), L.create(12.5, 4.5)),
							color: 8671554
						}, {
							collider: A.createAabbExtents(L.create(-2, -23), L.create(3, 2.5)),
							color: 8671554
						}, {
							collider: A.createAabbExtents(L.create(-20.5, -22.5), L.create(10, 2)),
							color: 7750457
						}, {
							collider: A.createAabbExtents(L.create(28, 1.5), L.create(3.75, 3)),
							color: 7237230
						}, {
							collider: A.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)),
							color: 6175023
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [A.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)), A.createAabbExtents(L.create(-1.5, 20.5), L.create(12.5, 4.5)), A.createAabbExtents(L.create(0, 0), L.create(20, 20))]
						}, {
							type: "asphalt",
							collision: [A.createAabbExtents(L.create(-21, -17), L.create(11, 8)), A.createAabbExtents(L.create(-23, -6), L.create(8, 3)), A.createAabbExtents(L.create(-2, -24), L.create(2, 3)), A.createAabbExtents(L.create(28, 1.5), L.create(3, 3))]
						}, {
							type: "grass",
							collision: [A.createAabbExtents(L.create(-2, 4), L.create(5, 5))]
						}, {
							type: "house",
							collision: [A.createAabbExtents(L.create(1, 13), L.create(2, 3.25))]
						}],
						imgs: [{
							sprite: "img/map/map-building-mansion-floor.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(-15, -22.4), L.create(17, 2.2)), A.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)), A.createAabbExtents(L.create(-1.5, 20.6), L.create(12, 4.2))],
						scopeOut: [A.createAabbExtents(L.create(-15, -24.4), L.create(21, 4.2)), A.createAabbExtents(L.create(-3.5, -2), L.create(28, 18.5)), A.createAabbExtents(L.create(-9, 23.1), L.create(5, 6.7))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					mapObjects: [{
						type: "brick_wall_ext_9",
						pos: L.create(-31.5, -16.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-31.75, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_19",
						pos: L.create(-31.5, .5),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(-31.75, 11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_4",
						pos: L.create(-31.5, 15),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_17",
						pos: L.create(-22.5, 16.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(-13.5, 20.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(-13, 24.9),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_19",
						pos: L.create(.5, 24.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_9",
						pos: L.create(10.5, 20.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_13",
						pos: L.create(17.5, 16.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(24.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(24.75, 9.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_18",
						pos: L.create(24.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "house_window_01",
						pos: L.create(24.75, -11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(24.5, -17),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_7",
						pos: L.create(20.5, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_window_01",
						pos: L.create(15.5, -20.75),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_14",
						pos: L.create(7, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-4, -21),
						scale: 1,
						ori: 3
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(-7, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_short_7",
						pos: L.create(28.5, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_short_7",
						pos: L.create(28.5, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(-7, -20.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_column_1",
						pos: L.create(-5, -24),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_column_1",
						pos: L.create(1, -24),
						scale: 1,
						ori: 1
					}, {
						type: "saferoom_01",
						pos: L.create(-25.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_12",
						pos: L.create(-25, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(-19, -2.5),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_wall_int_1",
						pos: L.create(-30.5, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_03",
						pos: L.create(-30.25, 5.5),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_wall_int_13",
						pos: L.create(-20.5, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_7",
						pos: L.create(-19.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(-14.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_6",
						pos: L.create(-14.5, 13),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_6",
						pos: L.create(-14.5, -5),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_10",
						pos: L.create(-10, -8.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_11",
						pos: L.create(-9.5, -14.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(-7.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(-1.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_8",
						pos: L.create(3.5, 14),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_12",
						pos: L.create(-2, 9.5),
						scale: 1,
						ori: 1
					}, {
						type: "stairs_01",
						pos: L.create(-4.5, 12),
						scale: 1,
						ori: 0
					}, {
						type: "glass_wall_10",
						pos: L.create(-7.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: "glass_wall_10",
						pos: L.create(3.5, 4),
						scale: 1,
						ori: 0
					}, {
						type: "glass_wall_12",
						pos: L.create(-2, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(10.5, 16),
						scale: 1,
						ori: 2
					}, {
						type: "mansion_wall_int_9",
						pos: L.create(10.5, 7.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(10.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_8",
						pos: L.create(10.5, -5),
						scale: 1,
						ori: 0
					}, {
						type: "mansion_wall_int_9",
						pos: L.create(15.5, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_9",
						pos: L.create(15.5, -1.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_5",
						pos: L.create(19.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_01",
						pos: L.create(24, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_wall_int_5",
						pos: L.create(3.5, -8.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(6, -8.5),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_wall_int_11",
						pos: L.create(5.5, -14.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(-27.25, 7.15),
						scale: 1,
						ori: 2
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(-27.25, 14.85),
						scale: 1,
						ori: 0
					}, {
						type: m({
							drawers_01: 7,
							drawers_02: 1
						}),
						pos: L.create(-11.5, -11.75),
						scale: 1,
						ori: 3
					}, {
						type: "stand_01",
						pos: L.create(-7.5, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: "stand_01",
						pos: L.create(3.5, -10.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(7.25, -16.25),
						scale: 1,
						ori: 1
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(14.75, -3.25),
						scale: 1,
						ori: 0
					}, {
						type: "toilet_01",
						pos: L.create(17, 1.5),
						scale: 1,
						ori: 3
					}, {
						type: "refrigerator_01",
						pos: L.create(22.15, 14.4),
						scale: 1,
						ori: 0
					}, {
						type: "oven_01",
						pos: L.create(12.75, 6.75),
						scale: 1,
						ori: 1
					}, {
						type: "oven_01",
						pos: L.create(12.75, 10.25),
						scale: 1,
						ori: 1
					}, {
						type: "table_02",
						pos: L.create(15.75, -14.25),
						scale: 1,
						ori: 0
					}, {
						type: "loot_tier_mansion_floor",
						pos: L.create(-2, -8.5),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-2, 4),
						scale: .6,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(-4.75, 1.25),
						scale: .9,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(.75, 1.25),
						scale: .9,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(-4.75, 6.75),
						scale: .9,
						ori: 0
					}, {
						type: m({
							bush_01: 25,
							bush_03: 1
						}),
						pos: L.create(.75, 6.75),
						scale: .9,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(-8, -23),
						scale: .95,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(4, -23),
						scale: .95,
						ori: 0
					}, {
						type: "shack_01",
						pos: L.create(-20.75, 22.5),
						scale: 1,
						ori: 2
					}, {
						type: "crate_01",
						pos: L.create(13.25, 19.25),
						scale: .9,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(24, 24),
						scale: 1,
						ori: 0
					}, {
						type: "barrel_02",
						pos: L.create(27, -4),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(29, -17.25),
						scale: .7,
						ori: 0
					}]
				},
				mansion_cellar_01: {
					type: "building",
					map: {
						display: !1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "brick",
							collision: [A.createAabbExtents(L.create(18, 3), L.create(7, 13)), A.createAabbExtents(L.create(5, 0), L.create(6, 10))]
						}],
						imgs: [{
							sprite: "img/map/map-building-mansion-cellar.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(18, 3), L.create(7, 13)), A.createAabbExtents(L.create(5, 1.5), L.create(6, 12))],
						scopeOut: [A.createAabbExtents(L.create(18, 3), L.create(7, 13)), A.createAabbExtents(L.create(5, 1.5), L.create(6, 12))],
						vision: {
							dist: 5.5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: []
					},
					mapObjects: [{
						type: "brick_wall_ext_thicker_24",
						pos: L.create(-2.5, 6),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_8",
						pos: L.create(0, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_7",
						pos: L.create(5.5, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_9",
						pos: L.create(11.5, -11.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_7",
						pos: L.create(17.5, -9.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(21.5, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_8",
						pos: L.create(25.5, -5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_15",
						pos: L.create(25.5, 11.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_16",
						pos: L.create(16, 17.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_7",
						pos: L.create(9.5, 12.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(5.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(29.5, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "brick_wall_ext_thicker_5",
						pos: L.create(29.5, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_7",
						pos: L.create(31.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_thicker_6",
						pos: L.create(4.5, 15),
						scale: 1,
						ori: 0
					}, {
						type: "brick_wall_ext_6",
						pos: L.create(1, 17.6),
						scale: 1,
						ori: 1
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(8.5, -9.53),
						scale: 1,
						ori: 2
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(11.5, -9.53),
						scale: 1,
						ori: 2
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(14.5, -9.53),
						scale: 1,
						ori: 2
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(12.75, 15.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(15.75, 15.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							barrel_03: 9,
							barrel_04: 1
						}),
						pos: L.create(18.75, 15.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(22.25, 14.25),
						scale: .75,
						ori: 0
					}, {
						type: m({
							bookshelf_01: 7,
							bookshelf_02: 1
						}),
						pos: L.create(22.75, 8),
						scale: 1,
						ori: 3
					}, {
						type: "mansion_column_1",
						pos: L.create(5.5, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "mansion_column_1",
						pos: L.create(17.5, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "barrel_02",
						pos: L.create(8.5, 1.5),
						scale: .8,
						ori: 0
					}, {
						type: "barrel_01",
						pos: L.create(11.5, 1.5),
						scale: .8,
						ori: 0
					}, {
						type: "barrel_02",
						pos: L.create(14.5, 1.5),
						scale: .8,
						ori: 0
					}]
				},
				mansion_structure_01: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					layers: [{
						type: "mansion_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "mansion_cellar_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: A.createAabbExtents(L.create(28, 1.5), L.create(3, 2.55)),
						downDir: L.create(-1, 0),
						noCeilingReveal: !0
					}, {
						collision: A.createAabbExtents(L.create(1, 13.5), L.create(2, 3.5)),
						downDir: L.create(0, -1)
					}],
					mask: [A.createAabbExtents(L.create(10, -.1), L.create(15, 10.1)), A.createAabbExtents(L.create(17.5, 13.5), L.create(7.5, 3.5))]
				},
				bunker_egg_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "container",
							collision: [A.createAabbExtents(L.create(0, 7.75), L.create(2, 3.25))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-egg-floor-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						scopeOut: [A.createAabbExtents(L.create(0, 0), L.create(0, 0))],
						vision: {
							dist: 5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						},
						imgs: []
					},
					mapObjects: [{
						type: "metal_wall_ext_short_6",
						pos: L.create(0, 5.3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(5, 8),
						scale: 1.05,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-5, 7.5),
						scale: 1.1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-1.25, 15.75),
						scale: 1,
						ori: 0
					}, {
						type: "stone_01",
						pos: L.create(-5.75, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(5.75, -6.75),
						scale: 1,
						ori: 0
					}]
				},
				bunker_egg_sublevel_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [A.createAabbExtents(L.create(0, -4.5), L.create(10, 9))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-egg-chamber-floor-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, -4.5), L.create(10, 9))],
						scopeOut: [A.createAabbExtents(L.create(0, -4.5), L.create(10, 9))],
						imgs: [{
							sprite: "",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						vision: {
							dist: 10,
							width: 3
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_6",
						pos: L.create(0, 11.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(-3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(-7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_20",
						pos: L.create(-10.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_20",
						pos: L.create(10.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_24",
						pos: L.create(0, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(-2, 5),
						scale: 1,
						ori: 3
					}, {
						type: "crate_07",
						pos: L.create(0, -4.5),
						scale: 1,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(-7, -11),
						scale: .9,
						ori: 0
					}]
				},
				bunker_structure_01: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					mapObstacleBounds: [A.createAabbExtents(L.create(0, 5), L.create(7, 12))],
					layers: [{
						type: "bunker_egg_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "bunker_egg_sublevel_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: A.createAabbExtents(L.create(0, 8.4), L.create(2, 2.6)),
						downDir: L.create(0, -1)
					}],
					mask: [A.createAabbExtents(L.create(0, -3.7), L.create(10, 9.5))]
				},
				bunker_hydra_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: A.createAabbExtents(L.create(20.25, 3.5), L.create(6.25, 5.5)),
							color: 2894892
						}, {
							collider: A.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25)),
							color: 3815994
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "tile",
							collision: [A.createAabbExtents(L.create(20.25, 3.5), L.create(6.25, 5.5)), A.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25))]
						}, {
							type: "container",
							collision: [A.createAabbExtents(L.create(16.25, 3.5), L.create(3.25, 2)), A.createAabbExtents(L.create(-16.5, -90.75), L.create(2, 3.25)), A.createAabbExtents(L.create(40, -50.5), L.create(2, 3.25))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-floor-01.svg",
							pos: L.create(16.75, 3.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-floor-02.svg",
							pos: L.create(-16.5, -85.25),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-floor-03.svg",
							pos: L.create(36.75, -56.25),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-floor-04.svg",
							pos: L.create(-5.75, -38.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(19.25, 3.5), L.create(7.25, 5.5)), A.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25))],
						scopeOut: [A.createAabbExtents(L.create(19.25, 3.5), L.create(7.25, 5.5)), A.createAabbExtents(L.create(32.25, 3.5), L.create(6.75, 9.25))],
						imgs: [{
							sprite: "",
							pos: L.create(25.25, 3.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						vision: {
							dist: 5,
							width: 2.75,
							linger: .5,
							fadeRate: 6
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_13",
						pos: L.create(18.75, 9.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_13",
						pos: L.create(18.75, -2.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_11",
						pos: L.create(12.75, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_7",
						pos: L.create(25.75, 9),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_7",
						pos: L.create(25.75, -2),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_2",
						pos: L.create(26.25, 12.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_2",
						pos: L.create(26.25, -5.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_8",
						pos: L.create(35.25, 12.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_8",
						pos: L.create(35.25, -5.5),
						scale: 1,
						ori: 1
					}, {
						type: "concrete_wall_ext_17",
						pos: L.create(38.75, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_7",
						pos: L.create(32.75, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "police_wall_int_2",
						pos: L.create(33.25, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_01",
						pos: L.create(38.25, 4.5),
						scale: 1,
						ori: 1
					}, {
						type: m({
							toilet_03: 5,
							toilet_04: 1
						}),
						pos: L.create(35.75, 10.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_08",
						pos: L.create(35.75, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_6",
						pos: L.create(13, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(17, 6),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(17, 1),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_6",
						pos: L.create(-16.5, -87.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-19, -91),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-14, -91),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_6",
						pos: L.create(40, -53.25),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(37.5, -50),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(42.5, -50),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-11.5, -93),
						scale: 1.05,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-21.5, -93.5),
						scale: 1.1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(-17.5, -84.25),
						scale: 1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(45, -50),
						scale: 1.05,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(35, -50.5),
						scale: 1.1,
						ori: 0
					}, {
						type: "tree_01",
						pos: L.create(38.75, -42.25),
						scale: 1,
						ori: 0
					}]
				},
				bunker_hydra_sublevel_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [A.createAabbExtents(L.create(3.5, 2), L.create(9.5, 10)), A.createAabbExtents(L.create(-15.5, -79.5), L.create(3, 8)), A.createAabbExtents(L.create(40.5, -62), L.create(9.5, 8))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-chamber-floor-01.svg",
							pos: L.create(7, 2.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-chamber-floor-02.svg",
							pos: L.create(-15.5, -83),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}, {
							sprite: "img/map/map-bunker-hydra-chamber-floor-03.svg",
							pos: L.create(40.5, -58.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(3.5, 2.25), L.create(10, 10)), A.createAabbExtents(L.create(-15, -77), L.create(5.5, 10.5)), A.createAabbExtents(L.create(38, -62), L.create(11.5, 8))],
						scopeOut: [A.createAabbExtents(L.create(3.5, 2.25), L.create(10, 10)), A.createAabbExtents(L.create(-15, -77), L.create(5.5, 10.5)), A.createAabbExtents(L.create(38, -62), L.create(11.5, 8))],
						imgs: [{
							sprite: "",
							pos: L.create(7, 2),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}, {
							sprite: "",
							pos: L.create(-13.5, -76.5),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}, {
							sprite: "",
							pos: L.create(38, -62),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}],
						vision: {
							dist: 10,
							width: 3
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_6",
						pos: L.create(20, 3.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(16.5, 7),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(16.5, 0),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(14, 12),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(14, -5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(2, 13.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(-7, 2.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(-3, -6.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(10, -6.5),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(13.5, 5.5),
						scale: 1,
						ori: 2
					}, {
						type: "lab_door_01",
						pos: L.create(-.5, -7.5),
						scale: 1,
						ori: 3
					}, {
						type: "lab_door_01",
						pos: L.create(7.5, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "sandbags_01",
						pos: L.create(0, 7.25),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(10.25, -2.75),
						scale: .9,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(10.25, 9.75),
						scale: .9,
						ori: 0
					}, {
						type: "barrel_01",
						pos: L.create(-3.5, -3),
						scale: .9,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_23",
						pos: L.create(-20, -83),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_19",
						pos: L.create(-11, -79),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(-13, -90.5),
						scale: 1,
						ori: 0
					}, {
						type: "concrete_wall_ext_6",
						pos: L.create(-16.5, -94),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(-18.5, -87.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(-12.15, -79),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(-12.15, -74.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(-12.15, -83.5),
						scale: 1,
						ori: 3
					}, {
						type: "concrete_wall_ext_6",
						pos: L.create(40, -47),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(36.5, -50.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(43.5, -50.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(33, -53),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(30, -55),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(30, -66),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_16",
						pos: L.create(36.5, -71),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(48.25, -70),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_13",
						pos: L.create(50, -62),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(48.25, -54),
						scale: 1,
						ori: 1
					}, {
						type: "house_door_02",
						pos: L.create(38, -53.5),
						scale: 1,
						ori: 3
					}, {
						type: "crate_08",
						pos: L.create(34, -67),
						scale: 1,
						ori: 2
					}, {
						type: "locker_01",
						pos: L.create(46.5, -55.15),
						scale: 1,
						ori: 0
					}, {
						type: "locker_01",
						pos: L.create(48.9, -57.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(48.9, -62),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(48.9, -66.5),
						scale: 1,
						ori: 3
					}, {
						type: "locker_01",
						pos: L.create(46.5, -68.85),
						scale: 1,
						ori: 2
					}, {
						type: "bunker_hydra_compartment_01",
						pos: L.create(3.5, -18.95),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bunker_hydra_compartment_02",
						pos: L.create(6, -50),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "bunker_hydra_compartment_03",
						pos: L.create(10.5, -74.95),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}]
				},
				vault_door_hydra: v({
					material: "metal",
					hinge: L.create(1, 3.5),
					extents: L.create(1, 3.5),
					img: {
						sprite: "img/map/map-door-02.svg"
					},
					door: {
						interactionRad: 2.5,
						openSpeed: .23,
						openOneWay: -1,
						openDelay: 1,
						openOnce: !0,
						spriteAnchor: L.create(.2, 1),
						sound: {
							open: "none",
							close: "none",
							change: "vault_change_01"
						}
					}
				}),
				bunker_hydra_compartment_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [A.createAabbExtents(L.create(0, 1), L.create(9.5, 10))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-compartment-floor-01.svg",
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 1.25), L.create(10, 10))],
						scopeOut: [A.createAabbExtents(L.create(0, 1.25), L.create(10, 10))],
						imgs: [{
							sprite: "",
							pos: L.create(0, 1.25),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thicker_17",
						pos: L.create(-9.75, 3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(-6.5, 9.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(6.5, 10.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_18",
						pos: L.create(10.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_7",
						pos: L.create(-7.5, -6.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(8, -7.5),
						scale: 1,
						ori: 1
					}, {
						type: "crate_08",
						pos: L.create(6.5, 6.5),
						scale: 1,
						ori: 2
					}, {
						type: "sandbags_01",
						pos: L.create(4.75, 1.5),
						scale: 1,
						ori: 0,
						inheritOri: !0
					}, {
						type: "lab_door_01",
						pos: L.create(-4, -8.5),
						scale: 1,
						ori: 3
					}, {
						type: "lab_door_01",
						pos: L.create(4, -8.5),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-6, 8.4),
						scale: 1,
						ori: 0
					}, {
						type: "locker_01",
						pos: L.create(-8.35, 6),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-8.35, 1.5),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-8.35, -3),
						scale: 1,
						ori: 1
					}, {
						type: "locker_01",
						pos: L.create(-6, -5.4),
						scale: 1,
						ori: 2
					}]
				},
				metal_wall_column_5x12: T({
					material: "metal",
					extents: L.create(2.5, 6)
				}),
				bunker_hydra_compartment_02: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [A.createAabbExtents(L.create(-2.5, 16), L.create(22, 4)), A.createAabbExtents(L.create(-2.5, 9.5), L.create(6, 2.5))]
						}, {
							type: "tile",
							collision: [A.createAabbExtents(L.create(0, -4.5), L.create(25, 17))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-compartment-floor-02.svg",
							pos: L.create(0, 0),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(-2, 3), L.create(22.5, 19.5))],
						scopeOut: [A.createAabbExtents(L.create(-2, 3), L.create(22.5, 19.5))],
						imgs: [{
							sprite: "",
							pos: L.create(0, 1),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thicker_21",
						pos: L.create(-17, 21.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(12, 21.75),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_42",
						pos: L.create(-26, -.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_29",
						pos: L.create(21, 6),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_6",
						pos: L.create(-19, -18.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(-18.5, -14),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(-15, -15),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_9",
						pos: L.create(-9, -16),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_9",
						pos: L.create(4, -16),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_5",
						pos: L.create(10, -15),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_11",
						pos: L.create(17, -14),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_column_5x12",
						pos: L.create(-14.5, 13),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_column_5x12",
						pos: L.create(9.5, 13),
						scale: 1,
						ori: 1
					}, {
						type: "control_panel_03",
						pos: L.create(-7, 12),
						scale: 1,
						ori: 1
					}, {
						type: "control_panel_03",
						pos: L.create(2, 12),
						scale: 1,
						ori: 3
					}, {
						type: "lab_window_01",
						pos: L.create(-7, 7),
						scale: 1,
						ori: 1
					}, {
						type: "lab_window_01",
						pos: L.create(-4, 7),
						scale: 1,
						ori: 1
					}, {
						type: "lab_window_01",
						pos: L.create(-1, 7),
						scale: 1,
						ori: 1
					}, {
						type: "lab_window_01",
						pos: L.create(2, 7),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_4",
						pos: L.create(-9, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_4",
						pos: L.create(4, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "lab_door_01",
						pos: L.create(-20.5, 13),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_01",
						pos: L.create(15.5, 13),
						scale: 1,
						ori: 3
					}, {
						type: "crate_01",
						pos: L.create(-17.5, 7.75),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(-12.25, 7.5),
						scale: 1,
						ori: 3
					}, {
						type: "vat_01",
						pos: L.create(-12, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(-18, -2.5),
						scale: 1,
						ori: 2
					}, {
						type: "vat_02",
						pos: L.create(-2.5, 1.5),
						scale: 1,
						ori: 2
					}, {
						type: "power_box_01",
						pos: L.create(-2.5, -3),
						scale: 1,
						ori: 2
					}, {
						type: "crate_01",
						pos: L.create(12.5, 7.75),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(7.25, 7.5),
						scale: 1,
						ori: 3
					}, {
						type: "vat_01",
						pos: L.create(7, -2.5),
						scale: 1,
						ori: 2
					}, {
						type: "vat_01",
						pos: L.create(13, -2.5),
						scale: 1,
						ori: 0
					}, {
						type: "vat_01",
						pos: L.create(-10.75, -11.5),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_01",
						pos: L.create(-4.5, -16.5),
						scale: 1,
						ori: 3
					}, {
						type: "vat_01",
						pos: L.create(5.75, -11.5),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_03",
						pos: L.create(-20.5, -16.5),
						scale: 1,
						ori: 1
					}, {
						type: "lab_door_02",
						pos: L.create(20.5, -8.5),
						scale: 1,
						ori: 2
					}]
				},
				bunker_hydra_compartment_03: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 2,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [A.createAabbExtents(L.create(0, 2), L.create(9, 8.75))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-hydra-compartment-floor-03.svg",
							pos: L.create(0, -.5),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, .75), L.create(10, 7.75))],
						scopeOut: [A.createAabbExtents(L.create(0, .75), L.create(10, 7.75))],
						imgs: [{
							sprite: "",
							pos: L.create(0, 1),
							scale: .5,
							alpha: 1,
							tint: 6250335
						}]
					},
					mapObjects: [{
						type: "metal_wall_ext_thicker_17",
						pos: L.create(-10.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_18",
						pos: L.create(0, -8),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_18",
						pos: L.create(10.5, -1),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_14",
						pos: L.create(2, 6),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(-6.5, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_01",
						pos: L.create(-1.75, 2),
						scale: 1,
						ori: 0
					}, {
						type: "barrel_01",
						pos: L.create(-2, -2),
						scale: .9,
						ori: 0
					}, {
						type: "case_03",
						pos: L.create(7, -4),
						scale: 1,
						ori: 3
					}]
				},
				bunker_structure_02: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					mapObstacleBounds: [A.createAabbExtents(L.create(25.5, 3.5), L.create(16, 11.5)), A.createAabbExtents(L.create(-16.5, -89.5), L.create(7, 7.5)), A.createAabbExtents(L.create(40, -47.25), L.create(6.5, 7.25)), A.createAabbExtents(L.create(-5.75, -38.5), L.create(3, 3))],
					layers: [{
						type: "bunker_hydra_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "bunker_hydra_sublevel_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: A.createAabbExtents(L.create(16.4, 3.5), L.create(2.6, 2)),
						downDir: L.create(-1, 0)
					}, {
						collision: A.createAabbExtents(L.create(-16.5, -90.4), L.create(2, 3.1)),
						downDir: L.create(0, 1)
					}, {
						collision: A.createAabbExtents(L.create(40, -50.5), L.create(2, 3.1)),
						downDir: L.create(0, -1)
					}],
					mask: [A.createAabbExtents(L.create(3.5, -7.2), L.create(10.5, 20)), A.createAabbExtents(L.create(-15, -79.75), L.create(5, 8.5)), A.createAabbExtents(L.create(39, -61.85), L.create(12, 9)), A.createAabbExtents(L.create(3.5, -49.2), L.create(23.5, 22)), A.createAabbExtents(L.create(10.5, -76.7), L.create(10, 5.5))]
				},
				bunker_storm_01: {
					type: "building",
					map: {
						display: !0,
						shapes: [{
							collider: A.createAabbExtents(L.create(0, 10), L.create(3.6, 5.8)),
							color: 6707790
						}]
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 0,
					floor: {
						surfaces: [{
							type: "container",
							collision: [A.createAabbExtents(L.create(0, 7.75), L.create(2, 3.25))]
						}, {
							type: "shack",
							collision: [A.createAabbExtents(L.create(0, 13.5), L.create(3.75, 2.5)), A.createAabbExtents(L.create(5, 13.75), L.create(1.25, 2.25))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-storm-floor-01.svg",
							pos: L.create(0, 1),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(0, 10), L.create(3.5, 5.6))],
						scopeOut: [A.createAabbExtents(L.create(0, 10), L.create(3.8, 5.9))],
						vision: {
							width: 4
						},
						imgs: [{
							sprite: "",
							pos: L.create(-1, 10),
							scale: .5,
							alpha: 1,
							tint: 16777215,
							rot: 1
						}],
						destroy: {
							wallCount: 2,
							particle: "shackFrag",
							particleCount: 25,
							residue: "none"
						}
					},
					mapObjects: [{
						type: "metal_wall_ext_short_6",
						pos: L.create(0, 5.3),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(-2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_short_7",
						pos: L.create(2.5, 8.5),
						scale: 1,
						ori: 0
					}, {
						type: "shack_wall_bot",
						pos: L.create(3.39, 8.6),
						scale: 1,
						ori: 1
					}, {
						type: "shack_wall_side_left",
						pos: L.create(.3, 4.52),
						scale: 1,
						ori: 1
					}, {
						type: "shack_wall_top",
						pos: L.create(-3.39, 9.73),
						scale: 1,
						ori: 1
					}, {
						type: "shack_wall_side_right",
						pos: L.create(0, 15.58),
						scale: 1,
						ori: 1
					}, {
						type: "crate_01",
						pos: L.create(-2, 17.9),
						scale: .8,
						ori: 0,
						inheritOri: !1
					}, {
						type: "barrel_01",
						pos: L.create(1.45, 17.7),
						scale: .85,
						ori: 0
					}, {
						type: "stone_01",
						pos: L.create(-4.25, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "bush_01",
						pos: L.create(3.75, -6.75),
						scale: 1,
						ori: 0
					}]
				},
				bunker_storm_sublevel_01: {
					type: "building",
					map: {
						display: !1,
						color: 6707790,
						scale: 1
					},
					terrain: {
						grass: !0,
						beach: !1
					},
					zIdx: 1,
					floor: {
						surfaces: [{
							type: "bunker",
							collision: [A.createAabbExtents(L.create(8.5, -4.5), L.create(18, 9))]
						}],
						imgs: [{
							sprite: "img/map/map-bunker-storm-chamber-floor-01.svg",
							pos: L.create(8.5, -1),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}]
					},
					ceiling: {
						scopeIn: [A.createAabbExtents(L.create(8.5, -4.5), L.create(18, 9.1))],
						scopeOut: [A.createAabbExtents(L.create(8.5, -4.5), L.create(18, 9.1))],
						imgs: [{
							sprite: "",
							pos: L.create(8.5, -1),
							scale: .5,
							alpha: 1,
							tint: 16777215
						}],
						vision: {
							dist: 10,
							width: 5
						}
					},
					mapObjects: [{
						type: "concrete_wall_ext_6",
						pos: L.create(0, 11.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(-3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_8",
						pos: L.create(3.5, 8),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(-7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(7, 5.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_20",
						pos: L.create(-10.5, -3),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_21",
						pos: L.create(-1.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_10",
						pos: L.create(10.5, -11),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_10",
						pos: L.create(12.5, -11),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_15",
						pos: L.create(21.5, -14.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_15",
						pos: L.create(27.5, -5.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_17",
						pos: L.create(20.5, 3.5),
						scale: 1,
						ori: 1
					}, {
						type: "metal_wall_ext_thicker_9",
						pos: L.create(10.5, 2.5),
						scale: 1,
						ori: 0
					}, {
						type: "metal_wall_ext_thicker_4",
						pos: L.create(12.5, 0),
						scale: 1,
						ori: 0
					}, {
						type: "house_door_02",
						pos: L.create(-2, 5),
						scale: 1,
						ori: 3
					}, {
						type: "crate_01",
						pos: L.create(-6.5, 1.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_04",
						pos: L.create(6, -1.5),
						scale: 1,
						ori: 0
					}, {
						type: "crate_04",
						pos: L.create(4, -6.5),
						scale: 1,
						ori: 0
					}, {
						type: "control_panel_03",
						pos: L.create(16, -11.5),
						scale: 1,
						ori: 2
					}, {
						type: "control_panel_02",
						pos: L.create(20, -11.25),
						scale: 1,
						ori: 2
					}, {
						type: "control_panel_03",
						pos: L.create(24, -11.5),
						scale: 1,
						ori: 2
					}, {
						type: "crate_08",
						pos: L.create(23.5, -.5),
						scale: 1,
						ori: 0
					}, {
						type: m({
							case_03: 1,
							chest_02: 9
						}),
						pos: L.create(16.5, .25),
						scale: 1,
						ori: 0
					}, {
						type: "lab_door_01",
						pos: L.create(11.5, -2),
						scale: 1,
						ori: 2
					}, {
						type: "barrel_01",
						pos: L.create(-7, -11),
						scale: .9,
						ori: 0
					}]
				},
				bunker_structure_03: {
					type: "structure",
					terrain: {
						grass: !0,
						beach: !1
					},
					mapObstacleBounds: [A.createAabbExtents(L.create(1, 6), L.create(7, 13.5))],
					layers: [{
						type: "bunker_storm_01",
						pos: L.create(0, 0),
						ori: 0
					}, {
						type: "bunker_storm_sublevel_01",
						pos: L.create(0, 0),
						ori: 0
					}],
					stairs: [{
						collision: A.createAabbExtents(L.create(0, 8.4), L.create(2, 2.6)),
						downDir: L.create(0, -1)
					}],
					mask: [A.createAabbExtents(L.create(8.5, -3.7), L.create(18, 9.5))]
				},
				container_wall_top: T({
					material: "metal",
					extents: L.create(2.75, .4)
				}),
				container_wall_side: T({
					material: "metal",
					extents: L.create(.4, 5.5)
				}),
				container_wall_side_open: T({
					material: "metal",
					extents: L.create(.4, 6)
				}),
				container_01: y({
					open: !1,
					tint: 3560807,
					ceilingSprite: ""
				}),
				container_02: y({
					open: !1,
					tint: 3560807,
					ceilingSprite: ""
				}),
				container_03: y({
					open: !1,
					tint: 3560807,
					ceilingSprite: ""
				}),
				container_04: y({
					open: !0,
					tint: 3560807,
					ceilingSprite: ""
				}),
				loot_tier_1: {
					type: "loot_spawner",
					collision: A.createCircle(L.create(0, 0), 3),
					tier: "tier_world",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_2: {
					type: "loot_spawner",
					collision: A.createCircle(L.create(0, 0), 3),
					tier: "tier_container",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_beach: {
					type: "loot_spawner",
					collision: A.createCircle(L.create(0, 0), 3),
					tier: "tier_world",
					terrain: {
						grass: !1,
						beach: !0
					}
				},
				loot_tier_vault_floor: {
					type: "loot_spawner",
					collision: A.createCircle(L.create(0, 0), 3),
					tier: "tier_vault_floor",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_police_floor: {
					type: "loot_spawner",
					collision: A.createCircle(L.create(0, 0), 3),
					tier: "tier_police_floor",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				loot_tier_mansion_floor: {
					type: "loot_spawner",
					collision: A.createCircle(L.create(0, 0), 3),
					tier: "tier_mansion_floor",
					terrain: {
						grass: !0,
						beach: !0
					}
				},
				decal_barrel_explosion: {
					type: "decal",
					rad: 1,
					img: {
						sprite: "img/map/map-barrel-res-01.svg",
						scale: .24,
						alpha: 1,
						tint: 16777215
					}
				},
				decal_frag_explosion: {
					type: "decal",
					rad: 1,
					img: {
						sprite: "img/map/map-barrel-res-01.svg",
						scale: .2,
						alpha: .8,
						tint: 16777215
					}
				},
				decal_smoke_explosion: {
					type: "decal",
					rad: 1,
					img: {
						sprite: "img/map/map-smoke-res.svg",
						scale: .2,
						alpha: .5,
						tint: 16777215
					}
				}
			};
		e.exports = {
			Defs: E,
			MinScale: .125,
			MaxScale: 2.5,
			oriToRad: o,
			getBoundingCollider: n
		}
	},
	BkwK: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-04-07",
				locale: "ko"
			},
			"word-order": "sov",
			"index-slogan": "2D ë°°í‹€ ë¡œì–„",
			"index-region": "ì›?ë“œ",
			"index-north-america": "ë¶?ì•„ë©?ë¦¬ì¹´",
			"index-europe": "ìœ ëŸ½",
			"index-asia": "ì•„ì‹œì•„",
			"index-players": "í?Œë ˆì?´ì–´",
			"index-play-solo": "ì†?ë¡œí•˜ê¸°",
			"index-play-duo": "ë“€ì˜¤í•˜ê¸°",
			"index-play-squad": "ìŠ¤ì¿¼ë“œí•˜ê¸°",
			"index-create-team": "íŒ€ ë§Œë“¤ê¸°",
			"index-how-to-play": "ì´ˆë³´ìž? ê°€ì?´ë“œ",
			"index-leave-team": "íŒ€ì—?ì„œ ë‚˜ê°€ê¸°",
			"index-joining-team": "íŒ€ ì¡°ì?¸ì¤‘",
			"index-creating-team": "íŒ€ ë§Œë“œëŠ?ì¤‘",
			"index-invite-link": "ì¹œêµ¬ ì´ˆëŒ€",
			"index-solo": "ì†?ë¡œ",
			"index-duo": "ë“€ì˜¤",
			"index-squad": "ìŠ¤ì¿¼ë“œ",
			"index-auto-fill": "Auto Fill",
			"index-no-fill": "No Fill",
			"index-waiting-for-leader": "íŒŒí‹°ìž¥ ì¤€ë¹„ì¤‘",
			"index-play": "ì‹œìž‘",
			"index-featured-youtuber": "ìœ íŠœë²„",
			"index-settings": "ì„¸íŒ…",
			"index-high-resolution": "ê³ í™?ì§ˆ (ê·¸ëž˜í?½ì?„ ë†’ìž…ë‹ˆë‹¤)",
			"index-screen-shake": "í™?ë©´ íš¨ê³¼",
			"index-master-volume": "ì „ì²´ ì‚¬ìš´ë“œ",
			"index-sfx-volume": "íš¨ê³¼ì?Œ ì‚¬ìš´ë“œ",
			"index-music-volume": "ì?Œì•… ì‚¬ìš´ë“œ",
			"index-mobile-announce": "surviv.io ëª¨ë°?ì?¼ ë²„ì „ ì¶œì‹œ!",
			"index-mobile-tooltip": "ëª¨ë°?ì?¼ì—?ì„œ <span>surviv.io</span>ì—? ì ‘ì†?í•´ì„œ í?Œë ˆì?´í•˜ì„¸ìš?!",
			"index-team-is-full": "íŒ€ì?´ ê½‰ ì°¾ìŠµë‹ˆë‹¤!",
			"index-failed-joining-team": "íŒ€ì—? ë“¤ì–´ê°€ì§€ ëª»í–ˆìŠµë‹ˆë‹¤.",
			"index-failed-creating-team": "íŒ€ì?„ ë§Œë“¤ìˆ˜ ì—†ìŠµë‹ˆë‹¤.",
			"index-failed-finding-game": "ê²Œìž„ì?„ ì°¾ì§€ ëª»í•˜ì˜€ìŠµë‹ˆë‹¤.",
			"index-failed-joining-game": "ê²Œìž„ì—? ë“¤ì–´ê°€ì§€ ëª»í–ˆìŠµë‹ˆë‹¤.",
			"index-lost-connection": "ë„¤íŠ¸ì›Œí?¬ ì—°ê²°ì?´ ë?Šì–´ì§?.",
			"index-host-closed": "ë„¤íŠ¸ì›Œí?¬ ì—°ê²°ì?´ ë?Šì–´ì§?.",
			"index-view-more": "ë??ë³´ê¸°",
			"index-back-to-main": "ë©?ì?¸ ë©?ë‰´ë¡œ",
			"index-most-kills": "ìµœë‹¤ í‚¬ìˆ˜",
			"index-total-kills": "ì „ì²´ í‚¬ìˆ˜",
			"index-total-wins": "ìŠ¹ë¦¬ íšŸìˆ˜",
			"index-top-5-percent": "Top 5",
			"index-kill-death-ratio": "K/D",
			"index-for": "For",
			"index-today": "ì˜¤ëŠ˜ ì ?ìˆ˜",
			"index-this-week": "7 ì?¼ ì ?ìˆ˜",
			"index-all-time": "All Time ì ?ìˆ˜",
			"index-top-100": "TOP 100",
			"index-rank": "ëž­í‚¹",
			"index-player": "í?Œë ˆì?´ì–´",
			"index-total-games": "ì „ì²´ê²Œìž„ íšŸìˆ˜",
			"index-controls": "ê²Œìž„ ì¡°ìž‘ë²•",
			"index-movement": "ì?´ë?™",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "ì¡°ì¤€",
			"index-aim-ctrl": "ë§ˆìš°ìŠ¤",
			"index-punch": "íŽ€ì¹˜",
			"index-shoot": "ë°œì‚¬",
			"index-shoot-ctrl": "ì¢Œí?´ë¦­",
			"index-change-weapons": "ë¬´ê¸°ë°?ê¾¸ê¸°",
			"index-change-weapons-ctrl": "1-4 or ìŠ¤í?¬ë¡¤",
			"index-stow-weapons": "ë¬´ê¸° ì§‘ì–´ë„£ê¸°",
			"index-stow-weapons-ctrl": "3 or E",
			"index-swap-weapons": "ê·¸ì „ ë¬´ê¸°ë¡œ ë°?ê¾¸ê¸°",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "ë¦¬ë¡œë“œ",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "ì¤Œ ì?¸ or ì•„ì›ƒ",
			"index-scope-zoom-ctrl": "ì¢Œí?´ë¦­ìœ¼ë¡œ ì¤Œ",
			"index-pickup": "ì¤?ê¸°",
			"index-loot": "ì¤?ê¸°",
			"index-revive": "ë¶€í™œ",
			"index-pickup-ctrl": "F",
			"index-use-medical": "íž?ë§?",
			"index-use-medical-ctrl": "ì¢Œí?´ë¦­, 7-0",
			"index-drop-item": "ì•„ì?´í…œ ë²„ë¦¬ê¸°",
			"index-drop-item-ctrl": "ìš°í?´ë¦­",
			"index-cancel-action": "í–‰ë?™ì·¨ì†Œ",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "ì§€ë?„ë³´ê¸°",
			"index-view-map-ctrl": "M or G",
			"index-toggle-minimap": "ë¯¸ë‹ˆ ë§µ ì „í™˜",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "ë“€ì˜¤/ìŠ¤ì¿¼ë“œ ë©¤ë²„ì™€ ì†Œí†µí•˜ê¸°",
			"index-use-ping-ctrl": "Cë¥¼ ëˆ„ë¥¸ ìƒ?íƒœì—?ì„œ ìš°í?´ë¦­ì?„ í•˜ê³  ë§ˆìš°ìŠ¤ë¥¼ ë“œëž˜ê·¸í•´ ì?´ëª¨í‹°ì½˜ì?„ ì„ íƒ?í•˜ì„¸ìš?!",
			"index-use-emote": "ì?´ëª¨í‹°ì½˜ ì‚¬ìš©í•˜ê¸°",
			"index-use-emote-ctrl": "í™?ë©´ì—? ìš°í?´ë¦­ì?„ ëˆ„ë¥¸ ì±„ ë§ˆìš°ìŠ¤ë¥¼ ë“œëž˜ê·¸í•´ ì?´ëª¨í‹°ì½˜ì?„ ì„ íƒ?í•˜ì„¸ìš?!",
			"index-tips-1-desc": "surviv.ioì?˜ ëª©í‘œëŠ? ë§ˆì§€ë§‰ 1ì?¸, ë˜?ëŠ? ë“€ì˜¤, ë˜?ëŠ? ìŠ¤ì¿¼ë“œê°€ ë?˜ëŠ? ê²ƒìž…ë‹ˆë‹¤! í•œ ê²Œìž„ë‹¹ ëª©ìˆ¨ì?€ í•œ ê°œ - ì£½ìœ¼ë©´ ë‹¤ì‹œ ë¶€í™œí•  ìˆ˜ ì—†ì–´ìš?!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": "PUBG, í?¬íŠ¸ë‚˜ì?´íŠ¸, ë˜?ëŠ? H1Z1ì™€ ê°™ì?€ ë°°í‹€ë¡œì–„ ìž¥ë¥´ì?˜ ê²Œìž„ì?„ ì¢‹ì•„í•˜ì‹ ë‹¤ë©´, ì?´ë¯¸ ë‹¹ì‹ ì?€ surviv.ioì?˜ ì„¸ê³„ì—? ë“¤ì–´ì™€ ìžˆìŠµë‹ˆë‹¤! ì?´ ê²Œìž„ì?€ 2Dë¡œ ë?˜ì–´ ìžˆëŠ? ë°°í‹€ê·¸ë?¼ìš´ë“œë?¼ê³  ìƒ?ê°?í•˜ì‹œë©´ ë?©ë‹ˆë‹¤(ì¡°ê¸ˆ ë?? ì•ˆì •ì ?ì?¸ ì„œë²„ì™€ ë¨¹ê¸° ì‰¬ì›Œì§„ ì¹˜í‚¨ê³¼ í•¨ê»˜ìš?.)",
			"index-tips-3": "íŒŒë°?ê³¼ ì „íˆ¬",
			"index-tips-3-desc": "ë‹¹ì‹ ì?´ ì‹œìž‘í•  ë•Œì—?ëŠ? ìž‘ì?€ ê³µê°„ ì™¸ì—?ëŠ? ì•„ë¬´ê²ƒë?„ ì£¼ì–´ì§€ì§€ ì•ŠìŠµë‹ˆë‹¤. ë§µ ê³³ê³³ì?„ ë?Œì•„ë‹¤ë‹ˆë©° ë¬´ê¸°, íƒ„ì•½, ì¡°ì¤€ê²½, ê·¸ë¦¬ê³  ì?˜ë£Œìš© ì•„ì?´í…œì?„ ì°¾ì•„ë‹¤ë‹ˆì„¸ìš?. ë‹¤ë¥¸ í?Œë ˆì?´ì–´ë¥¼ ì‚¬ì‚´í•˜ë©´ ê·¸ í?Œë ˆì?´ì–´ì?˜ ì•„ì?´í…œì?„ ì°¨ì§€í•  ìˆ˜ ìžˆìŠµë‹ˆë‹¤!",
			"index-tips-4": "ìž?ê¸°ìž¥ = ì œ 2ì?˜ ì ?!",
			"index-tips-4-desc": "ë‹¤ë¥¸ í?Œë ˆì?´ì–´ë§Œì?´ ë‹¹ì‹ ì—?ê²Œ ë?°ë¯¸ì§€ë¥¼ ì£¼ëŠ? ê²ƒì?€ ì•„ë‹™ë‹ˆë‹¤. ì‹œê°„ì?´ ì§€ë‚  ë•Œë§ˆë‹¤ ë¹¨ê°„ìƒ‰ ìž?ê¸°ìž¥ì?´ ì ?ì ? ì¢?í˜€ì˜µë‹ˆë‹¤. ìž?ê¸°ìž¥ ì•ˆì—? ìžˆë‹¤ë©´ ê²½ê¸° í›„ë°˜ìœ¼ë¡œ ê°ˆìˆ˜ë¡? ë†’ì?€ ë?°ë¯¸ì§€ë¥¼ ë°›ê²Œ ë?˜ì£ . ì§€ë?„ë¥¼ ë³´ë©° ì•ˆì „ì—? ì‹ ê²½ì“°ì„¸ìš?!",
			"game-alive": "ìƒ?ì¡´",
			"game-reloading": "ìž¥ì „ì¤‘",
			"game-using": "ì‚¬ìš©ì¤‘",
			"game-reviving": "ë¶€í™œì¤‘",
			"game-revive-teammate": "íŒ€ì›?ë¶€í™œ",
			"game-equip": "ì°©ìš©",
			"game-cancel": "ì·¨ì†Œ",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "í?Œë ˆì?´ì–´ ê¸°ë‹¤ë¦¬ëŠ?ì¤‘",
			"game-spectating": "Spectating",
			"game-red-zone-advances": "ë¹¨ê°„ êµ¬ì—­ ì›€ì§?ìž…ë‹ˆë‹¤!",
			"game-red-zone-advancing": "ë¹¨ê°„ êµ¬ì—­ì?´ ì›€ì§?ìž…ë‹ˆë‹¤.  ì•ˆì „ì§€ëŒ€ë¡œ ëŒ€í?¼í•˜ì‹­ì‹œìš?.",
			"game-seconds": "s",
			"game-minutes": "m",
			"game-minute": "m",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "ê³µê°„ì?´ ë¶€ì¡±í•©ë‹ˆë‹¤!",
			"game-item-already-owned": "ì?´ ë¬¼ê±´ì?€ ì?´ë¯¸ ì†Œìœ  í•˜ê³  ìžˆìŠµë‹ˆë‹¤!",
			"game-item-already-equipped": "ì?´ ë¬¼ê±´ì?€ ì?´ë¯¸ ì°©ìš© í•˜ê³  ìžˆìŠµë‹ˆë‹¤!",
			"game-better-item-equipped": "ë?? ì¢‹ì?€ ì•„ì?´í…œì?„ ì°©ìš© í•˜ê³  ìžˆìŠµë‹ˆë‹¤!",
			"game-play-new-game": "ìƒˆë¡œ ì‹œìž‘í•˜ê¸°",
			"game-spectate": "ê´€ì¤‘ëª¨ë“œ",
			"game-full-screen": "í’€ ìŠ¤í?¬ë¦°",
			"game-sound": "ì‚¬ìš´ë“œ",
			"game-quit-game": "ë‚˜ê°€ê¸°",
			"game-return-to-game": "ë?Œì•„ê°€ê¸°",
			"game-hide-match-stats": "ê²Œìž„í†µê³„Â ê°?ì¶?ê¸°",
			"game-view-match-stats": "ê²Œìž„í†µê³„ ë³´ì?´ê¸°",
			"game-previous-teammate": "ì?´ì „ í?Œë ˆì?´ì–´",
			"game-next-teammate": "ë‹¤ì?Œ í?Œë ˆì?´ì–´",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "ë‚˜ê°€ê¸°",
			"game-your-results": "ëž­í‚¹",
			"game-chicken": "ì?´ê²¼ë‹­! ì˜¤ëŠ˜ ì €ë…?ì?€ ì¹˜í‚¨ì?´ë‹­!",
			"game-won-the-game": "ìŠ¹ë¦¬.",
			"game-team-eliminated": "ê·¸ëŸ´ ìˆ˜ ìžˆì–´. ì?´ëŸ° ë‚ ë?„ ìžˆëŠ? ê±°ì§€ ë­?.",
			"game-rank": "ëž­í‚¹",
			"game-team-rank": "íŒ€ ëž­í‚¹",
			"game-team-kills": "íŒ€ í‚¬",
			"game-kill": "í‚¬",
			"game-kills": "í‚¬",
			"game-damage-dealt": "ê°€í•œ í?¼í•´ëŸ‰",
			"game-damage-taken": "ë°›ì?€ í?¼í•´ëŸ‰",
			"game-survived": "ìƒ?ì¡´ì‹œê°„",
			"game-backpack00": "ì£¼ë¨¸ë‹ˆ",
			"game-backpack01": "ìž‘ì?€ ê°€ë°©",
			"game-backpack02": "ë³´í†µ ê°€ë°©",
			"game-backpack03": "êµ°ì?¸ ê°€ë°©",
			"game-bandage": "ë¶•ëŒ€",
			"game-bandage-tooltip": "ë ˆí?„íŠ¸ í?´ë¦­ í•˜ì‹œë©´ 15 HP ì¦?ê°€í•©ë‹ˆë‹¤.",
			"game-healing-tooltip": "75 HP ì?´ìƒ? íž?í• ìˆ˜ ì—†ì??ë‹ˆë‹¤.",
			"game-healthkit": "êµ¬ê¸‰ ìƒ?ìž?",
			"game-healthkit-tooltip": "ë ˆí?„íŠ¸ í?´ë¦­ í•˜ì‹œë©´Â 100 HP ì¦?ê°€í•©ë‹ˆë‹¤.",
			"game-soda": "ì†Œë‹¤",
			"game-soda-tooltip": "ë ˆí?„íŠ¸ í?´ë¦­ í•˜ì‹œë©´ ì•„ë“œë ˆë‚ ë¦° 25 ì¦?ê°€í•©ë‹ˆë‹¤.",
			"game-adrenaline-tooltip": "ì•„ë“œë ˆë‚ ë¦°ì?€ HP ì§€ì†?ì ?ìœ¼ë¡œ íšŒë³µì‹œí‚´ë‹ˆë‹¤.",
			"game-painkiller": "ì•Œì•½",
			"game-painkiller-tooltip": "ë ˆí?„íŠ¸ í?´ë¦­ í•˜ì‹œë©´ ì•„ë“œë ˆë‚ ë¦°Â 50 ì¦?ê°€í•©ë‹ˆë‹¤.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "M9, Glock, MP5, MAC-10, UMP9, Vector íƒ„ì•½.",
			"game-12gauge": "12 ê²Œì?´ì§€",
			"game-12gauge-tooltip": "M870, SAIGA-12, MP220 íƒ„ì•½.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "AK-47, SCAR-H, M39, Mosin Nagant, OT-38, DP-28 íƒ„ì•½.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "FAMAS, HK416, Mk 12, M249 íƒ„ì•½.",
			"game-chest01": "ì¡°ë?¼ ë ˆë²¨ 1",
			"game-chest02": "ì¡°ë?¼ ë ˆë²¨ 2",
			"game-chest03": "ì¡°ë?¼ ë ˆë²¨ 3",
			"game-helmet01": "í—¬ë©§ ë ˆë²¨ 1",
			"game-helmet02": "í—¬ë©§ ë ˆë²¨ 2",
			"game-helmet03": "í—¬ë©§ ë ˆë²¨ 3",
			"game-1xscope": "1x ìŠ¤ì½?í?„",
			"game-2xscope": "2x ìŠ¤ì½?í?„",
			"game-4xscope": "4x ìŠ¤ì½?í?„",
			"game-8xscope": "8x ìŠ¤ì½?í?„",
			"game-15xscope": "15x ìŠ¤ì½?í?„",
			"game-level-1": "ë ˆë²¨ 1",
			"game-level-2": "ë ˆë²¨ 2",
			"game-level-3": "ë ˆë²¨ 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "ìˆ˜ë¥˜íƒ„",
			"game-hud-frag": "ìˆ˜ë¥˜íƒ„",
			"game-smoke": "ì—°ë§‰íƒ„",
			"game-hud-smoke": "ì—°ë§‰íƒ„",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	CVWn: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = a("9xSA"),
			s = a("0od3"),
			l = a("Tf6H"),
			c = a("/2+T"),
			m = (a("zinx"), a("r4ug"), a("dT1u")),
			d = a("xgte"),
			p = d.RenderType,
			u = function() {
				function e() {
					i(this, e)
				}
				return o(e, [{
					key: "init",
					value: function() {}
				}, {
					key: "free",
					value: function() {
						this.particle.fadeOut(), this.particle = null
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						this.type = e.type, this.pos = c.copy(e.pos), this.rad = e.rad, t && (this.layer = e.layer), a && (this.particle = i.smokeBarn.allocParticle(), this.particle.init(this.pos, this.rad, this.layer)), this.particle.posTarget = c.copy(this.pos), this.particle.radTarget = this.rad
					}
				}]), e
			}(),
			h = function() {
				function e() {
					i(this, e);
					var t = ["img/particles/part-smoke-02.svg", "img/particles/part-smoke-03.svg"];
					this.active = !1, this.zIdx = 0, this.sprite = n.Sprite.fromImage(t[Math.floor(Math.random() * t.length)]), this.sprite.anchor = new n.Point(.5, .5), this.sprite.visible = !1
				}
				return o(e, [{
					key: "init",
					value: function(e, t, a) {
						this.pos = c.copy(e), this.posTarget = c.copy(this.pos), this.rad = t, this.radTarget = this.rad, this.rot = l.random(0, 2 * Math.PI), this.rotVel = Math.PI * l.random(.25, .5) * (Math.random() < .5 ? -1 : 1), this.fade = !1, this.fadeTicker = 0, this.fadeDuration = l.random(.5, .75), this.tint = l.rgb2hex(l.hsv2rgb(0, 0, l.random(.9, .95))), this.layer = a
					}
				}, {
					key: "fadeOut",
					value: function() {
						this.fade = !0
					}
				}]), e
			}(),
			g = function() {
				function e() {
					i(this, e), this.smokePool = new m.Pool(u), this.particles = [], this.zIdx = 2147483647
				}
				return o(e, [{
					key: "allocParticle",
					value: function() {
						for (var e = null, t = 0; t < this.particles.length; t++)
							if (!this.particles[t].active) {
								e = this.particles[t];
								break
							}
						return e || (e = new h, this.particles.push(e)), e.active = !0, e.zIdx = this.zIdx--, e
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o) {
						for (var n = this.smokePool.getPool(), c = 0; c < n.length; c++) {
							n[c].active
						}
						for (var m = 0; m < this.particles.length; m++) {
							var d = this.particles[m];
							if (d.active) {
								d.rad = s.lerp(3 * e, d.rad, d.radTarget), d.pos = s.v2lerp(3 * e, d.pos, d.posTarget);
								d.rotVel *= 1 / (1 + .1 * e), d.rot += d.rotVel * e, d.fadeTicker += d.fade ? e : 0, d.active = d.fadeTicker < d.fadeDuration;
								var u = .9 * s.clamp(1 - d.fadeTicker / d.fadeDuration, 0, 1),
									h = d.layer;
								!(l.sameLayer(d.layer, a.layer) || 2 & a.layer) || 1 != d.layer && 2 & a.layer && i.insideStructureMask(r.createCircle(d.pos, 1)) || (h |= 2), o.addPIXIObj(d.sprite, p.World, h, 500, d.zIdx);
								var g = t.pointToScreen(d.pos),
									f = t.pixels(2 * d.rad / t.ppu);
								d.sprite.position.set(g.x, g.y), d.sprite.scale.set(f, f), d.sprite.rotation = d.rot, d.sprite.tint = d.tint, d.sprite.alpha = .2 * u, d.sprite.visible = d.active
							}
						}
					}
				}]), e
			}();
		e.exports = {
			SmokeBarn: g
		}
	},
	"DI/9": function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = (a("8iex"), a("9xSA")),
			s = a("Bk7F"),
			l = a("0od3"),
			c = a("Tf6H"),
			m = a("/2+T"),
			d = (a("zinx"), a("r4ug"), a("EZ6M")),
			p = a("xgte"),
			u = p.RenderType,
			h = function() {
				function e() {
					i(this, e), this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5)
				}
				return o(e, [{
					key: "init",
					value: function() {
						this.isNew = !1, this.smokeEmitter = null, this.img = ""
					}
				}, {
					key: "free",
					value: function() {
						this.sprite.visible = !1, this.sprite.parent && this.sprite.parent.removeChild(this.sprite), this.isDoor && this.door.casingSprite && (this.door.casingSprite.parent && this.door.casingSprite.parent.removeChild(this.door.casingSprite), this.door.casingSprite = null), this.smokeEmitter && (this.smokeEmitter.stop(), this.smokeEmitter = null)
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						t && (this.type = e.type, this.layer = e.layer, this.healthT = e.healthT, this.dead = e.dead);
						var o = s.Defs[e.type];
						if (this.pos = m.copy(e.pos), this.rot = s.oriToRad(e.ori), this.scale = e.scale, this.imgScale = o.img.scale, this.collider = r.transform(o.collision, this.pos, this.rot, this.scale), a) {
							if (this.isNew = !0, this.exploded = -1 != i.map.deadObstacleIds.indexOf(this.__id), this.explodeParticle = o.explodeParticle, this.hitParticle = o.hitParticle, this.collidable = o.collidable, this.destructible = o.destructible, this.height = o.height, this.sound = o.sound, this.isWall = !!o.isWall, this.isWindow = !!o.isWindow, this.isBush = !!o.isBush, this.isDoor = void 0 !== o.door, this.isDoor) {
								this.door = {
									playErrorFx: o.door.slideToOpen && o.door.openOneWay,
									closedPos: m.copy(e.pos),
									autoOpen: o.door.autoOpen,
									interactionRad: o.door.interactionRad,
									interpSpeed: o.door.openSpeed,
									interpPos: m.copy(e.pos),
									interpRot: s.oriToRad(e.ori),
									seq: e.door.seq,
									seqOld: e.door.seq,
									open: e.door.open,
									wasOpen: e.door.open
								};
								var l = o.door.casingImg;
								if (void 0 !== l) {
									var c = l.pos || m.create(0, 0);
									c = m.rotate(c, this.rot + .5 * Math.PI);
									var d = new n.Sprite;
									d.texture = n.Texture.fromImage(l.sprite), d.anchor.set(.5, .5), d.posOffset = c, d.imgScale = l.scale, d.tint = l.tint, d.zIdx = l.zIdx, d.alpha = l.alpha, d.visible = !0, this.door.casingSprite = d
								}
							}
							this.isButton = void 0 !== o.button, this.isButton && (this.button = {
								interactionRad: o.button.interactionRad,
								seq: e.button.seq,
								seqOld: e.button.seq
							})
						}
						if (this.isDoor && t) {
							this.door.canUse = e.door.canUse, this.door.open = e.door.open, this.door.seq = e.door.seq;
							var p = m.rotate(m.create(o.door.slideOffset, 0), this.rot + .5 * Math.PI);
							this.door.closedPos = e.door.open ? m.add(e.pos, p) : m.copy(e.pos)
						}
						if (this.isButton && t && (this.button.onOff = e.button.onOff, this.button.canUse = e.button.canUse, this.button.seq = e.button.seq), void 0 !== o.explosion && !this.smokeEmitter && e.healthT < .5 && !e.dead) {
							var u = m.normalize(m.create(1, 1));
							this.smokeEmitter = i.particleBarn.addEmitter("smoke_barrel", this.pos, u, 1, this.layer, Number.MAX_VALUE)
						}
						var h = this.dead ? o.img.residue : o.img.sprite;
						if (this.isButton && this.button.onOff && !this.dead && (h = o.button.useImg), h != this.img) {
							var g = m.create(.5, .5);
							this.isDoor && (g = o.door.spriteAnchor);
							var f = void 0 !== h;
							!f && this.sprite.parent && this.sprite.parent.removeChild(this.sprite), f && (this.sprite.texture = "none" == h ? n.Texture.EMPTY : n.Texture.fromImage(h), this.sprite.anchor.set(g.x, g.y), this.sprite.tint = o.img.tint, this.sprite.imgAlpha = this.dead ? .75 : o.img.alpha, this.sprite.zIdx = o.img.zIdx, this.sprite.alpha = this.sprite.imgAlpha), this.sprite.visible = f, this.img = h
						}
					}
				}, {
					key: "getInteraction",
					value: function() {
						return this.isButton && this.button.canUse ? {
							rad: this.button.interactionRad,
							action: "game-use",
							object: "game-" + this.type
						} : this.isDoor && this.door.canUse && !this.door.autoOpen ? {
							rad: this.door.interactionRad,
							action: this.door.open ? "game-close-door" : "game-open-door",
							object: ""
						} : null
					}
				}, {
					key: "update",
					value: function(e, t, a, i, o, n) {
						var p = this.dead,
							h = this.exploded,
							g = this.isNew,
							f = this.pos,
							y = this.explodeParticle,
							b = this.sound;
						if (this.isButton) {
							var x = this.button;
							if (x.seq != x.seqOld) {
								var v = s.Defs[this.type];
								v.button.sound && i.playSound(v.button.sound, {
									channel: "sfx",
									soundPos: f,
									layer: this.layer,
									muffled: !0
								})
							}
							x.seqOld = x.seq
						}
						if (this.isDoor) {
							var k = this.door,
								_ = k.interpSpeed,
								w = m.sub(this.pos, k.interpPos),
								S = m.length(w),
								M = _ * e;
							S < M && (M = S);
							var T = S > 1e-4 ? m.div(w, S) : m.create(1, 0);
							k.interpPos = m.add(k.interpPos, m.mul(T, M));
							var P = Math.PI * k.interpSpeed,
								C = l.angleDiff(k.interpRot, this.rot),
								z = l.sign(C) * P * e;
							if (Math.abs(C) < Math.abs(z) && (z = C), k.interpRot += z, k.seq != k.seqOld) {
								var I = s.Defs[this.type],
									D = I.door.sound.change || "";
								"" != D && i.playSound(D, {
									channel: "sfx",
									soundPos: f,
									layer: this.layer,
									muffled: !0
								}), k.seqOld = k.seq
							}
							if (k.open != k.wasOpen) {
								var A = s.Defs[this.type],
									O = k.open ? A.door.sound.open : A.door.sound.close;
								i.playSound(O, {
									channel: "sfx",
									soundPos: f,
									layer: this.layer,
									muffled: !0
								}), k.wasOpen = k.open
							}
						}
						if (p && !h && (t.deadObstacleIds.push(this.__id), this.exploded = !0, this.smokeEmitter && (this.smokeEmitter.stop(), this.smokeEmitter = null), !g)) {
							for (var L = r.toAabb(this.collider), B = m.mul(m.sub(L.max, L.min), .5), E = m.add(L.min, B), F = Math.floor(c.random(5, 11)), R = 0; R < F; R++) {
								var j = m.mul(m.randomUnit(), c.random(5, 15)),
									N = Array.isArray(y) ? y[Math.floor(Math.random() * y.length)] : y;
								a.addParticle(d.Defs[N], this.layer, E, j)
							}
							i.playSound(b.explode, {
								channel: "sfx",
								soundPos: E,
								layer: this.layer,
								muffled: !0
							})
						}
						if (this.smokeEmitter && (this.smokeEmitter.pos = m.copy(this.pos)), this.sprite.visible) {
							var q = this.dead ? 5 : this.sprite.zIdx,
								G = this.__id,
								U = this.layer;
							!this.dead && q >= 50 && 0 == this.layer && 0 == o.layer && (q += 100, U |= 2), n.addPIXIObj(this.sprite, u.World, U, q, G), this.isDoor && this.door.casingSprite && n.addPIXIObj(this.door.casingSprite, u.World, U, q + this.door.casingSprite.zIdx, G)
						}
						this.isNew = !1
					}
				}, {
					key: "render",
					value: function(e) {
						var t = this.isDoor ? this.door.interpPos : this.pos,
							a = this.isDoor ? this.door.interpRot : this.rot,
							i = this.scale,
							o = e.pointToScreen(t),
							n = e.pixels(i * this.imgScale);
						if (this.sprite.position.set(o.x, o.y), this.sprite.scale.set(n, n), this.sprite.rotation = -a, this.sprite.alpha = this.sprite.imgAlpha, this.isDoor && this.door.casingSprite) {
							var r = e.pointToScreen(m.add(this.door.closedPos, this.door.casingSprite.posOffset)),
								s = e.pixels(i * this.door.casingSprite.imgScale);
							this.door.casingSprite.position.set(r.x, r.y), this.door.casingSprite.scale.set(s, s), this.door.casingSprite.rotation = -a
						}
					}
				}, {
					key: "playHitFx",
					value: function(e, t, a, i, o) {
						for (var n = s.Defs[this.type], r = Math.floor(c.random(1, 2)), l = m.mul(t, 9.5), p = 0; p < r; p++) l = m.rotate(l, (Math.random() - .5) * Math.PI / 3), i.addParticle(d.Defs[this.hitParticle], a, e, l);
						o.playGroup(n.sound.bullet, {
							channel: "hits",
							soundPos: e,
							layer: a,
							muffled: !0
						})
					}
				}]), e
			}();
		e.exports = h
	},
	DM7t: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("DlZn"),
			r = {
				Invalid: 0,
				Player: 1,
				Obstacle: 2,
				Loot: 3,
				LootSpawner: 4,
				DeadBody: 5,
				Building: 6,
				Structure: 7,
				Decal: 8,
				Projectile: 9,
				Smoke: 10
			},
			s = 65535,
			l = function() {
				function e() {
					i(this, e), this.objects = [], this.idToObj = [];
					for (var t = 0; t < s; t++) this.idToObj[t] = null;
					this.idToType = new Uint8Array(s), this.dirtyPart = new Uint8Array(s), this.dirtyFull = new Uint8Array(s), this.idNext = 1, this.freeLists = {}
				}
				return o(e, [{
					key: "allocId",
					value: function(e) {
						var t = 1;
						if (this.idNext < s) t = this.idNext++;
						else {
							var a = this.freeLists[e] || [];
							a.length > 0 ? t = a.pop() : n(!1)
						}
						return t
					}
				}, {
					key: "freeId",
					value: function(e, t) {
						this.freeLists[e] = this.freeLists[e] || [], this.freeLists[e].push(t)
					}
				}, {
					key: "register",
					value: function(e, t) {
						var a = this.allocId(t);
						e.__id = a, e.__type = t, e.__arrayIdx = this.objects.length, this.objects[e.__arrayIdx] = e, this.idToObj[a] = e, this.idToType[a] = t, this.dirtyPart[a] = 1, this.dirtyFull[a] = 1
					}
				}, {
					key: "unregister",
					value: function(e) {
						n(e.__id > 0);
						var t = this.objects.pop();
						e !== t && (this.objects[e.__arrayIdx] = t, t.__arrayIdx = e.__arrayIdx), this.idToObj[e.__id] = null, this.freeId(e.__type, e.__id), this.idToType[e.__id] = 0, this.dirtyPart[e.__id] = 0, this.dirtyFull[e.__id] = 0, e.__id = 0, e.__type = 0
					}
				}]), e
			}();
		e.exports = {
			MAX_ID: s,
			Type: r,
			Registrar: l
		}
	},
	DMc6: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-03-03",
				locale: "pl"
			},
			"word-order": "svo",
			"index-slogan": "Battle Royale 2D",
			"index-region": "Region",
			"index-north-america": "PÃ³Å‚nocna Ameryka",
			"index-europe": "Europa",
			"index-asia": "Azja",
			"index-players": "Gracze",
			"index-play-solo": "Graj sam",
			"index-play-duo": "Graj razem",
			"index-play-squad": "Graj oddziaÅ‚",
			"index-create-team": "StwÃ³rz grupÄ™",
			"index-how-to-play": "Jak GraÄ‡",
			"index-leave-team": "WyjdÅº z grupy",
			"index-joining-team": "Wchodzenie do grupy",
			"index-creating-team": "Tworzenie grupy",
			"index-invite-link": "Link ZapraszajÄ…cy",
			"index-solo": "Solo",
			"index-duo": "WspÃ³lna gra",
			"index-squad": "DruÅ¼yna",
			"index-auto-fill": "Automatyczne UzupeÅ‚nianie",
			"index-no-fill": "Bez UzupeÅ‚niania",
			"index-waiting-for-leader": "Czekanie na przywÃ³dce do rozpoczÄ™cia gry...",
			"index-play": "Graj",
			"index-featured-youtuber": "WyrÃ³Å¼niony YouTuber",
			"index-settings": "Ustawienia",
			"index-high-resolution": "Wysoka RozdzielczoÅ›Ä‡ (zaznacz aby poprawiÄ‡ jakoÅ›Ä‡ wizualnÄ…)",
			"index-screen-shake": "TrzÄ™sienie ekranu",
			"index-master-volume": "GÅ‚oÅ›noÅ›Ä‡ ogÃ³lnÄ…",
			"index-sfx-volume": "GÅ‚oÅ›noÅ›Ä‡ efektÃ³w dÅºwiÄ™kowych",
			"index-music-volume": "GÅ‚oÅ›noÅ›Ä‡ muzyki",
			"index-team-is-full": "Grupa jest peÅ‚na!",
			"index-failed-joining-team": "Nie udaÅ‚o siÄ™ doÅ‚Ä…czyÄ‡ do grupy.",
			"index-failed-creating-team": "Nie udaÅ‚o siÄ™ stworzyÄ‡ grupy.",
			"index-failed-finding-game": "Nie znaleziono gry.",
			"index-failed-joining-game": "Nie udaÅ‚o siÄ™ doÅ‚Ä…czyÄ‡ do gry.",
			"index-lost-connection": "Utracono poÅ‚Ä…czenie z grupÄ….",
			"index-host-closed": "Host zamnknÄ…Å‚ poÅ‚Ä…czenie.",
			"index-invalid-protocol": "PrzestarzaÅ‚a wersja klienta.",
			"index-view-more": "Zobacz wiÄ™cej",
			"index-back-to-main": "PowrÃ³t na StronÄ™ GÅ‚Ã³wnÄ…",
			"index-most-kills": "NajwiÄ™cej ZabiÄ‡",
			"index-total-kills": "Wszystkie Zabicia",
			"index-total-wins": "Wszystkie Wygrane",
			"index-top-5-percent": "Najlepsze 5 procent",
			"index-kill-death-ratio": "Åšrednia zabÃ³jstw do zgonÃ³w",
			"index-for": "Dla",
			"index-today": "Dzisiaj",
			"index-this-week": "Ten TydzieÅ„",
			"index-all-time": "Od poczÄ…tku",
			"index-top-100": "Najlepsze 100",
			"index-rank": "Ranga",
			"index-player": "Gracz",
			"index-total-games": "Wszystkie Gry",
			"index-controls": "Sterowanie",
			"index-movement": "Ruch",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Celowanie",
			"index-aim-ctrl": "Myszka",
			"index-punch": "Uderzenie",
			"index-shoot": "StrzaÅ‚",
			"index-shoot-ctrl": "Lewy Przycisk Myszy",
			"index-change-weapons": "ZmieÅ„ BroÅ„",
			"index-change-weapons-ctrl": "1 do 4 albo kÃ³Å‚ko myszy",
			"index-stow-weapons": "Schowaj BroÅ„ (Tryb PiÄ™Å›ci)",
			"index-stow-weapons-ctrl": "3 lub E",
			"index-swap-weapons": "ZmieÅ„ na poprzedniÄ… broÅ„",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "PrzeÅ‚aduj",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "PrzybliÅ¼enie",
			"index-scope-zoom-ctrl": "Lewy Przycisk Myszy lub PrzybliÅ¼enie",
			"index-pickup": "PodnieÅ›",
			"index-loot": "Å?up",
			"index-revive": "WskrzeÅ›",
			"index-pickup-ctrl": "F",
			"index-use-medical": "UÅ¼yj przyboru medycznego",
			"index-use-medical-ctrl": "Lewy Przycisk Myszy na przyborze, lub 7 do 0",
			"index-drop-item": "UpuÅ›Ä‡",
			"index-drop-item-ctrl": "Prawy Przycisk Myszy na przedmiocie",
			"index-cancel-action": "Przerwij czynnoÅ›Ä‡",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "PokaÅ¼ MapÄ™",
			"index-view-map-ctrl": "M albo G",
			"index-toggle-minimap": "Minimapa",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "UÅ¼yj menu znacznikÃ³w druÅ¼ynowych",
			"index-use-ping-ctrl": "Przytrzymaj C, nastÄ™pnie przytrzymaj Prawy Przycisk Myszy i przesuÅ„ myszÄ… po czym puÅ›Ä‡ Prawy Przycisk Myszy",
			"index-use-emote": "UÅ¼yj menu emotikon",
			"index-use-emote-ctrl": "Przytrzymaj Prawy Przycisk Myszy i przesuÅ„ myszÄ… po czym puÅ›Ä‡ Prawy Przycisk Myszy",
			"index-tips-1-desc": "Celem surviv.io jest pozostanie ostatniom zyjÄ…cym graczem. Å»yjesz tylko raz na gre - tutaj nie ma odrodzeÅ„!",
			"index-tips-2": "PUBG 2D",
			"index-tips-2-desc": "JeÅ›li kiedykolwiek graÅ‚eÅ› w grÄ™ typu Battle Royale jak PUBG, Fortnite czy H1Z1, to juÅ¼ jesteÅ› w poÅ‚owie drogi! WyobraÅº sobie, Å¼e surviv.io to taki PUBG 2D.",
			"index-tips-3": "Zbieraj i Zabijaj",
			"index-tips-3-desc": "Rozpoczynasz grÄ™ bez Å¼adnych przedmiotÃ³w, nie liczÄ…c podstawowego plecaka. Poruszaj siÄ™ po mapie aby znaleÅºÄ‡ przedmioty typu: broÅ„, amunicja, lunety i medykamenty. Wyeliminuj pozostaÅ‚ych graczy i zabierz ich przedmioty!",
			"index-tips-4": "Czerwone = ZÅ‚e!",
			"index-tips-4-desc": "Nie tylko gracze mogÄ… ciÄ™ zraniÄ‡. Mordercza czerwona strefa bÄ™dzie zmniejszaÄ‡ siÄ™ z rÃ³Å¼nych stron mapy i bÄ™dzie zadawaÄ‡ coraz wiÄ™ksze obraÅ¼enia jeÅ›li bÄ™dziesz w niej pozostawaÄ‡. SpoglÄ…daj na mape i pilnuj siÄ™.",
			"game-alive": "Å»ywych",
			"game-reloading": "PrzeÅ‚adowanie",
			"game-using": "UÅ¼ywanie",
			"game-reviving": "Wskrzeszanie",
			"game-revive-teammate": "WskrzeÅ› Przyjaciela",
			"game-equip": "WeÅº",
			"game-cancel": "Przerwij",
			"game-open-door": "OtwÃ³rz Drzwi",
			"game-close-door": "Zamknij Drzwi",
			"game-You": "Ty",
			"game-you": "ty",
			"game-themselves": "oni",
			"game-yourself": "siebie",
			"game-you-died": "umarÅ‚eÅ›",
			"game-player-died": "umarÅ‚",
			"game-with": "z",
			"game-knocked-out": "powaliÅ‚",
			"game-killed": "zabiÅ‚",
			"game-finally-killed": "wresczie zabiÅ‚",
			"game-finally-bled-out": "w koÅ„cu siÄ™ wykrwawiÅ‚",
			"game-died-outside": "umarÅ‚ poza strefÄ…",
			"game-the-red-zone": "Czerwona strefa",
			"game-waiting-for-players": "Oczekiwanie na graczy",
			"game-spectating": "Obserwujesz",
			"game-red-zone-advances": "Czerwona strefa zmniejszy siÄ™ za",
			"game-red-zone-advancing": "Czerwona strefa zmniejsza siÄ™, udaj siÄ™ do bezpiecznej strefy!",
			"game-seconds": "sekundy",
			"game-minutes": "minuty",
			"game-minute": "minuta",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Za maÅ‚o miejsca!",
			"game-item-already-owned": "Posiadasz juÅ¼ ten przedmiot!",
			"game-item-already-equipped": "UÅ¼ywasz juÅ¼ tego przedmiotu!",
			"game-better-item-equipped": "Posiadasz lepszy przedmiot!",
			"game-play-new-game": "Graj jescze raz",
			"game-spectate": "Obserwuj",
			"game-full-screen": "PeÅ‚ny Ekran",
			"game-sound": "DzwiÄ™k",
			"game-quit-game": "WyjdÅº z gry",
			"game-return-to-game": "WrÃ³Ä‡ do gry",
			"game-hide-match-stats": "Ukryj statystyki",
			"game-view-match-stats": "WyÅ›wietl statystyki",
			"game-previous-teammate": "Poprzedni przyjaciel",
			"game-next-teammate": "NastÄ™pny przyjaciel",
			"game-spectate-previous": "",
			"game-spectate-next": "",
			"game-leave-game": "WyjdÅº z gry",
			"game-your-results": "Twoje rezultaty",
			"game-chicken": "Mecz wygrany! Kurczak podany!",
			"game-won-the-game": "wygraÅ‚ grÄ™.",
			"game-team-eliminated": "Twoja grupa zostaÅ‚a wyeliminowana.",
			"game-rank": "Ranga",
			"game-team-rank": "Ranga Grupy",
			"game-team-kills": "Zabicia Grupy",
			"game-kill": "ZabiÄ‡",
			"game-kills": "ZabiÄ‡",
			"game-damage-dealt": "Zadano obraÅ¼eÅ„",
			"game-damage-taken": "Otrzymano obraÅ¼eÅ„",
			"game-survived": "Przetrwano",
			"game-backpack00": "Kieszonka",
			"game-backpack01": "MaÅ‚y plecak",
			"game-backpack02": "Plecak",
			"game-backpack03": "Wojskowy plecak",
			"game-bandage": "BandaÅ¼",
			"game-bandage-tooltip": "Kliknij lewym przyciskiem myszy aby przywrÃ³ciÄ‡ 15 punktÃ³w zdrowia.",
			"game-healing-tooltip": "Nie leczy powyÅ¼ej 75 punktÃ³w zdrowia.",
			"game-healthkit": "Apteczka",
			"game-healthkit-tooltip": "Kliknij lewym przyciskiem myszy aby przywrÃ³ciÄ‡ 100 punktÃ³w zdrowia.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Kliknij lewym przyciskiem myszy aby zwiÄ™kszyÄ‡ adrenalinÄ™ o 25.",
			"game-adrenaline-tooltip": "Adrenalina przywraca zdrowie w miare upÅ‚ywu czasu.",
			"game-painkiller": "PiguÅ‚ki",
			"game-painkiller-tooltip": "Kliknij lewym przyciskiem myszy aby zwiÄ™kszyÄ‡ adrenalinÄ™ o 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Amunicja dla M9, Glock, MP5, MAC-10, UMP9 i Vector.",
			"game-12gauge": "Kaliber 12",
			"game-12gauge-tooltip": "Amunicja dla M870, Saiga-12 i MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Amunicja dla AK-47, SCAR-H, M39, Mosin Nagant, OT-38 i DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Amunicja dla FAMAS, HK416, Mk 12 i M249.",
			"game-chest01": "Kamizelka Poziom 1",
			"game-chest02": "Kamizelka Poziom 2",
			"game-chest03": "Kamizelka Poziom 3",
			"game-helmet01": "HeÅ‚m Poziom 1",
			"game-helmet02": "HeÅ‚m Poziom 2",
			"game-helmet03": "HeÅ‚m Poziom 3",
			"game-1xscope": "1x Luneta",
			"game-2xscope": "2x Luneta",
			"game-4xscope": "4x Luneta",
			"game-8xscope": "8x Luneta",
			"game-15xscope": "15x Luneta",
			"game-level-1": "P. 1",
			"game-level-2": "P. 2",
			"game-level-3": "P. 3",
			"game-outfitBase": "StrÃ³j",
			"game-outfitRoyalFortune": "Powodzenie KrÃ³la",
			"game-outfitKeyLime": "Limonka",
			"game-outfitCobaltShell": "Skorupa",
			"game-outfitCarbonFiber": "WÅ‚Ã³kno WÄ™glowe",
			"game-outfitDarkGloves": "Profesjonalista",
			"game-outfitGhillie": "Kameleon",
			"game-outfitCamo": "Polowanie",
			"game-outfitRed": "Trenowanie",
			"game-outfitWhite": "Arktyka",
			"game-outfitWoodland": "LeÅ›na Walka",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-frag": "Granat OdÅ‚amkowy",
			"game-hud-frag": "OdÅ‚amkowy",
			"game-barrel_01": "beczkÄ…",
			"game-silo_01": "silosem",
			"game-oven_01": "piekarnik"
		};
		e.exports = i
	},
	EZ6M: function(e, t, a) {
		"use strict";

		function i(e, t) {
			this.min = e, this.max = t
		}

		function o(e) {
			return e instanceof i ? e.getRandom() : e
		}

		function n(e) {
			return e instanceof Function ? e() : e
		}

		function r() {
			this.active = !1, this.ticker = 0, this.def = {}, this.sprite = new m.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.scale.set(1, 1), this.sprite.visible = !1, this.hasParent = !1
		}

		function s() {
			this.active = !1
		}

		function l(e) {
			this.renderer = e, this.particles = [], this.emitters = [];
			for (var t = 0; t < 256; t++) this.particles[t] = new r(this.display)
		}
		var c = a("DlZn"),
			m = a("gKxX"),
			d = a("0od3"),
			p = a("Tf6H"),
			u = a("/2+T"),
			h = a("xgte"),
			g = h.RenderType;
		i.prototype = {
			getRandom: function() {
				return p.random(this.min, this.max)
			}
		};
		var f = {
				bloodSplat: {
					image: ["img/particles/part-splat-01.svg", "img/particles/part-splat-02.svg", "img/particles/part-splat-03.svg"],
					life: .5,
					drag: 1,
					rotVel: 0,
					scale: {
						start: .04,
						end: new i(.15, .2),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.75, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(16711680, 1, p.random(.45, .8)))
					}
				},
				rockChip: {
					image: ["img/map/map-stone-01.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
					}
				},
				rockFrag: {
					image: ["img/map/map-stone-01.svg"],
					life: new i(.8, 1),
					drag: new i(1, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
					}
				},
				woodChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.35, .45)))
					}
				},
				woodLog: {
					image: ["img/particles/part-log-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.35, .45)))
					}
				},
				woodPlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.25, .35)))
					}
				},
				woodShard: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(1, 1.5),
					drag: new i(3, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.06, .15),
						end: new i(.02, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.05, 1, p.random(.25, .35)))
					}
				},
				whitePlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
					}
				},
				redPlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.02, 1, p.random(.26, .28)))
					}
				},
				barrelPlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(3, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.08, .18),
						end: new i(.07, .17),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.09, .8, p.random(.66, .68)))
					}
				},
				shackFrag: {
					image: ["img/particles/part-panel-01.svg"],
					life: new i(.5, 1.5),
					drag: new i(1, 5),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.25, .55),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.1, .24, p.random(.38, .41)))
					}
				},
				outhouseFrag: {
					image: ["img/particles/part-panel-01.svg"],
					life: new i(.5, 1.5),
					drag: new i(1, 5),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.25, .55),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .79, p.random(.52, .54)))
					}
				},
				outhouseChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .57, p.random(.4, .46)))
					}
				},
				outhousePlank: {
					image: ["img/particles/part-plank-01.svg"],
					life: new i(1, 1.5),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.1, .2),
						end: new i(.08, .18),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .57, p.random(.4, .46)))
					}
				},
				barrelChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
					}
				},
				barrelFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.8, 1),
					drag: new i(1, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
					}
				},
				toiletMetalFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.8, 1),
					drag: new i(4, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.01, .02, p.random(.38, .41)))
					}
				},
				depositBoxGreyFrag: {
					image: ["img/particles/part-plate-01.svg"],
					life: new i(.5, 1),
					drag: new i(7, 8),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.15, .25),
						end: new i(.12, .2),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.36, .38)))
					}
				},
				depositBoxGoldFrag: {
					image: ["img/particles/part-plate-01.svg"],
					life: new i(.5, 1),
					drag: new i(6, 8),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.2, .35),
						end: new i(.18, .25),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.11, .84, p.random(.64, .66)))
					}
				},
				lockerFrag: {
					image: ["img/particles/part-plate-01.svg"],
					life: new i(.5, 1),
					drag: new i(7, 8),
					rotVel: new i(0, 3 * Math.PI),
					scale: {
						start: new i(.15, .2),
						end: new i(.12, .15),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.1, .23, p.random(.51, .53)))
					}
				},
				book: {
					image: ["img/particles/part-book-01.svg"],
					life: new i(1, 1.5),
					drag: new i(3, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.09, .19),
						end: new i(.07, .17),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.08, .42, p.random(.72, .74)))
					}
				},
				goldChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.11, .84, p.random(.88, .9)))
					}
				},
				greenChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.4, .18, p.random(.5, .62)))
					}
				},
				whiteChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
					}
				},
				glassChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 5),
					rotVel: new i(1 * Math.PI, 6 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: 8444415
				},
				tanChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.1, .35, p.random(.48, .52)))
					}
				},
				ltgreenChip: {
					image: ["img/particles/part-woodchip-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.2, .42, p.random(.38, .42)))
					}
				},
				brickChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, .71, p.random(.32, .34)))
					}
				},
				redChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.98, 1, p.random(.52, .54)))
					}
				},
				blueChip: {
					image: ["img/particles/part-spark-02.svg"],
					life: .5,
					drag: new i(1, 10),
					rotVel: 0,
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.64, 1, p.random(.83, .85)))
					}
				},
				windowFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.4, .8),
					drag: new i(1, 4),
					rotVel: new i(1 * Math.PI, 6 * Math.PI),
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: .8,
						end: 0,
						lerp: new i(.75, 1)
					},
					color: 8444415
				},
				toiletFrag: {
					image: ["img/particles/part-spark-02.svg"],
					life: new i(.8, 1),
					drag: new i(1, 5),
					rotVel: 0,
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(.97, 0, p.random(.95, .97)))
					}
				},
				leaf: {
					image: ["img/particles/part-leaf-01.svg"],
					life: new i(.5, 1),
					drag: new i(1, 5),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: new i(.04, .08),
						end: new i(.01, .02),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.5, .75)))
					}
				},
				"9mm": {
					image: ["img/particles/part-shell-01.svg"],
					life: new i(.5, .75),
					drag: new i(3, 4),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: .0625,
						end: .0325,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"762mm": {
					image: ["img/particles/part-shell-02.svg"],
					life: new i(.75, 1),
					drag: new i(1.5, 2.5),
					rotVel: new i(2.5 * Math.PI, 2.5 * Math.PI),
					scale: {
						start: .075,
						end: .045,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.925, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"556mm": {
					image: ["img/particles/part-shell-04.svg"],
					life: new i(.75, 1),
					drag: new i(1.5, 2.5),
					rotVel: new i(2.5 * Math.PI, 2.5 * Math.PI),
					scale: {
						start: .075,
						end: .045,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.925, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"12gauge": {
					image: ["img/particles/part-shell-03.svg"],
					life: new i(.5, .75),
					drag: new i(1, 2),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: .1,
						end: .05,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				"50AE": {
					image: ["img/particles/part-shell-01.svg"],
					life: new i(.5, .75),
					drag: new i(3, 4),
					rotVel: new i(3 * Math.PI, 3 * Math.PI),
					scale: {
						start: .0625,
						end: .0325,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.95, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				},
				fragPin: {
					image: ["img/particles/part-frag-pin-01.svg"],
					life: new i(.5, .5),
					drag: new i(.9, 1),
					rotVel: 0,
					scale: {
						start: .18,
						end: .14,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.5, 1)
					},
					color: 16777215
				},
				fragLever: {
					image: ["img/particles/part-frag-lever-01.svg"],
					life: new i(.5, .5),
					drag: new i(.9, 1),
					rotVel: 9 * Math.PI,
					scale: {
						start: .18,
						end: .14,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.5, 1)
					},
					color: 16777215
				},
				explosionBurst: {
					image: ["img/particles/part-frag-burst-01.svg"],
					life: .5,
					drag: 0,
					rotVel: 0,
					scale: {
						start: 1,
						end: 4,
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.75, 1)
					},
					color: 8487297
				},
				explosionSmoke: {
					image: ["img/particles/part-smoke-01.svg"],
					life: new i(2, 3),
					drag: 0,
					rotVel: new i(.25 * Math.PI, .5 * Math.PI),
					scale: {
						start: new i(.07, .12),
						end: new i(.05, .1),
						lerp: new i(0, 1)
					},
					alpha: {
						start: 1,
						end: 0,
						lerp: new i(.9, 1)
					},
					color: function() {
						return p.rgb2hex(p.hsv2rgb(0, 0, p.random(.9, .95)))
					}
				}
			},
			y = {
				smoke_barrel: {
					particle: "explosionSmoke",
					rate: new i(.2, .3),
					radius: 0,
					speed: new i(2, 3),
					angle: .1 * Math.PI,
					maxCount: Number.MAX_VALUE
				}
			};
		r.prototype = {
			init: function(e, t, a, i, r, s, l, c) {
				this.active = !0, this.ticker = 0, c ? (this.hasParent = !0, c.addChild(this.sprite)) : (this.hasParent = !1, e.addPIXIObj(this.sprite, g.Particle, a, 20)), this.pos = u.copy(i), this.vel = u.copy(r), this.rot = l, this.def = t, this.life = o(t.life), this.drag = o(t.drag), this.rotVel = o(t.rotVel) * (Math.random() < .5 ? -1 : 1), this.rotDrag = o(t.drag) / 2, this.scaleStart = o(t.scale.start) * s, this.scaleEnd = o(t.scale.end) * s, this.alphaStart = o(t.alpha.start), this.alphaEnd = o(t.alpha.end);
				var d = Array.isArray(t.image) ? t.image[Math.floor(Math.random() * t.image.length)] : t.image;
				this.sprite.texture = m.Texture.fromImage(d), this.sprite.tint = n(t.color), this.sprite.visible = !0
			},
			free: function() {
				this.active = !1, this.sprite.visible = !1
			}
		}, s.prototype = {
			init: function(e, t, a, i, o, n) {
				this.active = !0, this.enabled = !0, this.type = e, this.pos = u.copy(t), this.dir = u.copy(a), this.scale = i, this.layer = o, this.duration = n, this.ticker = 0, this.nextSpawn = 0, this.spawnCount = 0
			},
			free: function() {
				this.active = !1
			},
			stop: function() {
				this.duration = this.ticker
			}
		}, l.prototype = {
			addParticle: function(e, t, a, i, o, n, s) {
				c(void 0 !== e);
				for (var l = null, m = 0; m < this.particles.length; m++)
					if (!this.particles[m].active) {
						l = this.particles[m];
						break
					}
				return l || (l = new r, this.particles.push(l)), o = void 0 !== o ? o : 1, n = void 0 !== n ? n : Math.random() * Math.PI * 2, l.init(this.renderer, e, t, a, i, o, n, s), l
			},
			addEmitter: function(e, t, a, i, o, n) {
				for (var r = null, l = 0; l < this.emitters.length; l++)
					if (!this.emitters[l].active) {
						r = this.emitters[l];
						break
					}
				return r || (r = new s, this.emitters.push(r)), r.init(e, t, a, i, o, n), r
			},
			update: function(e, t) {
				for (var a = 0; a < this.emitters.length; a++) {
					var i = this.emitters[a];
					if (i.active && i.enabled) {
						i.ticker;
						i.ticker += e, i.nextSpawn -= e;
						for (var n = y[i.type]; i.nextSpawn <= 0 && i.spawnCount < n.maxCount;) {
							var r = i.scale * n.radius,
								s = u.add(i.pos, u.mul(u.randomUnit(), Math.random() * r)),
								l = u.rotate(i.dir, (Math.random() - .5) * n.angle),
								c = u.mul(l, o(n.speed)),
								m = Math.random() * Math.PI * 2;
							this.addParticle(f[n.particle], i.layer, s, c, i.scale, m, null);
							i.nextSpawn += o(n.rate), i.spawnCount++
						}
						i.ticker >= i.duration && i.free()
					}
				}
				for (var p = 0; p < this.particles.length; p++) {
					var h = this.particles[p];
					if (h.active) {
						h.vel = u.mul(h.vel, 1 / (1 + e * h.drag)), h.pos = u.add(h.pos, u.mul(h.vel, e)), h.rotVel *= 1 / (1 + e * h.rotDrag), h.rot += h.rotVel * e, h.ticker += e;
						var g = Math.min(h.ticker / h.life, 1),
							b = h.hasParent ? h.pos : t.pointToScreen(h.pos),
							x = d.remap(g, h.def.scale.lerp.min, h.def.scale.lerp.max, h.scaleStart, h.scaleEnd),
							v = d.remap(g, h.def.alpha.lerp.min, h.def.alpha.lerp.max, h.alphaStart, h.alphaEnd);
						h.hasParent || (x = t.pixels(x)), h.sprite.position.set(b.x, b.y), h.sprite.scale.set(x, x), h.sprite.rotation = h.rot, h.sprite.alpha = v, g >= 1 && h.free()
					}
				}
			}
		}, e.exports = {
			Defs: f,
			ParticleBarn: l
		}
	},
	FRcz: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-03-17",
				locale: "fr"
			},
			"word-order": "svo",
			"index-slogan": "2d Battle royale",
			"index-region": "RÃ©gion",
			"index-north-america": "AmÃ©rique du Nord",
			"index-europe": "Europe",
			"index-asia": "Asie",
			"index-players": "joueurs",
			"index-play-solo": "Jouer en solo",
			"index-play-duo": "Jouer en duo",
			"index-play-squad": "Jouer en squad",
			"index-join-team": "Joindre une Ã©quipe",
			"index-create-team": "CrÃ©er une Ã©quipe",
			"index-how-to-play": "Comment jouer",
			"index-leave-team": "Quitter lâ€™Ã©quipe",
			"index-joining-team": "Rejoindre lâ€™Ã©quipe",
			"index-creating-team": "CrÃ©ation d'une Ã©quipe",
			"index-invite-link": "Lien d'invitation",
			"index-solo": "Solo",
			"index-duo": "Duo",
			"index-squad": "Squad",
			"index-auto-fill": "Remplir",
			"index-no-fill": "Ne pas remplir",
			"index-waiting-for-leader": "En attente du chef pour dÃ©buter",
			"index-play": "Jouer",
			"index-featured-youtuber": "Youtubeur en vedette",
			"index-settings": "ParamÃ¨tres",
			"index-high-resolution": "Haute rÃ©solution (cocher pour une meilleure qualitÃ©)",
			"index-screen-shake": "Tremblement d'Ã©cran",
			"index-master-volume": "Volume principal",
			"index-sfx-volume": "Volume des effets",
			"index-music-volume": "Volume de la musique",
			"index-mobile-announce": "Maintenant disponible sur mobile !",
			"index-mobile-tooltip": "Visitez <span>surviv.io</span> depuis votre mobile pour pouvoir jouer partout !",
			"index-team-is-full": "L'Ã©quipe est pleine!",
			"index-failed-joining-team": "Impossible de joindre l'Ã©quipe.",
			"index-failed-creating-team": "Impossible de crÃ©er l'Ã©quipe.",
			"index-failed-finding-game": "Impossible de trouver une partie.",
			"index-failed-joining-game": "Impossible de joindre une partie.",
			"index-lost-connection": "Connexion Ã  l'Ã©quipe perdue.",
			"index-host-closed": "L'hÃ´te a fermÃ© la connexion.",
			"index-view-more": "Afficher plus",
			"index-back-to-main": "Retour au menu principal",
			"index-most-kills": "Plus de meutres",
			"index-total-kills": "Total des meurtres",
			"index-total-wins": "Total des victoires",
			"index-top-5-percent": "Top 5 pour cent",
			"index-kill-death-ratio": "Ratio E/M",
			"index-for": "pour",
			"index-today": "Aujourd'hui",
			"index-this-week": "Cette semaine",
			"index-all-time": "Tous les temps",
			"index-top-100": "TOP 100",
			"index-rank": "Rang",
			"index-player": "Joueur",
			"index-total-games": "Total des parties",
			"index-controls": "ContrÃ´les",
			"index-movement": "Mouvement",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Viser",
			"index-aim-ctrl": "Souris",
			"index-punch": "Frapper",
			"index-shoot": "Tirer",
			"index-shoot-ctrl": "Clic gauche",
			"index-change-weapons": "Changer dâ€™armes",
			"index-change-weapons-ctrl": "1 Ã  4 ou molette",
			"index-stow-weapons": "Ranger les armes (Mode frapper)",
			"index-stow-weapons-ctrl": "3 ou E",
			"index-swap-weapons": "Arme prÃ©cÃ©dente",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Recharger",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Zoom du scope",
			"index-scope-zoom-ctrl": "Clique gauche sur le zoom",
			"index-pickup": "Prendre",
			"index-loot": "Ramasser",
			"index-revive": "RÃ©animer",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Se soigner",
			"index-use-medical-ctrl": "Clique gauche sur l'objet ou 7 Ã  0",
			"index-drop-item": "LÃ¢cher l'objet",
			"index-drop-item-ctrl": "Clique droit sur l'ojhet",
			"index-cancel-action": "Annuler l'action",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Voir la carte",
			"index-view-map-ctrl": "M ou G",
			"index-toggle-minimap": "Basculer la carte",
			"index-toggle-minimap-ctrl": "V",
			"index-use-ping": "Utiliser la roue de ping d'Ã©quipe",
			"index-use-ping-ctrl": "Tenez C, puis tenez un clic droit et traÃ®nez la souris, puis lÃ¢chez le clic droit.",
			"index-use-emote": "Utiliser la roue d'Ã©motes",
			"index-use-emote-ctrl": "Tenez un clic droit et traÃ®nez la souris, puis lÃ¢chez le clic droit.",
			"index-tips-1-desc": "Le but de surviv.io est d'Ãªtre le dernier joueur vivant. Vouz vivez seulement une fois par match - pas de respawn!",
			"index-tips-2": "2D PUBG",
			"index-tips-2-desc": 'Si vous avez jouÃ© d\'autres jeux type "battle royale" comme PUBG, Fortnite ou H1Z1, vous Ãªtes Ã  moitiÃ© chemin! Pensez Ã  surviv.io comme PUBG en 2D.',
			"index-tips-3": "Piller et tuer",
			"index-tips-3-desc": "Vous commencerez le jeu avec pas d'objets Ã  part d'un simple sac Ã  dos. Naviguez le terrain pour trouver du butin: des armes, balles, viseurs et objets mÃ©dicaux. Ã‰liminez les autre joueurs et vous pouver prendre leurs objets!",
			"index-tips-4": "Rouge = Mauvais!",
			"index-tips-4-desc": "Les joueurs ne sont pas les seules choses qui peuvent vous tuer. La zone rouge meutriÃ¨re va venir vers vous pas les cÃ´tÃ©s du terrain et inflige des dÃ©gÃ¢ts de plus en plus dangereux. Gardez un oeil sur ca carte et restez saufs. ",
			"game-alive": "En vie",
			"game-reloading": "Rechargement",
			"game-using": "Utilisation :",
			"game-reviving": "RÃ©animation de",
			"game-revive-teammate": "RÃ©aminez votre coÃ©quipier",
			"game-equip": "Ã‰quiper",
			"game-cancel": "Annuler",
			"game-open-door": "Ouvrir la porte",
			"game-close-door": "Fermer la porte",
			"game-You": "Vous",
			"game-you": "vous avez",
			"game-themselves": "lui-mÃªme",
			"game-yourself": "toi-mÃªme",
			"game-you-died": "Ãªtes mort",
			"game-player-died": "est mort",
			"game-with": "avec",
			"game-knocked-out": "a assommÃ©",
			"game-killed": "tuÃ©",
			"game-finally-killed": "a finalemaent tuÃ©",
			"game-finally-bled-out": "est finalement mort",
			"game-died-outside": "est mort hors de la zone sÃ»re",
			"game-the-red-zone": "La zone rouge",
			"game-waiting-for-players": "En attente de joueurs",
			"game-spectating": "En train de regarder",
			"game-red-zone-advances": "La zone rouge avance dans",
			"game-red-zone-advancing": "La zone rouge avance, allez vers la zone sÃ»re!",
			"game-seconds": "secondes",
			"game-minutes": "minutes",
			"game-minute": "minute",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Pas assez d'espace!",
			"game-item-already-owned": "Vous avez dÃ©jÃ  cet objet!",
			"game-item-already-equipped": "L'objet est dÃ©jÃ  Ã©quipÃ©",
			"game-better-item-equipped": "Un meilleur objet est dÃ©jÃ  Ã©quipÃ©!",
			"game-play-new-game": "Nouvelle partie",
			"game-spectate": "Regarder",
			"game-full-screen": "Plein Ã©cran",
			"game-sound": "Son",
			"game-quit-game": "Quitter la partie",
			"game-return-to-game": "Retourner au jeu",
			"game-hide-match-stats": "Masquer les statistiques",
			"game-view-match-stats": "Voir les statistiques",
			"game-previous-teammate": "CoÃ©quipier prÃ©cÃ©dent",
			"game-next-teammate": "CoÃ©quipier suivant",
			"game-leave-game": "Quitter la partie",
			"game-your-results": "Votre rÃ©sultat",
			"game-chicken": "Victoire! Les poulets sont Ã  nous!",
			"game-won-the-game": "a gagnÃ© la partie.",
			"game-team-eliminated": "Votre Ã©quipe Ã  Ã©tÃ© Ã©liminÃ©e.",
			"game-rank": "Rang",
			"game-team-rank": "Rang d'Ã©quipe",
			"game-team-kills": "Meurtres de l'Ã©quipe",
			"game-kill": "Meurtre",
			"game-kills": "Meurtres",
			"game-damage-dealt": "DÃ©gÃ¢ts infligÃ©s",
			"game-damage-taken": "DÃ©gÃ¢ts subis",
			"game-survived": "Temps survÃ©cu",
			"game-backpack00": "Poche",
			"game-backpack01": "Petit sac Ã  dos",
			"game-backpack02": "Sac Ã  dos rÃ©gulier",
			"game-backpack03": "Sac Ã  dos militaire",
			"game-bandage": "Pansements",
			"game-bandage-tooltip": "Clique gauche pour restaurer 15 points de vie.",
			"game-healing-tooltip": "Ne peut restaurer plus de 75 points de vie.",
			"game-healthkit": "Kit mÃ©dical",
			"game-healthkit-tooltip": "Clique gauche pour restaurer 100 points de vie.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Clique gauche pour augmenter l'adrÃ©naline de 25.",
			"game-adrenaline-tooltip": "L'adrÃ©naline restaure la vie au fil du temps.",
			"game-painkiller": "Pillules",
			"game-painkiller-tooltip": "Clique gauche pour augmenter l'adrÃ©naline de 50.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Balles pour M9, Glock, MP5, MAC-10, UMP9 et Vector.",
			"game-12gauge": "Calibre 12",
			"game-12gauge-tooltip": "Balles pour M870, Saiga-12 et MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Balles pour AK-47, SCAR-H, M39, Mosin Nagant, OT-38 et DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Balles pour FAMAS, HK416, Mk 12 et M249.",
			"game-chest01": "Veste de niveau 1",
			"game-chest02": "Veste de niveau 2",
			"game-chest03": "Veste de niveau 3",
			"game-helmet01": "Casque de niveau 1",
			"game-helmet02": "Casque de niveau 2",
			"game-helmet03": "Casque de niveau 3",
			"game-1xscope": "Viseur x1",
			"game-2xscope": "Viseur x2",
			"game-4xscope": "Viseur x4",
			"game-8xscope": "Viseur x8",
			"game-15xscope": "Viseur x15",
			"game-level-1": "Niv. 1",
			"game-level-2": "Niv. 2",
			"game-level-3": "Niv. 3",
			"game-outfitBase": "Skin de base",
			"game-outfitRoyalFortune": "Fortune royale",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Coquille de cobalt",
			"game-outfitCarbonFiber": "Fibre de carbone",
			"game-outfitDarkGloves": "Le professionnel",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Camouflage forÃªt",
			"game-outfitRed": "Cible d'entrainement",
			"game-outfitWhite": "Vengeur arctique",
			"game-outfitWoodland": "Combat de forÃªt",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-famas": "FAMAS",
			"game-hk416": "HK416",
			"game-mk12": "Mk 12 SPR",
			"game-m249": "M249",
			"game-frag": "Grenade Ã  fragmentation",
			"game-hud-frag": "Frag.",
			"game-smoke": "Grenade fumigÃ¨ne",
			"game-hud-smoke": "Fumi.",
			"game-incendiary": "Grenade Ã  incendie",
			"game-barrel_01": "un baril",
			"game-silo_01": "un silo",
			"game-oven_01": "un four"
		};
		e.exports = i
	},
	FT2U: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("juYr"),
			r = a("v8aM"),
			s = r.EmoteType,
			l = r.EmoteData,
			c = a("85i3"),
			m = a("Jr6A"),
			d = function() {
				function e(t) {
					i(this, e), this.config = t, this.selectedEmote = {
						prevSlot: "",
						img: "",
						id: 0
					}, this.unlockTypes = {
						twitter: {
							locked: "Follow to unlock GG, Question and Tombstone emotes!",
							unlocked: "GG, Question and Tombstone emotes unlocked!",
							config: "twitterFollow"
						},
						youtube: {
							locked: "Subscribe to unlock Joy, Sob and Thinking emotes!",
							unlocked: "Joy, Sob and Thinking emotes unlocked!",
							config: "youtubeSubscribe"
						},
						facebook: {
							locked: "Like to unlock flag emotes!",
							unlocked: "Flag emotes unlocked!",
							config: "facebookLike"
						}
					}
				}
				return o(e, [{
					key: "init",
					value: function() {
						var e = this,
							t = this;
						n("#customize-emote-wheel, #customize-emote-autos").find(".ui-emote-parent").each(function(t, a) {
							var i = n(a),
								o = e.config.get(i.data("slot")),
								r = l[o],
								s = {
									img: "",
									id: 0
								};
							void 0 != r && (s = {
								img: r.texture,
								id: o
							}), i.find(".customize-emote-image").data("id", s.id), i.find(".customize-emote-image").css("background-image", "url(" + s.img + ")")
						});
						var a = Object.keys(l);
						a.sort(function(e, t) {
							return l[e].category - l[t].category || e - t
						});
						var i = [];
						for (var o in s)
							for (var r = 0; r < a.length; r++) s[o] != a[r] || i.push(o);
						for (var d = 0; d < a.length; d++) {
							var p = i[a[d]];
							if (s.hasOwnProperty(p)) {
								var u = l[s[p]],
									h = u.noCustom || !1;
								if (!u.teamOnly && !h) {
									var g = !1,
										f = "";
									u.twitterFollow && (g = !0, f = "twitter"), u.youtubeSubscribe && (g = !0, f = "youtube"), u.facebookLike && (g = !0, f = "facebook");
									var y = "customize-list-item";
									y += g ? " customize-list-item-locked" : " customize-list-item-unlocked";
									var b = n("<div/>", {
										class: y,
										"data-lock-reason": f
									});
									b.append(n("<div/>", {
										class: "customize-emote-image",
										style: "background-image: url(" + u.texture + ")",
										draggable: !g,
										"data-id": s[p]
									})), n("#modal-customize-list").append(b)
								}
							}
						}
						n(".customize-list-item-locked").hover(function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "visible")
						}, function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "hidden")
						}), this.selectableSlots = n(".customize-col, .customize-list-item"), this.emoteSlots = n(".customize-col"), this.highlightedSlots = this.emoteSlots.siblings(".ui-emote-hl"), this.highlightOpacityMin = .4, this.emoteSelected = !1, this.selectableSlots.on("mouseup", function() {
							if (!n(this).hasClass("customize-list-item-locked")) return t.emoteSelected && !n(this).hasClass("customize-list-item") ? void(t.emoteSelected = !1) : void t.selectEmote(n(this))
						}), this.selectableSlots.on("dragstart", function(e) {
							if (!n(this).hasClass("customize-list-item-locked") && (t.selectEmote(n(this)), !m.detectIE(!0))) {
								var a = document.createElement("img");
								a.src = t.selectedEmote.img.replace("url(", "").replace(")", "").replace(/\"/gi, ""), e.originalEvent.dataTransfer.setDragImage(a, 64, 64)
							}
						}), this.emoteSlots.on("drop", function(e) {
							e.originalEvent.preventDefault();
							var a = n(this).parent();
							t.updateSlot(a, t.selectedEmote.img, t.selectedEmote.id), t.emoteSelected = !1
						}), this.emoteSlots.on("mousedown", function(e) {
							if (t.emoteSelected) {
								e.stopPropagation();
								var a = n(this).parent();
								t.updateSlot(a, t.selectedEmote.img, t.selectedEmote.id)
							}
						}), this.emoteSlots.on("dragover", function(e) {
							e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", 1)
						}), this.emoteSlots.on("dragleave", function(e) {
							e.originalEvent.preventDefault(), n(this).parent().find(".ui-emote-hl").css("opacity", t.highlightOpacityMin)
						}), n(document).on("dragend", function(e) {
							e.originalEvent.preventDefault(), t.highlightedSlots.css({
								display: "none",
								opacity: 0
							})
						}), n(".ui-emote-auto-trash").click(function() {
							var e = n(this).parent();
							t.updateSlot(e, "", 1)
						});
						for (var x in this.unlockTypes)
							if (this.unlockTypes.hasOwnProperty(x)) {
								var v = this.unlockTypes[x];
								this.config.get(v.config) && this.unlockEmotes(x)
							}
						n(".btn-social-unlock").click(function() {
							if (n(this).hasClass("btn-social-unlocked")) return !1;
							var e = n(this).data("lock-reason");
							t.unlockEmotes(e), c.storeGeneric("loadouts", "socialUnlock/emotes/" + e)
						})
					}
				}, {
					key: "selectEmote",
					value: function(e) {
						var t = e.hasClass("customize-list-item");
						this.emoteSelected = !0;
						var a = t ? e : e.parent(),
							i = a.find(".customize-emote-image");
						if (this.selectedEmote = {
								prevSlot: t ? null : a,
								img: i.css("background-image"),
								id: i.data("id")
							}, this.highlightedSlots.css({
								display: "block",
								opacity: this.highlightOpacityMin
							}), this.selectableSlots.removeClass("customize-list-item-selected"), t) e.addClass("customize-list-item-selected");
						else {
							a.find(".ui-emote-hl").css("opacity", 1)
						}
					}
				}, {
					key: "updateSlot",
					value: function(e, t, a) {
						var i = this.selectedEmote.prevSlot;
						if (this.selectedEmote = {}, i) {
							var o = e.find(".customize-emote-image");
							this.updateSlot(i, o.css("background-image"), o.data("id"))
						}
						var n = e.find(".customize-emote-slot");
						n.data("id", a), n.css("background-image", t), e.find(".ui-emote-hl").css("display", "none"), this.config.set(e.data("slot"), a), this.selectableSlots.removeClass("customize-list-item-selected"), this.highlightedSlots.css({
							display: "none",
							opacity: 0
						})
					}
				}, {
					key: "unlockEmotes",
					value: function(e) {
						this.unlockTypes[e].unlocked;
						n('.btn-social-unlock[data-lock-reason="' + e + '"]').addClass("btn-social-unlocked");
						var t = n('.customize-list-item-locked[data-lock-reason="' + e + '"]');
						t.addClass("customize-list-item-unlocked").removeClass("customize-list-item-locked"), t.find(".customize-emote-image").attr("draggable", !0), this.config.set(this.unlockTypes[e].config, !0), n(".customize-list-item-unlocked").off("mouseenter"), n(".customize-list-item-unlocked").off("mouseleave"), n(".customize-list-item-locked").on("mouseenter", function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "visible")
						}), n(".customize-list-item-locked").on("mouseleave", function() {
							n('.tooltiptext[data-lock-reason="' + n(this).data("lock-reason") + '"]').css("visibility", "hidden")
						})
					}
				}]), e
			}();
		e.exports = d
	},
	FyxX: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var o = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			n = a("gKxX"),
			r = a("Bk7F"),
			s = a("/2+T"),
			l = (a("r4ug"), a("zinx"), a("dT1u")),
			c = a("xgte"),
			m = c.RenderType,
			d = function() {
				function e() {
					i(this, e), this.sprite = new n.Sprite, this.sprite.anchor.set(.5, .5), this.sprite.visible = !1
				}
				return o(e, [{
					key: "init",
					value: function() {
						this.imgScale = 1
					}
				}, {
					key: "free",
					value: function() {
						this.sprite.visible = !1
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						var o = r.Defs[e.type];
						if (this.type = e.type, this.pos = s.copy(e.pos), this.layer = e.layer, this.rad = o.rad, this.imgScale = o.img.scale, a) {
							var l = o.img;
							this.sprite.texture = n.Texture.fromImage(l.sprite), this.sprite.tint = l.tint, this.sprite.alpha = 1, this.sprite.visible = !0, this.isNew = !0, this.inWater = !1, this.spriteAlpha = l.alpha, i.renderer.addPIXIObj(this.sprite, m.Decal, this.layer, 11, this.__id)
						}
					}
				}]), e
			}(),
			p = function() {
				function e() {
					i(this, e), this.decalPool = new l.Pool(d)
				}
				return o(e, [{
					key: "update",
					value: function(e, t, a) {
						for (var i = this.decalPool.getPool(), o = 0; o < i.length; o++) {
							var n = i[o];
							if (n.active) {
								if (n.isNew) {
									n.isNew = !1;
									var r = t.getGroundSurface(n.pos, n.layer);
									n.inWater = "water" == r
								}
								var s = a.pointToScreen(n.pos),
									l = a.pixels(1 * n.imgScale);
								n.sprite.position.set(s.x, s.y), n.sprite.scale.set(l, l), n.sprite.rotation = 0, n.sprite.alpha = n.spriteAlpha * (n.inWater ? .3 : 1)
							}
						}
					}
				}]), e
			}();
		e.exports = {
			DecalBarn: p
		}
	},
	GtPS: function(e, t, a) {
		"use strict";

		function i() {
			this.pos = n.create(0, 0), this.ppu = 16, this.zoom = 1.5, this.targetZoom = 1.5, this.screenWidth = 1, this.screenHeight = 1, this.shakeEnabled = !0, this.shakeInt = 0
		}
		var o = a("0od3"),
			n = a("/2+T");
		i.prototype = {
			z: function() {
				return this.ppu * this.zoom
			},
			pointToScreen: function(e) {
				return {
					x: .5 * this.screenWidth + (e.x - this.pos.x) * this.z(),
					y: .5 * this.screenHeight - (e.y - this.pos.y) * this.z()
				}
			},
			screenToPoint: function(e) {
				return {
					x: this.pos.x + (e.x - .5 * this.screenWidth) / this.z(),
					y: this.pos.y + (.5 * this.screenHeight - e.y) / this.z()
				}
			},
			pixels: function(e) {
				return e * this.zoom
			},
			scaleToScreen: function(e) {
				return e * this.z()
			},
			setShakeEnabled: function(e) {
				this.shakeEnabled = e
			},
			addShake: function(e, t) {
				var a = n.length(n.sub(this.pos, e)),
					i = o.delerp(a, 40, 10) * t;
				this.shakeInt = Math.max(this.shakeInt, i)
			},
			applyShake: function() {
				this.shakeEnabled && (this.pos = n.add(this.pos, n.mul(n.randomUnit(), this.shakeInt))), this.shakeInt = 0
			}
		}, e.exports = i
	},
	Jr6A: function(e, t, a) {
		"use strict";

		function i(e, t) {
			t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
			var a = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
				i = a.exec(t);
			if (i) return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : ""
		}

		function o(e) {
			var t = e.trim();
			return t.length > _.kNameMaxLen && (t = t.substring(0, _.kNameMaxLen)), t
		}

		function n(e) {
			return e ? e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">") : ""
		}

		function r(e, t, a) {
			var i = S.getContext("2d");
			i.font = t;
			for (var o = e.length, n = e; o > 0;) {
				if (i.measureText(n).width <= a) break;
				n = e.substring(0, --o) + "â€¦"
			}
			return n
		}

		function s(e) {
			return void 0 === e ? "undefined" : null === e ? "null" : JSON.stringify(e)
		}

		function l() {
			for (var e = ["localhost", "surviv.io", "surviv2.io", "2dbattleroyale.com", "2dbattleroyale.org"], t = window.location.hostname, a = !1, i = 0; i < e.length; i++)
				if (-1 != t.indexOf(e[i])) {
					a = !0;
					break
				}
			return w.dev || a
		}

		function c() {
			var e = navigator.language || navigator.userLanguage;
			e = e.toLowerCase();
			for (var t = ["pt", "de", "es", "fr", "ko", "ru", "en"], a = 0; a < t.length; a++)
				if (-1 != e.indexOf(t[a])) {
					e = t[a];
					break
				}
			for (var i = ["da", "de", "en", "es", "fr", "it", "jp", "ko", "nl", "pl", "pt", "ru", "sv", "th", "tr", "vn", "zh-cn", "zh-tw"], o = 0; o < i.length; o++)
				if (-1 != e.indexOf(i[o])) return e = i[o];
			return ""
		}

		function m() {
			return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) && this.detectiOS()
		}

		function d() {
			return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
		}

		function p() {
			return d() && 375 == screen.width && 812 == screen.height
		}

		function u() {
			var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
				t = window.navigator.userAgent,
				a = t.indexOf("MSIE "),
				i = t.indexOf("Trident/"),
				o = t.indexOf("Edge/");
			return a > 0 || i > 0 || e && o > 0
		}

		function h() {
			return window.innerWidth > window.innerHeight || 90 == window.orientation || -90 == window.orientation
		}

		function g() {
			return h() ? "landscape" : "portrait"
		}

		function f() {
			var e = window.innerWidth,
				t = window.innerHeight;
			if (d()) {
				if (e = screen.width, t = screen.height, h()) {
					var a = t;
					t = e, e = a
				}
				p() && (h() ? e -= 88 : t -= 88)
			}
			return {
				width: e,
				height: t
			}
		}

		function y(e) {
			var t = document.documentElement;
			document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || e ? document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen() : t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? (t = document.body, t.msRequestFullscreen()) : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
		}

		function b() {
			return void 0 !== i("debug") || !1
		}

		function x(e, t) {
			! function a(i, o) {
				if (i >= o) return void t("full");
				var n = function() {
					setTimeout(function() {
						a(i + 1, o)
					}, 250)
				};
				k.ajax({
					type: "POST",
					url: "/find_game",
					data: JSON.stringify(e),
					contentType: "application/json; charset=utf-8",
					timeout: 1e4,
					success: function(e, a) {
						"full" == e.err ? n() : e.err ? t(e.err) : void 0 === e.hosts || void 0 === e.addrs ? n() : t(null, e)
					},
					error: function(e) {
						n()
					}
				})
			}(0, 3)
		}

		function v(e, t, a, i) {
			var o = "https:" == window.location.protocol,
				n = o ? "wss:" : "ws:",
				r = o ? a.hosts : a.addrs;
			r = r || [];
			for (var s = [], l = 0; l < r.length; l++) s.push(n + "//" + r[l] + "/play?gid=" + a.gameId);
			! function a(o) {
				var n = function() {
					a(o)
				};
				if (o.length > 0) {
					var r = o.shift();
					e.tryJoinGame(t, r, n)
				} else i()
			}(s)
		}
		var k = a("juYr"),
			_ = a("yp2f"),
			w = a("zinx"),
			S = (a("85i3"), document.createElement("canvas"));
		e.exports = {
			getParameterByName: i,
			sanitizeNameInput: o,
			unEntity: n,
			truncateString: r,
			varToString: s,
			authLocation: l,
			detectLanguage: c,
			detectiOS: d,
			detectiPhoneX: p,
			detectIE: u,
			detectMobileSafari: m,
			getOrientation: g,
			isLandscape: h,
			getScreenDimensions: f,
			toggleFullScreen: y,
			logDebug: b,
			findGame: x,
			joinGame: v
		}
	},
	K7EQ: function(e, t, a) {
		"use strict";
		e.exports = {
			background: 2118510,
			water: 3310251,
			beach: 13480795,
			grass: 8433481,
			underground: 1772803
		}
	},
	KdTN: function(e, t, a) {
		"use strict";
		var i = {
			"@metadata": {
				"last-updated": "2018-01-28",
				locale: "de"
			},
			"word-order": "sov",
			"index-slogan": "2d Battle Royale",
			"index-region": "Region",
			"index-north-america": "Nordamerika",
			"index-europe": "Europa",
			"index-asia": "Asien",
			"index-players": "Spieler",
			"index-play-solo": "Solo spielen",
			"index-play-duo": "Duo spielen",
			"index-play-squad": "Squad spielen",
			"index-create-team": "Team erstellen",
			"index-how-to-play": "Wie man spielt",
			"index-leave-team": "Team verlassen",
			"index-joining-team": "Beitritt zum Team",
			"index-creating-team": "Team erstellen",
			"index-invite-link": "Einladungslink",
			"index-solo": "Solo",
			"index-duo": "Duo",
			"index-squad": "Squad",
			"index-auto-fill": "AuffÃ¼llen",
			"index-no-fill": "Kein FÃ¼llen",
			"index-waiting-for-leader": "Warten auf den AnfÃ¼hrer, um das Spiel zu starten",
			"index-play": "Spielen",
			"index-featured-youtuber": "Vorgestellter YouTuber",
			"index-settings": "Einstellungen",
			"index-high-resolution": "Hohe AuflÃ¶sung (Aktivieren zur Steigerung der visuellen QualitÃ¤t)",
			"index-screen-shake": "BildschirmschÃ¼tteln",
			"index-master-volume": "GesamtlautstÃ¤rke",
			"index-sfx-volume": "EffektlautstÃ¤rke",
			"index-music-volume": "MusiklautstÃ¤rke",
			"index-mobile-announce": "Nun mobil verfÃ¼gbar!",
			"index-team-is-full": "Das Team ist voll!",
			"index-failed-joining-team": "Fehlgeschlagener Eintritt ins Team.",
			"index-failed-creating-team": "Das Erstellen eines Teams ist fehlgeschlagen.",
			"index-failed-finding-game": "Die Spielsuche ist fehlgeschlagen.",
			"index-failed-joining-game": "Fehlgeschlagener Beitritt zum Spiel.",
			"index-lost-connection": "Verbindung zum Team verloren.",
			"index-host-closed": "Serververbindung geschlossen.",
			"index-view-more": "Mehr anzeigen",
			"index-back-to-main": "ZurÃ¼ck zum HauptmenÃ¼",
			"index-most-kills": "Meiste TÃ¶tungen",
			"index-total-kills": "Gesamt TÃ¶tungen",
			"index-total-wins": "Gesamtgewinne",
			"index-top-5-percent": "Top 5 Prozent",
			"index-kill-death-ratio": "Kill-Tod-VerhÃ¤ltnis",
			"index-for": "fÃ¼r",
			"index-today": "Heute",
			"index-this-week": "Diese Woche",
			"index-all-time": "Aller Zeiten",
			"index-top-100": "TOP 100",
			"index-rank": "Rang",
			"index-player": "Spieler",
			"index-total-games": "Gesamtanzahl Spiele",
			"index-controls": "Steuerung",
			"index-movement": "Bewegung",
			"index-movement-ctrl": "W, A, S, D",
			"index-aim": "Zielen",
			"index-aim-ctrl": "Maus",
			"index-punch": "Schlagen",
			"index-shoot": "SchieÃŸen",
			"index-shoot-ctrl": "Links-Klick",
			"index-change-weapons": "Waffen wechseln",
			"index-change-weapons-ctrl": "1 bis 4 oder Mausrad",
			"index-stow-weapons": "Waffen verstauen (Schlag-Modus)",
			"index-stow-weapons-ctrl": "3 oder E",
			"index-swap-weapons": "Wechsel zu vorherigen Waffe",
			"index-swap-weapons-ctrl": "Q",
			"index-reload": "Nachladen",
			"index-reload-ctrl": "R",
			"index-scope-zoom": "Zielfernrohr Zoom",
			"index-scope-zoom-ctrl": "Linksklick auf Zoom",
			"index-pickup": "aufnehmen",
			"index-loot": "Beute",
			"index-revive": "wiederbeleben",
			"index-pickup-ctrl": "F",
			"index-use-medical": "Medizinisches Item verwenden",
			"index-use-medical-ctrl": "Linksklick auf Item oder 7 bis 0",
			"index-drop-item": "Item ablegen",
			"index-drop-item-ctrl": "Rechtsklick auf Item",
			"index-cancel-action": "Aktion abbrechen",
			"index-cancel-action-ctrl": "X",
			"index-view-map": "Karte anzeigen",
			"index-view-map-ctrl": "M oder G",
			"index-toggle-minimap": "Minimap umschalten",
			"index-toggle-minimap-ctrl": "V",
			"game-alive": "Am Leben",
			"game-reloading": "Nachladen",
			"game-using": "Benutzen",
			"game-reviving": "Wiederbelebung",
			"game-revive-teammate": "Spieler wiederbeleben",
			"game-equip": "Equip",
			"game-cancel": "Beenden",
			"game-You": "You",
			"game-you": "you",
			"game-themselves": "themselves",
			"game-yourself": "yourself",
			"game-you-died": "died",
			"game-player-died": "died",
			"game-with": "with",
			"game-knocked-out": "knocked out",
			"game-killed": "killed",
			"game-finally-killed": "finally killed",
			"game-finally-bled-out": "finally bled out",
			"game-died-outside": "died outside the safe zone",
			"game-the-red-zone": "The red zone",
			"game-waiting-for-players": "Warten auf Spieler",
			"game-spectating": "Zuschauen",
			"game-red-zone-advances": "Rote Zone schreitet voran in",
			"game-red-zone-advancing": "Rote Zone rÃ¼ckt vor, in die sichere Zone!",
			"game-seconds": "Sekunden",
			"game-minutes": "Minuten",
			"game-minute": "Minute",
			"game-m": "m",
			"game-s": "s",
			"game-not-enough-space": "Nicht genÃ¼gend Platz!",
			"game-item-already-owned": "Item bereits in Besitz!",
			"game-item-already-equipped": "Item bereits ausgerÃ¼stet!",
			"game-better-item-equipped": "Besseres Item ausgestattet!",
			"game-play-new-game": "Neues Spiel starten",
			"game-spectate": "Zuschauen",
			"game-full-screen": "Vollbild",
			"game-sound": "Ton",
			"game-quit-game": "Spiel beenden",
			"game-return-to-game": "ZurÃ¼ck zum Spiel",
			"game-hide-match-stats": "Match-Statistiken ausblenden",
			"game-view-match-stats": "Match-Statistiken anzeigen",
			"game-previous-teammate": "Vorheriger Teamkollege",
			"game-next-teammate": "NÃ¤chster Teamkollege",
			"game-spectate-previous": "Vorheriger",
			"game-spectate-next": "NÃ¤chster",
			"game-leave-game": "Spiel verlassen",
			"game-your-results": "Ihre Ergebnisse",
			"game-chicken": "Gewinner Gewinner HÃ¼hnchen-Dinner!",
			"game-won-the-game": "gewonnen.",
			"game-team-eliminated": "Ihr Team wurde besiegt.",
			"game-rank": "Rang",
			"game-team-rank": "Team Rang",
			"game-team-kills": "Team TÃ¶tungen",
			"game-kill": "TÃ¶tung",
			"game-kills": "TÃ¶tungen",
			"game-damage-dealt": "Verursachter Schaden",
			"game-damage-taken": "Erhaltener Schaden",
			"game-survived": "Ãœberlebt",
			"game-backpack00": "Beutel",
			"game-backpack01": "Kleiner Rucksack",
			"game-backpack02": "Normaler Rucksack",
			"game-backpack03": "MilitÃ¤rrucksack",
			"game-bandage": "Bandage",
			"game-bandage-tooltip": "Klicken Sie mit der linken Maustaste, um 15 Lebenspunkte wiederherzustellen.",
			"game-healing-tooltip": "Kann nicht mehr als 75 Lebenspunkte heilen.",
			"game-healthkit": "Erste Hilfe Tasche",
			"game-healthkit-tooltip": "Klicken Sie mit der linken Maustaste, um 100 Lebenspunkte wiederherzustellen.",
			"game-soda": "Soda",
			"game-soda-tooltip": "Klicke mit der linken Maustaste, um den Adrenalinspiegel um 25 zu erhÃ¶hen.",
			"game-adrenaline-tooltip": "Adrenalin stellt die Gesundheit im Laufe der Zeit wieder her.",
			"game-painkiller": "Schmerzmittel",
			"game-painkiller-tooltip": "Klicken Sie mit der linken Maustaste, um den Adrenalinspiegel um 50 zu erhÃ¶hen.",
			"game-9mm": "9mm",
			"game-9mm-tooltip": "Munition fÃ¼r M9, Glock, MP5, MAC-10, UMP9 und Vector.",
			"game-12gauge": "12er Kaliber",
			"game-12gauge-tooltip": "Munition fÃ¼r M870, Saiga-12 und MP220.",
			"game-762mm": "7.62mm",
			"game-762mm-tooltip": "Munition fÃ¼r AK-47, SCAR-H, M39, Mosin Nagant, OT-38 und DP-28.",
			"game-556mm": "5.56mm",
			"game-556mm-tooltip": "Munition fÃ¼r FAMAS, HK416, Mk 12 und M249.",
			"game-chest01": "Level 1 Weste",
			"game-chest02": "Level 2 Weste",
			"game-chest03": "Level 3 Weste",
			"game-helmet01": "Level 1 Helm",
			"game-helmet02": "Level 2 Helm",
			"game-helmet03": "Level 3 Helm",
			"game-1xscope": "1x Visier",
			"game-2xscope": "2x Visier",
			"game-4xscope": "4x Visier",
			"game-8xscope": "8x Visier",
			"game-15xscope": "15x Visier",
			"game-level-1": "Lvl. 1",
			"game-level-2": "Lvl. 2",
			"game-level-3": "Lvl. 3",
			"game-outfitBase": "Basic Outfit",
			"game-outfitRoyalFortune": "Royal Fortune",
			"game-outfitKeyLime": "Key Lime",
			"game-outfitCobaltShell": "Cobalt Shell",
			"game-outfitCarbonFiber": "Carbon Fiber",
			"game-outfitDarkGloves": "The Professional",
			"game-outfitGhillie": "Ghillie Suit",
			"game-outfitCamo": "Forest Camo",
			"game-outfitRed": "Target Practice",
			"game-outfitWhite": "Arctic Avenger",
			"game-ak47": "AK-47",
			"game-dp28": "DP-28",
			"game-mosin": "Mosin Nagant",
			"game-m39": "M39 EMR",
			"game-mp5": "MP5",
			"game-mac10": "MAC-10",
			"game-ump9": "UMP9",
			"game-m870": "M870",
			"game-mp220": "MP220",
			"game-saiga": "Saiga-12",
			"game-m9": "M9",
			"game-glock": "Glock 18C",
			"game-ot38": "OT-38",
			"game-barrel_01": "a barrel",
			"game-silo_01": "a silo"
		};
		e.exports = i
	},
	LLDW: function(e, t, a) {
		"use strict";

		function i(e) {
			this.localization = e, this.timeout = 1e4, this.leaderboardActive = 0, this.leaderboardFront = o("#leaderboard-front"), this.leaderboardMain = o("#leaderboard-main"), this.leaderboardSpinners = o(".leaderboard-spinner"), this.leaderboardPlayers = o(".leaderboard-players"), this.leaderboardButtons = o(".btn-leaderboards"), this.leaderboardMode = o(".leaderboard-mode"), this.leaderboardStats = o(".leaderboard-stat"), this.leaderboardIntervals = o(".leaderboard-interval"), this.frontMode = this.leaderboardFront.find(".leaderboard-mode"), this.frontStat = this.leaderboardFront.find(".leaderboard-stat"), this.frontInterval = this.leaderboardFront.find(".leaderboard-interval"), this.mainMode = this.leaderboardMain.find(".leaderboard-mode"), this.mainStat = this.leaderboardMain.find(".leaderboard-stat"), this.mainInterval = this.leaderboardMain.find(".leaderboard-interval"), this.rotationSetInterval = null, this.currentDisplayedModeIdx = 0, o("#min-games").html("5 games"), this.setLanguage();
			var t = this,
				a = function(e) {
					o("html, body").css("overflow-y", e ? "scroll" : "hidden")
				};
			o(".leaderboard-mode, .leaderboard-stat, .leaderboard-interval").change(function() {
				t.getLeaderboardData(!0), clearInterval(t.rotationSetInterval)
			}), o("#btn-leaderboard-to-main, #btn-leaderboard-mobile").on("click", function() {
				o("#start-main").fadeOut(100, function() {
					t.setActiveBoard(1), a(!0), o("#start-overlay").addClass("start-overlay-darken"), o(".leaderboard").fadeIn(100), t.getLeaderboardData(!0), clearInterval(t.rotationSetInterval)
				})
			}), o("#btn-leaderboard-to-front").on("click", function() {
				o(".leaderboard").fadeOut(100, function() {
					document.body.scrollTop = 0, t.setActiveBoard(0), a(!1), o("#start-overlay").removeClass("start-overlay-darken"), o("#start-main").fadeIn(100)
				})
			})
		}
		var o = a("juYr"),
			n = a("Tf6H");
		i.prototype = {
			setActiveBoard: function(e) {
				this.leaderboardActive = e, 1 == this.leaderboardActive && (this.mainStat.val(this.frontStat.val() || this.mainStat.find("option").first().val()), this.mainInterval.val(this.frontInterval.val() || this.mainInterval.find("option").first().val()))
			},
			setLanguage: function() {
				var e = "";
				this.modeOptions = {
					1: this.localization.translate("index-solo"),
					2: this.localization.translate("index-duo"),
					4: this.localization.translate("index-squad")
				}, o.each(this.modeOptions, function(t, a) {
					e += '<option value="' + t + '">' + a + "</option>"
				}), this.leaderboardMode.html(e), this.statOptions = {
					most_kills: this.localization.translate("index-most-kills"),
					total_kills: this.localization.translate("index-total-kills"),
					total_wins: this.localization.translate("index-total-wins"),
					top5_pct: this.localization.translate("index-top-5-percent"),
					kdr: this.localization.translate("index-kill-death-ratio")
				}, e = "", o.each(this.statOptions, function(t, a) {
					e += '<option value="' + t + '">' + a + "</option>"
				}), this.leaderboardStats.html(e), this.intervalOptions = {
					daily: this.localization.translate("index-today"),
					weekly: this.localization.translate("index-this-week"),
					all: this.localization.translate("index-all-time")
				}, e = "", o.each(this.intervalOptions, function(t, a) {
					e += '<option value="' + t + '">' + a + "</option>"
				}), this.leaderboardIntervals.html(e), this.leaderboardFront.find(".leaderboard-headers").html(e);
				var t = this.leaderboardMain.find(".leaderboard-headers");
				e = "<th class='leaderboard-header-zero'>" + this.localization.translate("index-rank").toUpperCase() + "</th>", e += "<th class='leaderboard-header-one'>" + this.localization.translate("index-player").toUpperCase() + "</th>", e += "<th class='leaderboard-header-two'></th>", e += "</th><th class='leaderboard-header-three'>" + this.localization.translate("index-total-games").toUpperCase() + "</th>", t.html(e)
			},
			leaderboardLoading: function(e) {
				this.leaderboardSpinners.css("display", e ? "block" : "none"), this.leaderboardButtons.css("display", e ? "none" : "block"), e ? this.leaderboardPlayers.css("display", "none") : this.leaderboardPlayers.fadeIn(100)
			},
			getLeaderboardData: function(e) {
				var t = this;
				e && this.leaderboardLoading(!0);
				var a = 0 == this.leaderboardActive ? this.leaderboardFront : this.leaderboardMain,
					i = {
						mode: a.find(".leaderboard-mode").val(),
						stat: a.find(".leaderboard-stat").val(),
						interval: a.find(".leaderboard-interval").val()
					},
					n = {},
					r = i.mode;
				n.mode = this.modeOptions[r];
				var s = i.stat;
				n.stat = this.statOptions[s];
				var l = i.interval;
				n.interval = this.intervalOptions[l];
				var c = 0 == this.leaderboardActive ? 5 : 100,
					m = "/leaderboard?type=" + s + "&mode=" + r + "&interval=" + l + "&maxCount=" + c;
				o.ajax({
					type: "GET",
					url: m,
					timeout: this.timeout
				}).done(function(e) {
					e && t.populate(a, e, i)
				}).always(function() {
					t.leaderboardLoading(!1)
				})
			},
			setLeaderboardMode: function(e, t) {
				o("#leaderboard-front-select").find(".leaderboard-mode").val(e), this.getLeaderboardData(t)
			},
			startLeaderboardRotation: function() {
				var e = [1, 2, 4];
				this.currentDisplayedModeIdx = n.randomInt(0, e.length - 1), this.setLeaderboardMode(e[this.currentDisplayedModeIdx], !0)
			},
			populate: function(e, t, a) {
				var i = {
						stat: this.statOptions[a.stat],
						interval: this.intervalOptions[a.interval]
					},
					n = this.leaderboardActive;
				1 == n && e.find(".leaderboard-header-two").html(i.stat ? i.stat.toUpperCase() : "");
				var r = e.find(".leaderboard-players-values");
				r.html("");
				for (var s = 0; s < t.length; s++) {
					var l = t[s],
						c = l.name,
						m = l.val,
						d = (l.games, "");
					if (1 == n) {
						d = '<tr class="main"><td class="rank">#' + (s + 1) + "</td><td>";
						for (var p = l.name.split(","), u = 0; u < p.length; u++) {
							d += '<span class="player-name-main">' + p[u] + "</span>"
						}
						d += "</td><td>" + l.val + "</td>", d += "most_kills" != a.stat ? "<td>" + l.games + "</td>" : "", d += "</tr>"
					} else d = '<div><div class="front-name">' + c + '</div><div class="front-value">' + m + "</div></div>";
					r.append(d)
				}
				var h = 1;
				if ("top5_pct" == a.stat || "kdr" == a.stat) switch (a.interval) {
					case "daily":
						h = 15;
						break;
					case "weekly":
						h = 50;
						break;
					case "all":
						h = 100
				}
				o(".leaderboard-header-three").css("display", "most_kills" != a.stat ? "block" : "none"), o(".leaderboard-header-three").html(this.localization.translate("index-total-games").toUpperCase() + "(>" + h + ")")
			}
		}, e.exports = i
	},
	MWDq: function(e, t, a) {
		"use strict";

		function i(e, t, a) {
			return t in e ? Object.defineProperty(e, t, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : e[t] = a, e
		}

		function o(e) {
			var t = Math.floor(e / 3600),
				a = Math.floor(e / 60) % 60,
				i = Math.floor(e) % 60,
				o = "";
			return t > 0 && (o += t + "h "), (t > 0 || a > 0) && (o += a + "m "), o += i + "s"
		}

		function n(e, t, a, o, n, r, m) {
			var u = this;
			this.game = e, this.particleBarn = o, this.localization = n, this.touch = m, this.gameElem = l("#ui-game"), this.statsMain = l("#ui-stats"), this.statsElem = l("#ui-stats-bg"), this.statsContents = l("#ui-stats-contents-inner"), this.statsHeader = l("#ui-stats-header"), this.statsInfoBox = l("#ui-stats-info-box"), this.statsOptions = l("#ui-stats-options"), this.statsAds = l(".ui-stats-ad-container"), this.mainMedRectAd = l("#ad-block-main-med-rect"), this.mainLeaderBotAd = l("#ad-block-main-leader-bot"), this.killElem = l("#ui-kills"), this.killText = l("#ui-kill-text"), this.killCount = l("#ui-kill-count"), this.killTimeout = null, this.escMenuElem = l("#ui-game-menu"), this.escMenuDisplayed = !1, this.topLeft = l("#ui-top-left"), this.topCenter = l("#ui-top-center-scopes"), this.waitingForPlayers = !0, this.waitingText = l("#ui-waiting-text"), this.spectating = !1, this.prevSpectatorCount = 0, this.spectatorCount = 0, this.spectatorCounterDisplayed = !1, this.spectatorCounterContainer = l("#ui-spec-counter"), this.spectatorCounter = l("#ui-spec-counter-number"), this.spectateMode = l(".ui-spectate-mode"), this.spectatedPlayerText = l("#ui-spectate-text"), this.spectatedPlayerName = "", this.spectatedPlayerId = null, this.spectateModeStats = l("#ui-spectate-stats"), this.spectateModeStatsData = l("#ui-spectate-stats-data"), this.spectateOptionsWrapper = l("#ui-spectate-options-wrapper"), this.rightCenter = l("#ui-right-center"), this.playersAlive = l(".js-ui-players-alive"), this.announcement = l("#ui-announcement"), this.mapContainer = l("#ui-map-container"), this.mapContainerBottom = 52, this.mapInfo = l("#ui-map-info"), this.mapInfoBottom = 218, this.gasState = {}, this.gasIcon = l("#ui-gas-icon"), this.gasTimer = l("#ui-gas-timer"), this.mapMinimizeButton = l("#ui-map-minimize"), this.menuDisplayButton = l("#ui-menu-display"), this.bottomCenterRight = l("#ui-bottom-center-right"), l("#ui-map-wrapper").css("display", "block"), l("#ui-team").css("display", "block"), this.curAction = {
				type: p.None
			}, this.displayMapDirty = !1, this.displayMapClear = !1, l(".ui-map-expand").on("mousedown", function(e) {
				e.stopPropagation()
			}), l(".ui-map-expand").on("click", function(e) {
				f.touch ? u.bigmapDisplayed || u.displayMapLarge() : f.layout == f.Layout.Lg && u.displayMapLarge(u.bigmapDisplayed)
			}), l("#ui-map-minimize").on("mousedown", function(e) {
				e.stopPropagation()
			}), l("#ui-map-minimize").on("click", function(e) {
				e.stopPropagation(), u.toggleMiniMap()
			}), l("#ui-menu-display").on("click", function(e) {
				e.stopPropagation(), u.toggleEscMenu()
			}), this.bigmap = l("#big-map"), this.bigmapCollision = l("#big-map-collision"), this.moveStyleButton = l("#btn-game-move-style"), this.moveStyleButton.on("touchstart", function() {
				m.toggleMoveStyle()
			}), this.aimStyleButton = l("#btn-game-aim-style"), this.aimStyleButton.on("touchstart", function() {
				m.toggleAimStyle()
			}), l(document).on("keyup", function(e) {
				76 != e.which || u.game.gameOver || k.toggleFullScreen()
			}), this.onTouchScreen = function(e) {
				"cvs" == e.target.id && u.toggleEscMenu(!0)
			}, l(document).on("touchstart", this.onTouchScreen), this.bigmapClose = l("#big-map-close"), this.bigmapClose.on("touchend", function(e) {
				e.stopPropagation(), u.displayMapLarge(!0)
			}), this.bigmapClose.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.bigmapClose.on("click", function(e) {
				e.stopPropagation(), u.displayMapLarge(!0)
			}), this.fullScreenButton = l("#btn-game-fullscreen"), this.fullScreenButton.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.fullScreenButton.on("click", function() {
				k.toggleFullScreen(), u.toggleEscMenu()
			}), this.resumeButton = l("#btn-game-resume"), this.resumeButton.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.resumeButton.on("click", function() {
				u.toggleEscMenu()
			}), l("#btn-spectate-quit").on("click", function() {
				u.doQuitGame()
			}), l("#btn-game-quit").on("mousedown", function(e) {
				e.stopPropagation()
			}), l("#btn-game-quit").on("click", function() {
				u.doQuitGame()
			}), this.specStatsButton = l("#btn-spectate-view-stats"), this.specStatsButton.on("click", function() {
				u.toggleLocalStats()
			}), this.beginSpectating = !1, this.specNext = !1, this.specPrev = !1, this.specNextButton = l("#btn-spectate-next-player"), this.specNextButton.on("click", function() {
				u.specNext = !0
			}), this.specPrevButton = l("#btn-spectate-prev-player"), this.specPrevButton.on("click", function() {
				u.specPrev = !0
			}), this.interactionElems = l("#ui-interaction-press, #ui-interaction"), this.interactionTouched = !1, this.interactionElems.css("pointer-events", "auto"), this.interactionElems.on("touchstart", function(e) {
				e.stopPropagation(), u.interactionTouched = !0
			}), this.reloadElems = l("#ui-current-clip, #ui-remaining-ammo, #ui-reload-button"), this.reloadTouched = !1, this.reloadElems.css("pointer-events", "auto"), this.reloadElems.on("touchstart", function(e) {
				e.stopPropagation(), u.reloadTouched = !0
			}), this.healthRed = new s(255, 0, 0), this.healthDarkpink = new s(255, 45, 45), this.healthLightpink = new s(255, 112, 112), this.healthWhite = new s(255, 255, 255), this.healthGrey = new s(179, 179, 179), this.minimapDisplayed = !0, this.visibilityMode = 0, this.gasRenderer = new x(r, 0), this.gasSafeZoneRenderer = new v, this.container = new c.Container, this.container.mask = new c.Graphics, this.display = {
				gas: this.gasRenderer.display,
				gasSafeZone: this.gasSafeZoneRenderer.display,
				teammates: new c.Container,
				player: new c.Container,
				border: new c.Graphics
			}, this.mapSprite = new c.Sprite(c.Texture.EMPTY), this.mapSprite.anchor = new c.Point(.5, .5), this.container.addChild(this.mapSprite), this.container.addChild(this.display.gas), this.container.addChild(this.display.gasSafeZone), this.container.addChild(this.display.teammates), this.container.addChild(this.display.player), this.container.addChild(this.display.border), this.mapHeight = 0, this.mapWidth = 0, this.bigmapDisplayed = !1, this.screenScaleFactor = 1;
			var g = (k.getScreenDimensions().width, this.getMinimapMargin()),
				y = this.getMinimapSize();
			this.minimapPos = h.create(g + y / 2, e.camera.screenHeight - y / 2 - g), this.playerOuter = c.Sprite.fromImage("img/gui/player-map-outer.svg"), this.playerOuter.anchor = new c.Point(.5, .5), this.playerOuterBaseScale = new c.Point(f.layout == f.Layout.Sm ? .25 : .3, f.layout == f.Layout.Sm ? .25 : .3), this.playerOuter.scale = this.playerOuterBaseScale, this.playerOuter.tint = 16777215, this.player = c.Sprite.fromImage("img/gui/player-map-inner.svg"), this.player.anchor = new c.Point(.5, .5), this.playerBaseScale = new c.Point(f.layout == f.Layout.Sm ? .15 : .2, f.layout == f.Layout.Sm ? .15 : .2), this.player.scale = this.playerBaseScale, this.player.tint = 16777215, this.dead = !1, this.audioManager = t, this.actionSoundInstance = !1, this.muteButton = l("#ui-mute-ingame"), this.muteButtonImage = this.muteButton.find("img"), this.muteOffImg = "img/gui/audio-off.svg", this.muteOnImg = "img/gui/audio-on.svg";
			var b = this.audioManager.mute;
			this.muteButtonImage.attr("src", b ? this.muteOffImg : this.muteOnImg), this.muteButton.on("mousedown", function(e) {
				e.stopPropagation()
			}), this.muteButton.on("click", function(e) {
				var t = u.audioManager.muteToggle();
				u.muteButtonImage.attr("src", t ? u.muteOffImg : u.muteOnImg), t = null
			}), this.pieTimer = a, this.displayingStats = !1, this.teamMemberHealthBarWidth = parseInt(l(".ui-team-member-health").find(".ui-bar-inner").css("width")), this.teamMemberHeight = 48, this.teamPlayerCount = 0, this.teamSelectors = [];
			for (var w = 0; w < 4; w++) {
				var S, M = this.topLeft,
					T = w,
					P = c.Sprite.fromImage("img/gui/ping-map-pulse.svg");
				P.anchor = this.playerOuter.anchor, P.scale = new c.Point(0, 0), P.tint = d.teamColors[w], P.visible = !1, this.display.teammates.addChild(P);
				var C = c.Sprite.fromImage("img/gui/ping-map-coming.svg");
				C.anchor = this.player.anchor, C.scale = this.playerBaseScale, C.tint = d.teamColors[w], C.visible = !1, this.display.teammates.addChild(C);
				var z = c.Sprite.fromImage("img/gui/ping-map-danger.svg");
				z.anchor = this.player.anchor, z.scale = this.playerBaseScale, z.tint = d.teamColors[w], z.visible = !1, this.display.teammates.addChild(z);
				var I = c.Sprite.fromImage("img/gui/ping-map-help.svg");
				I.anchor = this.player.anchor, I.scale = this.playerBaseScale, I.tint = d.teamColors[w], I.visible = !1, this.display.teammates.addChild(I);
				var D = c.Sprite.fromImage("img/gui/player-map-outer.svg");
				D.anchor = this.playerOuter.anchor, D.scale = this.playerOuterBaseScale, D.tint = this.playerOuter.tint, D.visible = !1, this.display.teammates.addChild(D);
				var A = c.Sprite.fromImage("img/gui/player-map-inner.svg");
				A.anchor = this.player.anchor, A.scale = this.playerBaseScale, A.tint = d.teamColors[w], A.visible = !1, this.display.teammates.addChild(A), this.teamSelectors.push({
					teamNameHtml: "",
					teamId: l(M).find("[data-id=" + T + "]"),
					teamIdDisplayed: !1,
					teamName: l(M).find("[data-id=" + T + "]").find(".ui-team-member-name"),
					teamIcon: l(M).find("[data-id=" + T + "]").find(".ui-team-member-icon"),
					teamStatus: l(M).find("[data-id=" + T + "]").find(".ui-team-member-status"),
					teamHealthInner: l(M).find("[data-id=" + T + "]").find(".ui-health-actual"),
					teamHealthDepleted: l(M).find("[data-id=" + T + "]").find(".ui-health-depleted"),
					prevHealth: 0,
					prevStatus: {
						disconnected: !1,
						dead: !1,
						downed: !1
					},
					indicators: {
						main: {
							elem: l("#ui-team-indicators").find(".ui-indicator-main[data-id=" + T + "]"),
							displayed: !1
						}
					},
					mapSprites: (S = {
						outer: {
							sprite: D,
							position: h.create(0, 0),
							usePlayerPosition: !0,
							showOnDeath: !1,
							displayed: !0
						},
						inner: {
							sprite: A,
							position: h.create(0, 0),
							usePlayerPosition: !0,
							showOnDeath: !0,
							displayed: !0
						},
						pingPulseWave: {
							sprite: P,
							position: h.create(0, 0),
							usePlayerPosition: !1,
							showOnDeath: !0,
							displayed: !1,
							pulse: !0,
							scale: 0,
							baseScale: 0,
							life: 0,
							maxLife: 0
						}
					}, i(S, _.Coming, {
						sprite: C,
						position: h.create(0, 0),
						usePlayerPosition: !1,
						showOnDeath: !0,
						displayed: !1,
						life: 0,
						maxLife: 0
					}), i(S, _.Danger, {
						sprite: z,
						position: h.create(0, 0),
						usePlayerPosition: !1,
						showOnDeath: !0,
						displayed: !1,
						life: 0,
						maxLife: 0
					}), i(S, _.Help, {
						sprite: I,
						position: h.create(0, 0),
						usePlayerPosition: !1,
						showOnDeath: !0,
						displayed: !1,
						life: 0,
						maxLife: 0
					}), S),
					mapSpritesLocal: !1
				})
			}
			this.init()
		}

		function r(e, t, a, i) {
			var o = e,
				n = t,
				r = o + (n - o) / a * i;
			return Math.floor(r)
		}

		function s(e, t, a) {
			var i, o, n;
			! function(e, t, a) {
				i = e, o = t, n = a
			}(e, t, a), this.getColors = function() {
				return {
					r: i,
					g: o,
					b: n
				}
			}
		}
		var l = a("juYr"),
			c = a("gKxX"),
			m = a("8iex"),
			d = (a("9xSA"), a("+0OL")),
			p = d.Action,
			u = d.GasMode,
			h = (a("yp2f"), a("/2+T")),
			g = a("0od3"),
			f = (a("Tf6H"), a("K7EQ"), a("zinx")),
			y = a("85i3"),
			b = a("p/CU"),
			x = b.GasRenderer,
			v = b.GasSafeZoneRenderer,
			k = a("Jr6A"),
			_ = (a("EZ6M"), a("moUH").Ping),
			w = a("bkPR");
		n.prototype = {
			free: function() {
				this.clearUI(), l(document).off("keyup"), l(".ui-map-expand").off("mousedown"), l(".ui-map-expand").off("click"), l("#ui-map-minimize").off("mousedown"), l("#ui-map-minimize").off("click"), l("#ui-menu-display").off("click"), this.muteButton.off("mousedown"), this.muteButton.off("click"), this.fullScreenButton.off("mousedown"), this.fullScreenButton.off("click"), this.resumeButton.off("mousedown"), this.resumeButton.off("click"), l("#btn-spectate-quit").off("click"), l("#btn-game-quit").off("mousedown"), l("#btn-game-quit").off("click"), this.specStatsButton.off("click"), this.specPrevButton.off("click"), this.specNextButton.off("click"), this.bigmapClose.off("mousedown"), this.bigmapClose.off("click"), this.moveStyleButton.off("touchstart"), this.interactionElems.off("touchstart"), this.reloadElems.off("touchstart"), this.bigmapClose.off("touchend"), l(document).off("touchstart", this.onTouchScreen), l(".ui-team-member-health").find(".ui-bar-inner").css("width", this.teamMemberHealthBarWidth), this.init()
			},
			init: function() {
				l(".js-ui-map-hidden").css("display", "block"), this.clearStatsElems(), this.setSpectating(!1), this.updateSpectatorCountDisplay(!0), this.dead = !1
			},
			doQuitGame: function() {
				this.refreshMainPageAds(), this.game.gameOver = !0, this.game.onQuit()
			},
			update: function(e, t, a, i, o, n, r, s, l, b) {
				var x = this,
					v = t.netData,
					k = t.localData,
					_ = t;
				this.mapWidth = i.width, this.mapHeight = i.height, this.mapSprite.texture == c.Texture.EMPTY && null != i.getMapTexture() && (this.mapSprite.texture = i.getMapTexture(), this.redraw(s));
				var S = Math.max(Math.floor(o.duration * (1 - o.circleT)), 0),
					M = {
						mode: o.mode,
						time: S
					};
				if (this.gasState.mode != M.mode || this.gasState.time != M.time) {
					this.gasState = M;
					var T = this.gasState.mode == u.Moving;
					this.mapInfo.removeClass("icon-pulse"), this.gasIcon.removeClass("gas-icon"), this.gasIcon.removeClass("danger-icon"), T && this.mapInfo.addClass("icon-pulse"), this.gasIcon.addClass(T ? "danger-icon" : "gas-icon");
					var P = Math.floor(this.gasState.time / 60),
						C = this.gasState.time % 60,
						z = ("0" + C).slice(-2);
					this.gasTimer.html(P + ":" + z)
				}
				this.spectatorCount = k.spectatorCount, this.updateSpectatorCountDisplay(!1), v.dead && !this.dead && (this.dead = !0, this.pieTimer.free(!0));
				var I = k.action,
					D = g.eqAbs(g.clamp(I.time, 0, I.duration), I.duration, .2);
				if (!(this.curAction.type == I.type && this.curAction.item == I.item && this.curAction.duration == I.duration || D || this.displayingStats)) {
					this.curAction = {
						type: I.type,
						item: I.item,
						time: I.time,
						duration: I.duration
					};
					var A = I.type != p.Reload;
					if (this.pieTimer.free(A), this.actionSoundInstance && (this.audioManager.stopSound(this.actionSoundInstance), this.actionSoundInstance = !1), I.type != p.None) {
						var O = "",
							L = "",
							B = "",
							E = null,
							F = !1;
						switch (I.type) {
							case p.Reload:
								if ("" != I.item) {
									var R = d.items[I.item];
									L = this.localization.translate("game-reloading"), E = R.sound.reload, F = "reload" == R.caseTiming
								}
								break;
							case p.UseItem:
								if ("" != I.item) {
									var j = d.items[I.item];
									L = this.localization.translate("game-using"), B = this.localization.translate("game-" + I.item), E = j.sound.use
								}
								break;
							case p.Revive:
								var N = r.getPlayerInfo(I.targetId).nameUnEntity;
								L = this.localization.translate("game-reviving"), B = _.downed ? "" : N
						}
						if ("" == L && "" == B || ("svo" == this.localization.translate("word-order") ? (O += L || "", O += B ? " " + B : "") : "sov" == this.localization.translate("word-order") && (O += B ? B + " " : "", O += L ? " " + L : ""), this.pieTimer.init(function() {
								x.curAction.type = p.None
							}, this.curAction.duration - this.curAction.time, O, !1)), E && (this.actionSoundInstance = this.audioManager.playSound(E), this.audioManager.stopLocalActionSound()), F && "" != I.item)
							for (var q = d.items[I.item], G = 0; G < q.maxClip; G++) {
								var U = G % 2 == 0 ? -1 : 1,
									V = Math.PI + Math.PI / 4 * U;
								w.createCasingParticle(I.item, V, t.pos, t.dir, t.netData.layer, this.particleBarn)
							}
					}
				}
				this.bigmapDisplayed || (this.mapSprite.x = this.minimapPos.x + this.mapSprite.width / 2 - t.pos.x / i.width * this.mapSprite.width, this.mapSprite.y = this.minimapPos.y - this.mapSprite.height / 2 + t.pos.y / i.height * this.mapSprite.height);
				var H = h.create(.5 * s.screenWidth / s.z(), .5 * s.screenHeight / s.z()),
					W = {
						min: h.sub(s.pos, H),
						max: h.add(s.pos, H)
					},
					K = r.getPlayerInfo(t.__id).teamId,
					X = r.getTeamInfo(K);
				if (!X) {
					var Z = {
						playerId: t.__id,
						teamId: K,
						spectating: this.spectating,
						playing: this.game.playingTicker,
						teamInfo: r.teamInfo
					};
					y.logError("badTeamInfo_1: " + JSON.stringify(Z))
				}
				for (var Y = f.layout == f.Layout.Sm, J = X.playerIds.length, Q = 0; Q < J; Q++) {
					var $ = this.teamSelectors[Q],
						ee = X.playerIds[Q],
						te = r.getPlayerInfo(ee),
						ae = ee == _.__id,
						ie = r.getTeammateData(ee);
					if (ie) {
						for (var oe in $.mapSprites)
							if ($.mapSprites.hasOwnProperty(oe)) {
								var ne = $.mapSprites[oe],
									re = ne.sprite,
									se = ne.usePlayerPosition ? ie.pos : ne.position,
									le = ne.displayed && (!ie.dead || ne.showOnDeath);
								"outer" != oe || ae || (le = !1), this.updateMapPosition(re, se, le, i), ne.displayed && (void 0 != ne.life && (ne.life -= e, ne.displayed = ne.life > 0, ne.maxLife - ne.life < .1 ? re.alpha = (ne.maxLife - ne.life) / .1 : ne.life < .5 ? re.alpha = ne.life / .5 : re.alpha = 1), ne.pulse && ne.displayed && (ne.scale = ne.scale + e / 2.5, re.scale = new c.Point(ne.scale, ne.scale)))
							}
						if (ae && !$.mapSpritesLocal ? (this.display.player.addChild($.mapSprites.outer.sprite, $.mapSprites.inner.sprite), $.mapSpritesLocal = !0) : !ae && $.mapSpritesLocal && (this.display.teammates.addChild($.mapSprites.outer.sprite, $.mapSprites.inner.sprite), $.mapSpritesLocal = !1), l > 1) {
							$.teamIdDisplayed || ($.teamId.css("display", "block"), $.teamIdDisplayed = !0), this.updateTeam(Q, te.name, ie.health, {
								disconnected: ie.disconnected,
								dead: ie.dead,
								downed: ie.downed
							}, !1);
							for (var ce in $.indicators)
								if ($.indicators.hasOwnProperty(ce)) {
									var me = $.indicators[ce],
										de = me.elem,
										pe = !0;
									if (!ae || me.displayAll) {
										var ue = ie.pos,
											he = h.normalizeSafe(h.sub(ue, s.pos), h.create(1, 0)),
											ge = m.intersectRayAabb(s.pos, he, W.min, W.max),
											fe = Math.atan2(he.y, -he.x) + .5 * Math.PI,
											ye = s.pointToScreen(ge),
											be = m.testCircleAabb(ue, d.player.radius, W.min, W.max);
										if (!ie.dead && !be) {
											var xe = 32,
												ve = "translate(-50%, -50%) rotate(" + fe + "rad)";
											Y && (xe = 16, ve += " scale(0.5)"), pe = !1, de.css({
												left: g.clamp(ye.x, xe, s.screenWidth - xe),
												top: g.clamp(ye.y, xe, s.screenHeight - xe),
												transform: ve
											}), me.displayed || (de.css("display", "block"), me.displayed = !0)
										}
									}
									pe && me.displayed && (de.css("display", "none"), me.displayed = !1)
								}
						}
					}
				}
				for (var ke = J; ke < this.teamSelectors.length; ke++) {
					var _e = this.teamSelectors[ke];
					for (var we in _e.mapSprites)
						if (_e.mapSprites.hasOwnProperty(we)) {
							var Se = _e.mapSprites[we];
							Se.visible = !1
						}
					for (var Me in _e.indicators)
						if (_e.indicators.hasOwnProperty(Me)) {
							var Te = _e.indicators[Me];
							Te.displayed && (Te.elem.css("display", "none"), Te.displayed = !1)
						}
					if (_e.teamIdDisplayed) {
						for (var Pe in _e.mapSprites)
							if (_e.mapSprites.hasOwnProperty(Pe)) {
								var Ce = _e.mapSprites[Pe],
									ze = Ce.sprite;
								ze.visible = !1
							}
						_e.teamId.css("display", "none"), _e.teamIdDisplayed = !1
					}
				}
				l > 1 && this.teamPlayerCount != J && f.layout == f.Layout.Lg && (this.teamPlayerCount = J, this.spectateOptionsWrapper.css({
					top: this.teamPlayerCount * this.teamMemberHeight + 12
				}))
			},
			getMinimapMargin: function() {
				return f.layout == f.Layout.Sm ? 4 : 16
			},
			getMinimapSize: function() {
				return f.layout == f.Layout.Sm ? 192 : 256
			},
			getMinimapBorderWidth: function() {
				return f.layout == f.Layout.Sm ? 1 : 4
			},
			setPlayerPing: function(e, t, a, i) {
				var o = this.teamSelectors[t];
				if (o) {
					var n = o.mapSprites[e];
					if (n) {
						n.position = a, n.displayed = !0, n.life = i, n.maxLife = i;
						var r = o.mapSprites.pingPulseWave;
						r.position = a, r.displayed = !0, r.life = 4, r.maxLife = 4, r.scale = r.baseScale
					}
				}
			},
			updateMapPosition: function(e, t, a, i) {
				var o = this.getMapPosFromWorldPos(t, i);
				e.position = o, e.visible = a
			},
			getMapPosFromWorldPos: function(e, t) {
				var a = this.mapSprite.x - this.mapSprite.width / 2 + e.x / t.width * this.mapSprite.width,
					i = this.mapSprite.y + this.mapSprite.height / 2 - e.y / t.height * this.mapSprite.height;
				return h.create(a, i)
			},
			getWorldPosFromMapPos: function(e, t, a) {
				var i = !1;
				k.getScreenDimensions().width;
				if (this.bigmapDisplayed) {
					var o = (a.screenWidth - this.mapSprite.width) / 2,
						n = (a.screenHeight - this.mapSprite.height) / 2;
					f.layout != f.Layout.Sm || k.isLandscape() || (n = 0), i = e.x > o && e.x < a.screenWidth - o && e.y > n && e.y < a.screenHeight - n
				} else if (this.minimapDisplayed) {
					var r = this.getMinimapSize(),
						s = this.getMinimapMargin(),
						l = r * this.screenScaleFactor,
						c = .5 * (l + s);
					i = e.x > this.minimapPos.x - c && e.x < this.minimapPos.x + c && e.y > this.minimapPos.y - c && e.y < this.minimapPos.y + c
				}
				if (i) {
					var m = h.create(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y + this.mapSprite.height / 2),
						d = (e.x - m.x) / this.mapSprite.width * this.mapWidth,
						p = (m.y - e.y) / this.mapSprite.height * this.mapHeight;
					return h.create(d, p)
				}
				return !1
			},
			hideAll: function() {
				this.gameElem.css("display", "none")
			},
			showAll: function() {
				this.gameElem.css("display", "block")
			},
			removeAds: function() {
				var e = [];
				e.push("surviv-io_300x250"), f.mobile ? e.push("surviv-io_300x250_mobile_2") : (e.push("surviv-io_300x250_2"), e.push("surviv-io_728x90"));
				for (var t = 0; t < e.length; t++) ! function(t) {
					var a = e[t];
					window.aiptag.cmd.display.push(function() {
						aipDisplayTag.destroy(a)
					})
				}(t)
			},
			refreshMainPageAds: function() {
				if (window.adsEnabled && !window.adsense) {
					var e = ["surviv-io_300x250"];
					f.mobile || e.push("surviv-io_728x90");
					for (var t = 0; t < e.length; t++) ! function(t) {
						var a = e[t];
						window.aiptag.cmd.display.push(function() {
							aipDisplayTag.display(a)
						})
					}(t)
				}
			},
			showKill: function(e, t, a, i) {
				var o = this,
					n = i ? k.unEntity(e.name) : this.localization.translate("game-you").toUpperCase(),
					r = e.completeKill ? this.localization.translate("game-killed") : this.localization.translate("game-finally-killed"),
					s = t.downed && !t.killed;
				s && (r = this.localization.translate("game-knocked-out"));
				var l = t.suicide ? i ? this.localization.translate("game-themselves") : this.localization.translate("game-yourself").toUpperCase() : k.unEntity(t.name);
				this.killText.text(n + " " + r + " " + l), (e.completeKill || s) && a && this.killText.append(" " + this.localization.translate("game-with") + " " + a), s || t.suicide || t.teamKill ? this.killCount.text("") : this.killCount.text(e.kills + (1 != e.kills ? " " + this.localization.translate("game-kills") : " " + this.localization.translate("game-kill"))), this.killTimeout && clearTimeout(this.killTimeout), this.killElem.stop(!0), this.killElem.fadeIn(0), this.killTimeout = setTimeout(function() {
					o.killElem.fadeOut(1e3)
				}, 6e3)
			},
			showDowned: function(e, t, a, i) {
				var o = this,
					n = i ? k.unEntity(t.name) : this.localization.translate("game-you").toUpperCase(),
					r = k.unEntity(e.name);
				e.damageType == d.DamageType.Gas && (r = this.localization.translate("game-the-red-zone")), this.killText.text(r + " knocked " + n + " out"), a && e.damageType == d.DamageType.Player && this.killText.append(" " + this.localization.translate("game-with") + " " + a), this.killCount.text(""), this.killTimeout && clearTimeout(this.killTimeout), this.killElem.stop(!0), this.killElem.fadeIn(0), this.killTimeout = setTimeout(function() {
					o.killElem.fadeOut(1e3)
				}, 6e3)
			},
			clearUI: function() {
				this.pieTimer.free(!0), this.curAction = {
					type: p.None
				}, this.displayMapLarge(!0), this.displayMiniMap(), this.clearStatsElems(), this.killElem.hide(), this.clearTeamUI(), this.toggleEscMenu(!0), this.toggleLocalStats(!0), this.visibilityMode = 0, this.spectatorCount = 0
			},
			hideStats: function() {
				this.displayingStats = !1, this.statsMain.css("display", "none"), this.statsElem.stop().css({
					display: "none",
					opacity: 0
				}), this.statsContents.stop().hide()
			},
			showStats: function(e, t) {
				var a = this;
				if (e.teamMode = e.teamMode || 1, e.spectating = e.spectating || !1, e.gameOver = e.gameOver || !1, e.stats = e.stats || {
						timeAlive: 0,
						kills: 0,
						rank: 0
					}, 1 != e.teamMode || !e.spectating || e.gameOver) {
					this.toggleEscMenu(!0), this.displayMapLarge(!0), this.clearStatsElems(), this.statsMain.css("display", "block");
					var i = 2500,
						n = "";
					switch (e.teamMode) {
						case 1:
							n = this.localization.translate("game-solo-rank");
							break;
						case 2:
							n = this.localization.translate("game-duo-rank");
							break;
						case 4:
							n = this.localization.translate("game-squad-rank");
							break;
						default:
							n = this.localization.translate("game-rank")
					}
					var r = null;
					e.victory && (r = e.spectating && 1 == e.teamMode ? this.spectatedPlayerName + " " + this.localization.translate("game-won-the-game") : this.localization.translate("game-chicken"), i = 1750), 1 != e.teamMode ? this.statsHeader.html(function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							i = t || a.localization.translate("game-team-eliminated"),
							o = '<div class="ui-stats-header-right"><span class="ui-stats-header-stat">' + n + " </span>";
						o += '<span class="ui-stats-header-value">#' + e.teamRank + "</span></div>";
						for (var r = 0, s = 0; s < e.stats.length; s++) r += e.stats[s].kills;
						return o += '<div class="ui-stats-header-left"><span class="ui-stats-header-stat">' + a.localization.translate("game-team-kills") + " </span>", o += '<span class="ui-stats-header-value">' + r + "</span></div>", l("<div/>", {
							class: ""
						}).append(l("<div/>", {
							class: "ui-stats-header-title",
							html: t || i
						})).append(l("<div/>", {
							class: "ui-stats-header-overview",
							html: o
						}))
					}(r)) : this.statsHeader.html(function() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
							i = (e.stats[0], e.spectating && 1 == e.teamMode ? a.spectatedPlayerName : a.localization.translate("game-You"));
						i += " ", i += e.spectating && 1 == e.teamMode ? a.localization.translate("game-player-died") : a.localization.translate("game-you-died"), i += ".";
						var o = '<div><span class="ui-stats-header-stat">' + n + " </span>";
						return o += '<span class="ui-stats-header-value">#' + e.teamRank + "</span></div>", l("<div/>", {
							class: ""
						}).append(l("<div/>", {
							class: "ui-stats-header-title",
							html: t || i
						})).append(l("<div/>", {
							class: "ui-stats-header-overview",
							html: o
						}))
					}(r)), this.pieTimer.free(!0), this.displayingStats = !0;
					var s = function(e, t) {
							return l("<div/>", {
								class: "ui-stats-info"
							}).append(l("<div/>", {
								html: e
							})).append(l("<div/>", {
								html: t
							}))
						},
						c = f.layout == f.Layout.Sm ? 125 : 250,
						m = 0;
					m -= (e.stats.length - 1) * c / 2, m -= 10 * (e.stats.length - 1);
					for (var d = 0; d < e.stats.length; d++) {
						var p = e.stats[d],
							u = t.getPlayerInfo(p.playerId),
							h = o(p.timeAlive),
							g = "ui-stats-info-player";
						g += p.dead ? " ui-stats-info-status" : "";
						var y = function(e) {
							return l("<div/>", {
								class: e
							})
						}(g);
						y.css("left", m), y.append(l("<div/>", {
							class: "ui-stats-info-player-name",
							html: u.name
						})), y.append(s(this.localization.translate("game-kills"), "" + p.kills)).append(s(this.localization.translate("game-damage-dealt"), p.damageGiven)).append(s(this.localization.translate("game-damage-taken"), p.damageTaken)).append(s(this.localization.translate("game-survived"), h)), this.statsInfoBox.append(y), m += 10
					}
					var b = l("<a/>", {
						class: "ui-stats-restart btn-green btn-darken menu-option",
						html: this.localization.translate("game-play-new-game")
					});
					if (b.on("click", function() {
							a.doQuitGame()
						}), this.statsOptions.append(b), e.gameOver || this.waitingForPlayers) b.css({
						width: f.layout != f.Layout.Sm || f.tablet ? 225 : 130
					});
					else {
						b.css({
							left: f.layout != f.Layout.Sm || f.tablet ? -72 : -46
						});
						var x = l("<a/>", {
							class: "btn-green btn-darken menu-option",
							id: "ui-stats-spectate",
							html: this.localization.translate("game-spectate")
						});
						x.on("click", function() {
							a.beginSpectating = !0, a.hideStats()
						}), this.statsOptions.append(x)
					}
					if (!e.victory && window.adsEnabled && !window.adsense) {
						var v = i - 150;
						setTimeout(function() {
							a.killElem.stop(), a.killElem.hide(), l(f.mobile ? "#ui-stats-ad-container-mobile" : "#ui-stats-ad-container-desktop").css("display", "inline-block");
							var e = f.mobile ? "surviv-io_300x250_mobile_2" : "surviv-io_300x250_2";
							window.aiptag.cmd.display.push(function() {
								aipDisplayTag.display(e)
							})
						}, v)
					}
					var k = 0,
						_ = 250 / Math.max(1, e.stats.length),
						w = 750 / Math.max(1, e.stats.length);
					this.statsInfoBox.children().each(function(e, t) {
						var a = l(t);
						a.css("opacity", 0), a.delay(i + w + (k + e) * _).animate({
							opacity: 1
						}, 500, function() {
							a.children().each(function(e, t) {
								l(t).delay(e * _).animate({
									opacity: 1
								}, 500)
							})
						}), a.children().each(function(e, t) {
							l(t).css("opacity", 0), k++
						}), k++
					}), this.statsOptions.children().each(function(e, t) {
						var a = l(t);
						a.hide(), a.delay(i + w + (k + e) * _).fadeIn(500), k++
					}), this.statsElem.stop(), this.statsElem.css("display", "block"), this.statsElem.delay(i).animate({
						opacity: 1
					}, 1e3), this.statsContents.stop(), this.statsContents.css("display", "block"), this.statsContents.delay(i).animate({
						opacity: 1
					}, 1e3)
				}
			},
			clearStatsElems: function() {
				this.statsHeader.empty(), this.statsInfoBox.empty(), this.statsOptions.empty(), this.statsAds.css("display", "none"), this.statsContents.stop(), this.statsContents.css({
					display: "none",
					opacity: 0
				}), this.statsElem.stop(), this.statsElem.css({
					display: "none",
					opacity: 0
				}), this.statsMain.css("display", "none")
			},
			setSpectating: function(e) {
				if (this.spectating != e)
					if (this.spectating = e, this.spectatedPlayerName = "", e) {
						this.spectateMode.css("display", "block");
						var t = this.game.teamMode <= 2;
						this.specPrevButton.css("display", t ? "none" : "block"), this.specNextButton.css("display", t ? "none" : "block"), l(".ui-zoom").removeClass("ui-zoom-hover")
					} else this.spectateMode.css("display", "none")
			},
			setSpectatedPlayer: function(e, t) {
				this.spectatedPlayerId != e && (this.spectatedPlayerText.find("#spectate-player").html(t), this.spectatedPlayerName = t, this.spectatedPlayerId = e, this.curAction = {
					type: p.None
				})
			},
			setLocalStats: function(e) {
				var t = {
					kills: this.localization.translate("game-kills"),
					damageGiven: this.localization.translate("game-damage-dealt"),
					damageTaken: this.localization.translate("game-damage-taken"),
					timeAlive: this.localization.translate("game-survived")
				};
				this.spectateModeStatsData.empty();
				for (var a in t)
					if (t.hasOwnProperty(a)) {
						var i = t[a],
							n = "timeAlive" == a ? o(e[a]) : e[a],
							r = '<tr><td class="ui-spectate-stats-category">' + i + '</td><td class="ui-spectate-stats-value">' + n + "</td></tr>";
						this.spectateModeStatsData.append(r)
					}
			},
			toggleLocalStats: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = "none" == this.spectateModeStats.css("display") && !e;
				this.spectateModeStats.css("display", t ? "inline-block" : "none"), this.specStatsButton.html(t ? this.localization.translate("game-hide-match-stats") : this.localization.translate("game-view-match-stats"))
			},
			updatePlayersAlive: function(e) {
				this.playersAlive.html(e)
			},
			displayMapLarge: function(e) {
				this.bigmapDisplayed = !e && !this.bigmapDisplayed, this.bigmapDisplayed ? this.container.alpha = 1 : this.container.alpha = this.minimapDisplayed ? 1 : 0;
				var t = f.layout == f.Layout.Sm ? ".js-ui-mobile-map-hidden" : "js-ui-desktop-map-hidden";
				t += ", .js-ui-map-hidden", l(2 == this.visibilityMode ? ".js-ui-hud-show" : t).css("display", this.bigmapDisplayed ? "none" : "block"), this.bigmap.css("display", this.bigmapDisplayed ? "block" : "none"), this.updateSpectatorCountDisplay(!0), this.redraw(this.game.camera)
			},
			updateSpectatorCountDisplay: function(e) {
				var t = !this.bigmapDisplayed && this.spectatorCount > 0;
				e = e || this.spectatorCount > 0 && !this.spectatorCounterDisplayed || 0 == this.spectatorCount && this.spectatorCounterDisplayed, this.spectatorCount != this.prevSpectatorCount && (this.spectatorCounter.html(this.spectatorCount), this.prevSpectatorCount = this.spectatorCount), e && (this.spectatorCounterContainer.css("display", t ? "block" : "none"), this.spectatorCounterDisplayed = t)
			},
			toggleMiniMap: function() {
				this.minimapDisplayed ? this.hideMiniMap() : this.displayMiniMap()
			},
			cycleVisibilityMode: function() {
				if (!this.bigmapDisplayed) switch (this.visibilityMode) {
					case 0:
						this.hideMiniMap(), this.visibilityMode = 1;
						break;
					case 1:
						this.displayMiniMap(), this.visibilityMode = 0
				}
			},
			cycleHud: function() {
				"none" == this.gameElem.css("display") ? (this.gameElem.css("display", "block"), this.displayMiniMap()) : (this.gameElem.css("display", "none"), this.hideMiniMap())
			},
			hideMiniMap: function() {
				this.bigmapDisplayed || (this.minimapDisplayed = !1, this.container.alpha = 0, this.mapInfo.css("bottom", "auto"), this.spectatorCounterContainer.css({
					bottom: 6,
					left: 98
				}))
			},
			displayMiniMap: function() {
				if (!this.bigmapDisplayed) {
					var e = f.layout == f.Layout.Sm;
					this.minimapDisplayed = !0, this.container.alpha = 1, this.mapInfo.css("bottom", this.mapInfoBottom), this.spectatorCounterContainer.css({
						bottom: e ? 0 : 218,
						left: e ? 0 : 6
					})
				}
			},
			displayAnnouncement: function(e, t) {
				var a = "";
				switch (e) {
					case u.Waiting:
						a = this.localization.translate("game-red-zone-advances");
						var i = Math.floor(t / 60),
							o = t - 60 * i;
						a += i > 1 ? " " + i + " " + this.localization.translate("game-minutes") : "", a += 1 == i ? " " + i + " " + this.localization.translate("game-minute") : "", a += o > 0 ? " " + Math.floor(o) + " " + this.localization.translate("game-seconds") : "";
						break;
					case u.Moving:
						a = this.localization.translate("game-red-zone-advancing")
				}
				a.length > 0 && (this.announcement.html(a), this.announcement.fadeIn(400, function() {
					setTimeout(function() {
						l("#ui-announcement").fadeOut(800)
					}, 3e3)
				}))
			},
			setWaitingForPlayers: function(e) {
				this.waitingForPlayers = e, this.waitingText.css("display", e ? "block" : "none")
			},
			render: function(e, t, a, i) {
				var o = t.getCircle(),
					n = this.getMapPosFromWorldPos(o.pos, i),
					r = this.getMapPosFromWorldPos(h.add(o.pos, h.create(o.rad, 0)), i),
					s = h.length(h.sub(r, n));
				this.gasRenderer.render(n, s, t.isActive());
				var l = t.circleNew,
					c = this.getMapPosFromWorldPos(l.pos, i),
					m = this.getMapPosFromWorldPos(h.add(l.pos, h.create(l.rad, 0)), i),
					d = h.length(h.sub(m, c)),
					p = this.getMapPosFromWorldPos(e, i),
					u = t.isActive(),
					g = t.isActive() && !this.bigmapDisplayed;
				this.gasSafeZoneRenderer.render(c, d, p, u, g)
			},
			updateHealthBar: function(e, t, a, i) {
				var o = e,
					n = .01 * i.health * o;
				n = i.dead ? 0 : Math.max(n, 1), t.css("width", n), n > 0 ? a.css("width", n) : a.css("display", "none");
				var s = i.health,
					l = this.healthRed,
					c = this.healthDarkpink;
				if (s > 25) {
					if (i.downed) t.css({
						backgroundColor: "red"
					});
					else {
						g.eqAbs(s, 100, .2) ? (l = this.healthGrey, c = this.healthGrey) : g.eqAbs(s, 75, .2) || s >= 75 ? (l = this.healthWhite, c = this.healthWhite) : (l = this.healthDarkpink, c = this.healthLightpink);
						var m = l.getColors(),
							d = c.getColors(),
							p = r(m.r, d.r, 45, s),
							u = r(m.g, d.g, 45, s),
							h = r(m.b, d.b, 45, s);
						t.css({
							backgroundColor: "rgba(" + p + "," + u + "," + h + ",1)"
						})
					}
					t.removeClass("ui-bar-danger")
				} else t.addClass("ui-bar-danger")
			},
			updateTeam: function(e, t, a, i) {
				var o = this.teamSelectors[e].teamId,
					n = this.teamSelectors[e].teamName,
					r = this.teamSelectors[e].prevHealth,
					s = this.teamSelectors[e].prevStatus,
					l = i.dead != s.dead || i.disconnected != s.disconnected || i.downed != s.downed;
				if (this.teamSelectors[e].teamNameHtml != t || a != r || l) {
					var m = (this.teamSelectors[e].teamIcon, this.teamSelectors[e].teamStatus),
						d = this.teamSelectors[e].teamHealthInner,
						p = this.teamSelectors[e].teamHealthDepleted;
					this.teamSelectors[e].teamNameHtml = t, n.html(t), this.updateHealthBar(this.teamMemberHealthBarWidth, d, p, {
						health: a,
						dead: i.dead,
						downed: i.downed
					}), l && (m.attr("class", "ui-team-member-status"), i.disconnected ? m.addClass("ui-team-member-status-disconnected") : i.dead ? m.addClass("ui-team-member-status-dead") : i.downed && m.addClass("ui-team-member-status-downed").addClass("icon-pulse"), i.dead && (this.teamSelectors[e].mapSprites.inner.sprite.texture = c.Texture.fromImage("img/gui/skull-team-outlined.svg"), this.teamSelectors[e].mapSprites.inner.sprite.scale = h.mul(this.playerBaseScale, 1.5)), (i.disconnected || i.dead) && n.css("opacity", .3)), o.css("display", "block"), this.teamSelectors[e].prevStatus = i, this.teamSelectors[e].prevHealth = a
				}
			},
			clearTeamUI: function() {
				l(".ui-team-member").css("display", "none"), l(".ui-team-indicator").css("display", "none"), l(".ui-team-member-name").removeAttr("style"), l(".ui-team-member-status").removeAttr("style"), l(".ui-team-member-status").removeClass("ui-team-member-status-downed ui-team-member-status-dead ui-team-member-status-disconnected icon-pulse"), this.teamSelectors = []
			},
			resize: function(e) {
				this.screenScaleFactor = f.layout == f.Layout.Sm ? .5626 : Math.min(1, g.clamp(e.screenWidth / 1280, .75, 1) * g.clamp(e.screenHeight / 1024, .75, 1)), this.pieTimer.resize(this.touch, this.screenScaleFactor), this.gasRenderer.resize(), this.redraw(e)
			},
			redraw: function(e) {
				var t = e.screenWidth,
					a = e.screenHeight,
					i = this.getMinimapMargin(),
					o = this.getMinimapSize(),
					n = this.getMinimapBorderWidth(),
					r = f.layout == f.Layout.Sm;
				if (this.display.border.clear(), this.container.mask.clear(), this.bigmapDisplayed) {
					var s = g.min(t, a);
					this.mapSprite.width = s, this.mapSprite.height = s, this.mapSprite.x = t / 2, this.mapSprite.y = a / 2, this.mapSprite.alpha = 1, this.container.mask.beginFill(16777215, 1), this.container.mask.drawRect(this.mapSprite.x - this.mapSprite.width / 2, this.mapSprite.y - this.mapSprite.height / 2, this.mapSprite.width, this.mapSprite.height), this.container.mask.endFill(), f.touch && this.bigmapCollision.css({
						width: a,
						height: t
					})
				} else {
					var l = 1600 * this.screenScaleFactor / 1.2,
						m = o * this.screenScaleFactor;
					this.mapSprite.width = l, this.mapSprite.height = l, this.mapSprite.alpha = .8;
					var d = {
						zoom: this.screenScaleFactor
					};
					document.body && ("WebkitTransform" in document.body.style ? d = {
						"-webkit-transform": "scale(" + this.screenScaleFactor + ")"
					} : "transform" in document.body.style && (d = {
						transform: "scale(" + this.screenScaleFactor + ")"
					})), this.mapContainer.css(d), this.mapContainer.css("bottom", this.mapContainerBottom * this.screenScaleFactor);
					var p = r ? m / 2 + i : a - m / 2 - i;
					this.minimapPos.x = i + m / 2, this.minimapPos.y = p, this.player.position = new c.Point(this.minimapPos.x, this.minimapPos.y), this.display.border.lineStyle(n, 0), this.display.border.beginFill(0, 0);
					var u = r ? i + n / 2 : a - m - i + n / 2;
					this.display.border.drawRect(i + n / 2, u, m - n, m - n), this.display.border.endFill();
					var h = r ? i : a - m - i;
					this.container.mask.beginFill(16777215, 1), this.container.mask.drawRect(i, h - .5, m, m), this.container.mask.endFill()
				}
			},
			toggleEscMenu: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				if (!this.displayingStats) {
					if (this.escMenuDisplayed || e) return this.escMenuDisplayed = !1, void this.escMenuElem.css("display", "none");
					if (this.bigmapDisplayed) return void this.displayMapLarge(!0);
					2 == this.visibilityMode && this.cycleVisibilityMode(), this.escMenuDisplayed = !0, this.escMenuElem.css("display", "block")
				}
			}
		}, e.exports = {
			UiManager: n
		}
	},
	MeqN: function(e, t, a) {
		"use strict";
		(function(t) {
			! function(a) {
				function i(e, t) {
					return n(e, t, !1)
				}

				function o(e, t) {
					return n(e, t, !0)
				}

				function n(e, t, a) {
					if (0 === t) return "";
					var i = 0,
						o = [],
						n = !0,
						r = !!t;
					for (t || (t = Math.floor((e._length - e._index) / 8)); i < t;) {
						var s = e.readUint8();
						if (0 === s && (n = !1, !r)) break;
						n && o.push(s), i++
					}
					var l = String.fromCharCode.apply(null, o);
					if (!a) return l;
					try {
						return decodeURIComponent(escape(l))
					} catch (e) {
						return l
					}
				}

				function r(e, t, a) {
					for (var i = a || t.length + 1, o = 0; o < i; o++) e.writeUint8(o < t.length ? t.charCodeAt(o) : 0)
				}

				function s(e, t, a) {
					for (var i = l(t), o = a || i.length + 1, n = 0; n < o; n++) e.writeUint8(n < i.length ? i[n] : 0)
				}

				function l(e) {
					var t, a, i = [];
					for (t = 0; t < e.length; t++) a = e.charCodeAt(t), a <= 127 ? i.push(a) : a <= 2047 ? (i.push(a >> 6 | 192), i.push(63 & a | 128)) : a <= 65535 ? (i.push(a >> 12 | 224), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128)) : (i.push(a >> 18 | 240), i.push(a >> 12 & 63 | 128), i.push(a >> 6 & 63 | 128), i.push(63 & a | 128));
					return i
				}
				var c = function(e, a, i) {
					if (!(e instanceof ArrayBuffer || void 0 !== t && e instanceof t)) throw new Error("Must specify a valid ArrayBuffer or Buffer.");
					a = a || 0, i = i || e.byteLength || e.length, this._view = new Uint8Array(e, a, i)
				};
				c._scratch = new DataView(new ArrayBuffer(8)), Object.defineProperty(c.prototype, "buffer", {
					get: function() {
						return t.from(this._view.buffer)
					},
					enumerable: !0,
					configurable: !1
				}), Object.defineProperty(c.prototype, "byteLength", {
					get: function() {
						return this._view.length
					},
					enumerable: !0,
					configurable: !1
				}), c.prototype._setBit = function(e, t) {
					t ? this._view[e >> 3] |= 1 << (7 & e) : this._view[e >> 3] &= ~(1 << (7 & e))
				}, c.prototype.getBits = function(e, t, a) {
					var i = 8 * this._view.length - e;
					if (t > i) throw new Error("Cannot get " + t + " bit(s) from offset " + e + ", " + i + " available");
					for (var o = 0, n = 0; n < t;) {
						var r = t - n,
							s = 7 & e,
							l = this._view[e >> 3],
							c = Math.min(r, 8 - s);
						o |= (l >> s & (1 << c) - 1) << n, e += c, n += c
					}
					return a ? (32 !== t && o & 1 << t - 1 && (o |= -1 ^ (1 << t) - 1), o) : o >>> 0
				}, c.prototype.setBits = function(e, t, a) {
					var i = 8 * this._view.length - e;
					if (a > i) throw new Error("Cannot set " + a + " bit(s) from offset " + e + ", " + i + " available");
					for (var o = 0; o < a;) {
						var n;
						a - o >= 8 && 0 == (7 & e) ? (this._view[e >> 3] = 255 & t, n = 8) : (this._setBit(e, 1 & t), n = 1), t >>= n, e += n, o += n
					}
				}, c.prototype.getBoolean = function(e) {
					return 0 !== this.getBits(e, 1, !1)
				}, c.prototype.getInt8 = function(e) {
					return this.getBits(e, 8, !0)
				}, c.prototype.getUint8 = function(e) {
					return this.getBits(e, 8, !1)
				}, c.prototype.getInt16 = function(e) {
					return this.getBits(e, 16, !0)
				}, c.prototype.getUint16 = function(e) {
					return this.getBits(e, 16, !1)
				}, c.prototype.getInt32 = function(e) {
					return this.getBits(e, 32, !0)
				}, c.prototype.getUint32 = function(e) {
					return this.getBits(e, 32, !1)
				}, c.prototype.getFloat32 = function(e) {
					return c._scratch.setUint32(0, this.getUint32(e)), c._scratch.getFloat32(0)
				}, c.prototype.getFloat64 = function(e) {
					return c._scratch.setUint32(0, this.getUint32(e)), c._scratch.setUint32(4, this.getUint32(e + 32)), c._scratch.getFloat64(0)
				}, c.prototype.setBoolean = function(e, t) {
					this.setBits(e, t ? 1 : 0, 1)
				}, c.prototype.setInt8 = c.prototype.setUint8 = function(e, t) {
					this.setBits(e, t, 8)
				}, c.prototype.setInt16 = c.prototype.setUint16 = function(e, t) {
					this.setBits(e, t, 16)
				}, c.prototype.setInt32 = c.prototype.setUint32 = function(e, t) {
					this.setBits(e, t, 32)
				}, c.prototype.setFloat32 = function(e, t) {
					c._scratch.setFloat32(0, t), this.setBits(e, c._scratch.getUint32(0), 32)
				}, c.prototype.setFloat64 = function(e, t) {
					c._scratch.setFloat64(0, t), this.setBits(e, c._scratch.getUint32(0), 32), this.setBits(e + 32, c._scratch.getUint32(4), 32)
				}, c.prototype.getArrayBuffer = function(e, t) {
					for (var a = new Uint8Array(t), i = 0; i < t; i++) a[i] = this.getUint8(e + 8 * i);
					return a
				};
				var m = function(e, t) {
						return function() {
							if (this._index + t > this._length) throw new Error("Trying to read past the end of the stream");
							var a = this._view[e](this._index);
							return this._index += t, a
						}
					},
					d = function(e, t) {
						return function(a) {
							this._view[e](this._index, a), this._index += t
						}
					},
					p = function(e, a, i) {
						var o = e instanceof ArrayBuffer || void 0 !== t && e instanceof t;
						if (!(e instanceof c || o)) throw new Error("Must specify a valid BitView, ArrayBuffer or Buffer");
						this._view = o ? new c(e, a, i) : e, this._index = 0, this._startIndex = 0, this._length = 8 * this._view.byteLength
					};
				Object.defineProperty(p.prototype, "index", {
					get: function() {
						return this._index - this._startIndex
					},
					set: function(e) {
						this._index = e + this._startIndex
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "length", {
					get: function() {
						return this._length - this._startIndex
					},
					set: function(e) {
						this._length = e + this._startIndex
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "bitsLeft", {
					get: function() {
						return this._length - this._index
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "byteIndex", {
					get: function() {
						return Math.ceil(this._index / 8)
					},
					set: function(e) {
						this._index = 8 * e
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(p.prototype, "buffer", {
					get: function() {
						return this._view.buffer
					},
					enumerable: !0,
					configurable: !1
				}), Object.defineProperty(p.prototype, "view", {
					get: function() {
						return this._view
					},
					enumerable: !0,
					configurable: !1
				}), p.prototype.readBits = function(e, t) {
					var a = this._view.getBits(this._index, e, t);
					return this._index += e, a
				}, p.prototype.writeBits = function(e, t) {
					this._view.setBits(this._index, e, t), this._index += t
				}, p.prototype.readBoolean = m("getBoolean", 1), p.prototype.readInt8 = m("getInt8", 8), p.prototype.readUint8 = m("getUint8", 8), p.prototype.readInt16 = m("getInt16", 16), p.prototype.readUint16 = m("getUint16", 16), p.prototype.readInt32 = m("getInt32", 32), p.prototype.readUint32 = m("getUint32", 32), p.prototype.readFloat32 = m("getFloat32", 32), p.prototype.readFloat64 = m("getFloat64", 64), p.prototype.writeBoolean = d("setBoolean", 1), p.prototype.writeInt8 = d("setInt8", 8), p.prototype.writeUint8 = d("setUint8", 8), p.prototype.writeInt16 = d("setInt16", 16), p.prototype.writeUint16 = d("setUint16", 16), p.prototype.writeInt32 = d("setInt32", 32), p.prototype.writeUint32 = d("setUint32", 32), p.prototype.writeFloat32 = d("setFloat32", 32), p.prototype.writeFloat64 = d("setFloat64", 64), p.prototype.readASCIIString = function(e) {
					return i(this, e)
				}, p.prototype.readUTF8String = function(e) {
					return o(this, e)
				}, p.prototype.writeASCIIString = function(e, t) {
					r(this, e, t)
				}, p.prototype.writeUTF8String = function(e, t) {
					s(this, e, t)
				}, p.prototype.readBitStream = function(e) {
					var t = new p(this._view);
					return t._startIndex = this._index, t._index = this._index, t.length = e, this._index += e, t
				}, p.prototype.writeBitStream = function(e, t) {
					t || (t = e.bitsLeft);
					for (var a; t > 0;) a = Math.min(t, 32), this.writeBits(e.readBits(a), a), t -= a
				}, p.prototype.readArrayBuffer = function(e) {
					var t = this._view.getArrayBuffer(this._index, e);
					return this._index += 8 * e, t
				}, p.prototype.writeArrayBuffer = function(e, t) {
					this.writeBitStream(new p(e), 8 * t)
				}, e.exports = {
					BitView: c,
					BitStream: p
				}
			}()
		}).call(t, a("dskh").Buffer)
	},
	Mzdc: function(e, t, a) {
		"use strict";

		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t, a) {
			var i = t - e,
				o = i * a;
			return Math.abs(o) < .001 ? i : o
		}

		function n(e, t, a, i, o, n) {
			for (var r = i, s = d.add(t, d.mul(a, i)), c = e.obstaclePool.getPool(), p = 0; p < c.length; p++) {
				var u = c[p];
				if (!(!u.active || u.dead || !u.collidable || u.isWindow || u.height < o || !m.sameLayer(u.layer, n) || 2 & n && 0 == u.layer)) {
					var h = l.intersectSegment(u.collider, t, s);
					h && (r = Math.min(r, d.length(d.sub(h.point, t))))
				}
			}
			return r
		}
		var r = function() {
				function e(e, t) {
					for (var a = 0; a < t.length; a++) {
						var i = t[a];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
					}
				}
				return function(t, a, i) {
					return a && e(t.prototype, a), i && e(t, i), t
				}
			}(),
			s = (a("DlZn"), a("gKxX")),
			l = a("9xSA"),
			c = (a("0od3"), a("Bk7F")),
			m = a("Tf6H"),
			d = a("/2+T"),
			p = a("zinx"),
			u = a("r4ug"),
			h = a("EZ6M"),
			g = a("xgte"),
			f = g.RenderType,
			y = function() {
				function e() {
					i(this, e), this.sprites = []
				}
				return r(e, [{
					key: "init",
					value: function() {
						this.isNew = !1, this.residue = null, this.ceilingDead = !1, this.playedCeilingDeadFx = !1
					}
				}, {
					key: "free",
					value: function() {
						for (var e = 0; e < this.sprites.length; e++) {
							var t = this.sprites[e];
							t.active = !1, t.sprite.visible = !1, t.sprite.parent && t.sprite.parent.removeChild(t.sprite)
						}
					}
				}, {
					key: "allocSprite",
					value: function() {
						for (var e = 0; e < this.sprites.length; e++) {
							var t = this.sprites[e];
							if (!t.active) return t.active = !0, t.sprite
						}
						var a = new s.Sprite;
						return a.anchor.set(.5, .5), this.sprites.push({
							active: !0,
							sprite: a
						}), a
					}
				}, {
					key: "updateData",
					value: function(e, t, a, i) {
						var o = this;
						if (this.type = e.type, this.pos = d.copy(e.pos), this.rot = c.oriToRad(e.ori), this.scale = 1, this.layer = e.layer, this.ceilingDead = e.ceilingDead, a) {
							var n = c.Defs[e.type];
							this.isNew = !0, this.playedCeilingDeadFx = -1 != i.map.deadCeilingIds.indexOf(this.__id);
							var r = function(e) {
								var t = e.pos || d.create(0, 0),
									a = c.oriToRad(e.rot || 0),
									i = o.allocSprite();
								return i.texture = s.Texture.fromImage(e.sprite), i.tint = e.tint, i.posOffset = d.rotate(t, o.rot), i.rotOffset = a, i.imgAlpha = e.alpha, i.alpha = i.imgAlpha, i.defScale = e.scale, i.visible = !0, i
							};
							this.bounds = l.transform(c.getBoundingCollider(this.type), this.pos, this.rot, this.scale), this.zIdx = n.zIdx || 0, this.surfaces = [];
							for (var m = 0; m < n.floor.surfaces.length; m++) {
								for (var p = n.floor.surfaces[m], u = {
										surface: p.type,
										colliders: []
									}, h = 0; h < p.collision.length; h++) u.colliders.push(l.transform(p.collision[h], this.pos, this.rot, this.scale));
								this.surfaces.push(u)
							}
							var g = Object.assign({}, {
								dist: 5.5,
								width: 2.75,
								linger: 0,
								fadeRate: 12
							}, n.ceiling.vision);
							this.ceiling = {
								scopeIn: [],
								scopeOut: [],
								vision: g,
								visionTicker: 0,
								fadeAlpha: 1
							};
							for (var f = 0; f < n.ceiling.scopeIn.length; f++) this.ceiling.scopeIn.push(l.transform(n.ceiling.scopeIn[f], this.pos, this.rot, this.scale));
							for (var y = 0; y < n.ceiling.scopeOut.length; y++) this.ceiling.scopeOut.push(l.transform(n.ceiling.scopeOut[y], this.pos, this.rot, this.scale));
							this.imgs = [];
							for (var b = 0; b < n.floor.imgs.length; b++) this.imgs.push({
								sprite: r(n.floor.imgs[b]),
								isCeiling: !1,
								zOrd: this.zIdx,
								zIdx: 100 * this.__id + b
							});
							for (var x = 0; x < n.ceiling.imgs.length; x++) this.imgs.push({
								sprite: r(n.ceiling.imgs[x]),
								isCeiling: !0,
								zOrd: 750 - this.zIdx,
								zIdx: 100 * this.__id + x
							})
						}
					}
				}, {
					key: "update",
					value: function(e, t, a, i, n, r, l) {
						if (this.ceilingDead && !this.playedCeilingDeadFx && (t.deadCeilingIds.push(this.__id), this.playedCeilingDeadFx = !0, this.isNew || this.destroyCeilingFx(a, i)), this.isNew = !1, this.ceilingDead && !this.residue) {
							var m = c.Defs[this.type];
							if (void 0 !== m.ceiling.destroy) {
								var d = this.allocSprite();
								d.texture = s.Texture.fromImage(m.ceiling.destroy.residue), d.position.set(0, 0), d.scale.set(1, 1), d.rotation = 0, d.visible = !0, this.imgs[0].sprite.addChild(d), this.residue = d
							}
						}
						var p = this.ceiling;
						p.visionTicker -= e;
						for (var u = p.vision, h = 0; h < p.scopeIn.length; h++) {
							var g = p.scopeIn[h];
							if (this.canSeeInside(t, n.pos, n.layer, u, g)) {
								p.visionTicker = u.linger + 1e-4;
								break
							}
						}
						n.noCeiling
