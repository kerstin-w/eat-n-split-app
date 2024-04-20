/**
 * The Button function renders a button element with specified children and
 * onClick event handler.
 * @returns A button element with the class name "button" and an onClick event handler that triggers
 * the function passed as the onClick prop. The content of the button is the children passed to the
 * Button component.
 */
export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
