const SuccessPage = () => {
    return (
      <div className="max-w-4xl mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Payment Successful</h1>
        <p className="mb-4">Thank you for your purchase. You will receive an email confirmation shortly.</p>
        <a href="/attendee/view-tickets" className="text-blue-500 hover:underline">View Your Tickets</a>
      </div>
    );
  };
  
  export default SuccessPage;