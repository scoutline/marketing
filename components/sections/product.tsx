export function ProductSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-prose mx-auto">

        <p className="section-label mb-5">The Platform</p>

        <p className="body-text mb-4">
          Whether you are a solo attorney, a partner at a mid-size firm, or the
          head of an enterprise legal department, you will find that Scoutline
          replaces the friction of manual document review with a verifiable,
          auditable workspace.
        </p>

        <p className="body-text mb-4">
          The platform is organized into four modules. <strong className="text-text-primary font-medium">The Vault </strong> is
          your firm&apos;s encrypted document storage — every file org-isolated,
          never used for training. <strong className="text-text-primary font-medium">Maverick</strong> is
          the AI case intelligence layer that answers questions about your
          documents and cites the exact page and line it drew from.{' '}
          <strong className="text-text-primary font-medium">Scout</strong> runs
          hybrid semantic and keyword search across your entire document
          library. <strong className="text-text-primary font-medium">Provisos </strong> is
          the drafting environment where Maverick&apos;s analysis becomes
          structured clause work.
        </p>

        <p className="body-text mb-4">
          Every answer Maverick produces includes precise citations.
          If the information is not in your document, Scoutline says so.
          You can view a sample session{' '}
          <a href="#" className="text-link">here</a>.
        </p>

      </div>
    </section>
  );
}
