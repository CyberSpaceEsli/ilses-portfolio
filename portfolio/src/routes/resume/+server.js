import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const pdfPath = resolve('static/assets/cv-ilselöhr.pdf');

export function GET() {
	const file = readFileSync(pdfPath);

	return new Response(file, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename="cv-ilselöhr.pdf"',
			'Content-Length': String(file.length)
		}
	});
}
