import HeadingText from "@/components/heading-text"

export const metadata = {
    title: "Contact",
}

export default function Contact() {
    return (
        <main className="container flex flex-col items-center py-8">
            <div className="flex flex-col items-center space-y-2 text-center">
                <HeadingText subtext="Contact the Student Office Beareres for further queries">
                    Contact Us
                </HeadingText>
            </div>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Chairperson */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <HeadingText subtext="Contact the Chairperson for further queries">
                        Chairperson
                    </HeadingText>
                    <p>Dhanush G - 9791467241</p>
                    <p>Nivashikaa K - 9789278192</p>
                </div>
                {/* Secretary */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <HeadingText subtext="Contact the Secretary for further queries">
                        Secretary
                    </HeadingText>
                    <p>Charukesh R - 8072911538</p>
                    <p>Deepika S - 8608990170</p>
                </div>
                {/* Joint Secretary */}
                <div className="flex flex-col items-center space-y-2 text-center">
                    <HeadingText subtext="Contact the Joint Secretary for further queries">
                        Joint Secretary
                    </HeadingText>
                    <p>Rakeshwaran ASN - 9345860259</p>
                    <p>Tessa - 8438617662</p>
                </div>
            </div>
        </main>
    )
}
