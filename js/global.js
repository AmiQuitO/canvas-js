const CHUNKS_SIZE = 23; // an odd number // normally 23
const CHUNKS_ONEWAY_COUNT = 41; // must be an odd number

const MAP_WIDTH = CHUNKS_SIZE*CHUNKS_ONEWAY_COUNT;
const MAP_HEIGHT = MAP_WIDTH; // square map

const CHUNKS_BASE_COUNT = 2; // normally 2

const TILE_COLOR = ["#c1f376", "#a1df50", "#79d021", "#5fc314", "#55c233", "#37ae0f" ];
const DUN_COLOR = ["#252525", "#aaa89c"];
// color for background on dungeons? #e4dcb7

/** @type {Tile[][]} */
//let mapTiles = []; swapped for Map.tiles = [];

/** @type {Chunk[]} */
//let mapChunks = []; swapped for Map.chunks = [];

let progressLevel = 1;
const BASE_CHEST_COUNT = 1;
const BASE_CRATE_COUNT = 3;
const BASE_ENEMY_COUNT = 4;

const CANVAS_HEIGHT = 900; // 450
const CANVAS_WIDTH = 1600; // 800

const BASE_SCALE = 32; // leave it on 24

const SPRITE_SIZE = 32; // better not change // are we even using it?

const MOVEMENT_SPEED = 1; // leave it on 1
let FOV = 20; // normally 20 // final 7?