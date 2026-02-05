import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-lg text-center bg-white shadow-xl rounded-3xl p-10">
        <h1 className="text-4xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 mb-6">
          Your registration for GAiN Africa has been successfully submitted. 
          We are excited to see you at the conference!
        </p>
        <Link href="/" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-xl transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
