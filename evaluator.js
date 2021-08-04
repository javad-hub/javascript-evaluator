<a href='javascript:
 var e = "", r = ""; /* Expression to evaluate and the result */
 do {
 /* Display expression and result and ask for a new expression */
 e = prompt("Expression: " + e + "\n" + r + "\n", e);
 try { r = "Result: " + eval(e); } /* Try to evaluate the expression */
 catch(ex) { r = ex; } /* Or remember the error instead */
 } while(e); /* Continue until no expression entered or Cancel clicked */
 void 0; /* This prevents the current document from being overwritten */
 '>
JavaScript Evaluator
</a>