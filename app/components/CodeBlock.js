export default function CodeBlock({ children, filename }) {
  return (
    <div className="code-block">
      {filename && (
        <div className="code-block-header">
          <span className="code-block-filename">{filename}</span>
        </div>
      )}
      <div className="code-block-body">
        <pre><code>{children}</code></pre>
      </div>
    </div>
  );
}
