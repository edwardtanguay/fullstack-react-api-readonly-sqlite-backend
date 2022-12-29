import Database from 'better-sqlite3';
import { IFlashcard } from './interfaces.js';
import * as tools from './tools.js';

const dbAbsolutePathAndFileName = tools.absolutifyPathAndFileName('src/data/db.sqlite');
const db = new Database(dbAbsolutePathAndFileName);
db.pragma(`journal_mode = WAL`);

export const getFlashcards = (): IFlashcard[] => {
	const stmt = db.prepare('SELECT * FROM flashcards');
	const flashcards: IFlashcard[] = [];
	for (let row of stmt.iterate()) {
		flashcards.push(row);
	}
	return flashcards;
}

export const getFlashcard = (id: number): IFlashcard => {
	const row = db.prepare('SELECT * FROM flashcards WHERE id = ?').get(id);
	if (row === undefined) {
		return row;
	} else {
		const flashcard: IFlashcard = {
			...row
		};
		return flashcard;
	}
}

export const getFlashcardsWithCategory = (category: string): IFlashcard[] => {
	const rows = db.prepare('SELECT * FROM flashcards WHERE category = ?').all(category);
	const flashcards: IFlashcard[] = [];
	for (let row of rows) {
		flashcards.push(row);
	}
	return flashcards;
}

export const getCategories = () => {
	const stmt = db.prepare(`
SELECT f.category, c.name, f.total FROM (SELECT category, COUNT(*) AS total FROM flashcards GROUP BY category) as f
INNER JOIN categories AS c ON f.category = c.idCode
ORDER BY c.name	
	`);
	const categories: any[] = [];
	for (let row of stmt.iterate()) {
		categories.push(row);
	}
	return categories;
}

export const getApiInstructions = () => {
	return `
<style>
	body {
		background-color: #444;
		padding: 1rem;
		color: #fff;
		font-family: courier;
	}
	a {
		background-color: #333;
		color: yellow;
	}
</style>
<h1>Flashcard Site API</h1>
<ul>
	<li><a href="flashcards">/flashcards</a> - all flashcards</li>
	<li><a href="flashcards/2798">/flashcards/2798</a> - flashcard with id 2798</li>
	<li><a href="flashcards/category/git">/flashcards/category/git</a> - all flashcards in category git</li>
</ul>
	`;
}