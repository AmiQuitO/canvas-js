const MAP_WIDTH = 165;
const MAP_HEIGHT = 165;
const CHUNKS_BASE_COUNT = 8; // normally 8
const CHUNKS_SIZE = 15;
const TILE_COLOR = ["#c1f376", "#a1df50", "#79d021", "#5fc314", "#55c233", "#37ae0f" ];
// color for background on dungeons? #e4dcb7

let mapTiles = [];

let mapChunks = [];
let progressLevel = 1;

const CANVAS_HEIGHT = 450;
const CANVAS_WIDTH = 800;
const BASE_SCALE = 15; // normally 20 // in the final game 35/40?

const SPRITE_SIZE = 32; // better not change
const MOVEMENT_SPEED = 1; // normally 1
let FOV = 100; // normally 20