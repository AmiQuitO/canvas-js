const MAP_WIDTH = 357;
const MAP_HEIGHT = 357;
const CHUNKS_BASE_COUNT = 8; // normally 8
const CHUNKS_SIZE = 17;
const TILE_COLOR = ["#c1f376", "#a1df50", "#79d021", "#5fc314", "#55c233", "#37ae0f" ];
// color for background on dungeons? #e4dcb7

/** @type {Tile[][]} */
let mapTiles = [];

/** @type {Chunk[]} */
let mapChunks = [];
let progressLevel = 1;

const CANVAS_HEIGHT = 450; // 450
const CANVAS_WIDTH = 800; // 800
const BASE_SCALE = 15; // normally 20 // in the final game 30/35?

const SPRITE_SIZE = 32; // better not change
const MOVEMENT_SPEED = 1; // normally 1
let FOV = 15; // normally 20 // final 7?