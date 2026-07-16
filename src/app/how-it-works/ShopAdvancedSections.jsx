"use client";

export default function ShopAdvancedSections() {
  return (
    <section className="w-full bg-[#0f0a1f] py-6 px-6 md:px-16 text-white">
      <div className="max-w-6xl mx-auto relative">

        {/* vertical line */}
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-gradient-to-b from-[#5B23FF] to-purple-400 hidden md:block"></div>

        <div className="space-y-12">

          {[
            {
              title: " Importance of Verified Listings",
              content: (
                <>
                  <p>Many people face problems due to fake listings.</p>
                  <p className="mt-2">Why verification matters:</p>
                  <ul className="list-disc pl-5">
                    <li>Avoid fraud</li>
                    <li>Get real property details</li>
                    <li>Save time</li>
                    <li>Build trust</li>
                  </ul>
                  <p className="mt-2">
                    Our platform focuses on trusted listings so you can safely choose a retail space for rent in Faridabad.
                  </p>
                </>
              ),
            },
            {
              title: " Direct Buyer-Seller Interaction",
              content: (
                <>
                  <p>One of the biggest benefits is direct contact.</p>
                  <p className="mt-2">Why it matters:</p>
                  <ul className="list-disc pl-5">
                    <li>No brokerage fee</li>
                    <li>Clear communication</li>
                    <li>Faster deals</li>
                    <li>Better negotiation</li>
                  </ul>
                  <p className="mt-2">
                    You can directly talk to the owner when searching for a shop for rent in Faridabad.
                  </p>
                </>
              ),
            },
            {
              title: " Free Listing + Deal Acres Partnership",
              content: (
                <>
                  <p>We offer free property listing for everyone.</p>
                  <p className="mt-2">Benefits:</p>
                  <ul className="list-disc pl-5">
                    <li>No cost to list property</li>
                    <li>Easy process</li>
                    <li>Reach more buyers</li>
                  </ul>
                  <p className="mt-2">
                    We also have a corporate partnership with Deal Acres, which adds more trust and reach.
                  </p>
                  <p>This helps both buyers and sellers connect easily.</p>
                </>
              ),
            },
            {
              title: "Step-by-Step Process to Rent a Shop",
              content: (
                <>
                  <p>Step 1: Search</p>
                  <p>Visit the platform and search for shop for rent in Faridabad.</p>

                  <p className="mt-2">Step 2: Filter</p>
                  <p>Apply filters like budget, size, and location.</p>

                  <p className="mt-2">Step 3: View Listings</p>
                  <p>Check details, photos, and location.</p>

                  <p className="mt-2">Step 4: Contact Owner</p>
                  <p>Directly connect with the owner.</p>

                  <p className="mt-2">Step 5: Visit Property</p>
                  <p>Visit the shop and check everything.</p>

                  <p className="mt-2">Step 6: Final Deal</p>
                  <p>Agree on rent and terms.</p>
                </>
              ),
            },
            {
              title: "Legal Checks Before Renting",
              content: (
                <>
                  <p>
                    Before finalising a commercial property for rent in Faridabad, do proper checks.
                  </p>
                  <p className="mt-2">Important checks:</p>
                  <ul className="list-disc pl-5">
                    <li>Ownership proof</li>
                    <li>Lease agreement</li>
                    <li>Property tax records</li>
                    <li>Local approvals</li>
                  </ul>
                  <p className="mt-2">
                    This helps avoid future problems.
                  </p>
                </>
              ),
            },
            {
              title: "Documents Required",
              content: (
                <>
                  <p>
                    You need some documents for renting a shop for lease in Faridabad.
                  </p>
                  <p className="mt-2">Common documents:</p>
                  <ul className="list-disc pl-5">
                    <li>ID proof</li>
                    <li>Address proof</li>
                    <li>Business details</li>
                    <li>Rental agreement</li>
                  </ul>
                  <p className="mt-2">
                    Keep everything ready for a smooth process.
                  </p>
                </>
              ),
            },
            {
              title: "Problems Buyers Face + Solutions",
              content: (
                <>
                  <p>Common problems:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Fake listings</li>
                    <li>High brokerage</li>
                    <li>Lack of information</li>
                    <li>Too many options</li>
                  </ul>

                  <p className="mt-3">Our solution:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Verified listings</li>
                    <li>No middleman</li>
                    <li>Direct owner contact</li>
                    <li>All properties in one place</li>
                  </ul>

                  <p className="mt-2">
                    This makes finding a shop for rent in Faridabad simple and safe.
                  </p>
                </>
              ),
            },
            {
              title: "Mistakes to Avoid",
              content: (
                <>
                  <p>Avoid these mistakes:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Not checking location</li>
                    <li>Ignoring legal documents</li>
                    <li>Overpaying rent</li>
                    <li>Not visiting the property</li>
                  </ul>

                  <p className="mt-2">
                    Always research before choosing a commercial space in Faridabad.
                  </p>
                </>
              ),
            },
            {
              title: "Future Growth and Investment",
              content: (
                <>
                  <p>Faridabad has strong growth potential.</p>
                  <p className="mt-2">Reasons:</p>
                  <ul className="list-disc pl-5">
                    <li>Infrastructure development</li>
                    <li>Rising demand</li>
                    <li>Business expansion</li>
                  </ul>
                  <p className="mt-2">
                    Investing in a retail shop for rent in Faridabad can give good returns in the future.
                  </p>
                </>
              ),
            },
            {
              title: "Who Should Use This Platform",
              content: (
                <>
                  <p>This platform is perfect for:</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Business owners</li>
                    <li>Shop seekers</li>
                    <li>Property owners</li>
                    <li>Investors</li>
                  </ul>
                  <p className="mt-2">
                    Anyone looking for shops for rent in Faridabad can benefit.
                  </p>
                </>
              ),
            },
            {
              title: "Benefits for Sellers",
              content: (
                <>
                  <p>If you own a property, you can list it easily.</p>
                  <p className="mt-2">Benefits:</p>
                  <ul className="list-disc pl-5">
                    <li>Free property listing</li>
                    <li>No brokerage</li>
                    <li>Direct buyers</li>
                    <li>Fast response</li>
                  </ul>
                  <p className="mt-2">
                    With our Deal Acres partnership, your property gets better visibility.
                  </p>
                </>
              ),
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`md:w-1/2 ${
                i % 2 === 0 ? "md:pr-10 md:ml-auto" : "md:pl-10"
              }`}
            >
              <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                <h2 className="text-lg md:text-xl font-bold text-[#A78BFA] mb-3">
                  {item.title}
                </h2>
                <div className="text-gray-300 space-y-1">
                  {item.content}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}