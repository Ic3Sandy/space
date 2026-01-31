interface BlockProps {
  path?: string;
}

export default function Block(_props: BlockProps) {
  return (
    <section className="min-h-screen md:min-h-[90vh] flex items-center justify-center px-4 py-12 md:px-6 md:py-16">
      <div className="max-w-4xl glass-card rounded-lg p-8 md:p-12 animate-fade-in">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient-cosmic">
          Bitcoin Block Explorer
        </h2>

        <div className="space-y-4 text-gray-light text-lg leading-relaxed">
          <p>
            Explore the Bitcoin blockchain in real-time. This explorer will provide detailed
            information about blocks, transactions, and network statistics.
          </p>

          <p>
            Search for blocks by hash or block number, view transaction details, track
            confirmations, and monitor the health of the Bitcoin network.
          </p>

          <p>
            This feature is currently under development. Stay tuned for updates as we build
            out the full block explorer functionality.
          </p>
        </div>

        {/* Search Input Placeholder */}
        <div className="mt-8 pt-6 border-t border-gold/20">
          <h3 className="text-xl font-semibold text-gold mb-4">Search Blocks</h3>
          {/* TODO: [FEATURE] Add block search by hash/number */}
          <input
            type="text"
            placeholder="Search by block hash or number"
            disabled
            className="w-full px-4 py-3 bg-void-deep/50 border border-gold/30 rounded-lg text-gray-light placeholder-gray-light/50 cursor-not-allowed opacity-60"
          />
          <p className="mt-2 text-sm text-gray-light/70">Search functionality coming soon</p>
        </div>

        {/* Feature Preview Cards */}
        <div className="mt-8 pt-6 border-t border-gold/20">
          <h3 className="text-xl font-semibold text-gold mb-4">Planned Features</h3>
          <div className="flex flex-wrap gap-3">
            {/* TODO: [FEATURE] Display real-time block data from Bitcoin RPC */}
            {['Block Data', 'Transaction History', 'Confirmation Status', 'Network Statistics'].map(
              feature => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-void-deep/50 border border-gold/30 rounded-full text-gray-light text-sm hover:border-amber transition-colors duration-200"
                >
                  {feature}
                </span>
              )
            )}
          </div>
          {/* TODO: [FEATURE] Show transaction list within block */}
          {/* TODO: [FEATURE] Network statistics sidebar */}
        </div>
      </div>
    </section>
  );
}
