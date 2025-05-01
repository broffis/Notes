function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
): boolean {
    // 1. Base Case
    // Off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        // We shouldn't go this way
        return false;
    }

    // On a wall
    if (maze[curr.y][curr.x] === wall) {
        // We shouldn't go this way
        return false;
    }

    // Found the end
    if (curr.x === end.x && curr.y === end.y) {
        // We found the end
        return true;
    }

    // We have already been here
    if (seen[curr.y][curr.x]) {
        // We shouldn't go this way
        return false;
    }
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {}
