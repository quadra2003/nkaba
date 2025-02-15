import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Load Stripe key securely

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            success_url: "https://nkaba.vercel.app/donate-success",
            cancel_url: "https://nkaba.vercel.app/donate",
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: { name: "Donation to NKABA" },
                        unit_amount: 5000, // $50 donation
                    },
                    quantity: 1,
                },
            ],
        });

        res.status(200).json({ url: session.url });
    } catch (error) {
        console.error("Error creating checkout session", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
