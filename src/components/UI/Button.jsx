export default function Button({ children, textOnly, className, ...props }) {
	let cssClasses = textOnly ? "text-buton" : "button";
    cssClasses += " " + className;
	return <button className = {cssClasses} {...props}>{children}</button>;
}
