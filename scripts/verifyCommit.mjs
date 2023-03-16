import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import chalk from 'chalk';

const dirname = path.dirname(fileURLToPath(import.meta.url), '..');
const msgPath = path.resolve(dirname, '../.git/COMMIT_EDITMSG');
const msg = readFileSync(msgPath, 'utf-8').trim();

const commitRE =
	/(^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\(.+\))?: .{1,50})|(^Merge branch .*)/;

if (!commitRE.test(msg)) {
	console.log();
	console.error(
		`  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
			`invalid commit message format.`
		)}\n\n` +
			chalk.red(
				`  Proper commit message format is required for automated changelog generation. Examples:\n\n`
			) +
			`    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
			`    ${chalk.green(
				`fix(v-model): handle events on blur (close #28)`
			)}\n\n` +
			chalk.red(
				`  See https://github.com/vuejs/core/blob/main/.github/commit-convention.md`
			)
	);
	process.exit(1);
}
