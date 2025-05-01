const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
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
        path.push(curr);
        return true;
    }

    // We have already been here
    if (seen[curr.y][curr.x]) {
        // We shouldn't go this way
        return false;
    }

    // Pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // Recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)
        ) {
            // We found the end
            return true;
        }
    }

    // Post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
