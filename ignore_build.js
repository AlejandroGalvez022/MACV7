const { execSync } = require('child_process');

try {
  const diff = execSync(
    `git diff --name-only ${process.env.CACHED_COMMIT_REF} ${process.env.COMMIT_REF}`
  ).toString().trim();

  if (!diff) {
    process.exitCode = 0; // sin cambios, ignorar
  } else {
    const files = diff.split('\n');
    const onlyNoticiasOrUploads = files.every(f => 
      f.startsWith('_noticias/') || f.startsWith('uploads/')
    );
    process.exitCode = onlyNoticiasOrUploads ? 0 : 1;
  }
} catch(e) {
  process.exitCode = 1; // si hay error, hacer deploy
}
