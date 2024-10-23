

const Button = ({ label, source, email }) => {
    // Handle button click for redirecting if a source is provided
    const handleClick = () => {
      if (source) {
        window.open(source, "_blank"); // Open in a new tab
      } else if (email) {
        navigator.clipboard.writeText(email) // Copy email to clipboard
          .then(() => {
            alert("Email copied to clipboard!"); // Optional: Show a confirmation message
          })
          .catch(err => {
            console.error("Failed to copy: ", err); // Handle errors
          });
      }
    };
  
    return (
      <button
        onClick={handleClick}
        className="w-48 px-4 py-2 md:px-6 md:py-3 text-white font-bold rounded-md border-2 text-sm md:text-base"
      >
        {label}
      </button>
    );
  };
  
  export default Button;
 
  