// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var timestamp = context.variableManager.getValue("Timestamp");
if (timestamp==null) {
        context.fail("Variable 'timestamp' not found");
}

// Do some computation using the methods
// you defined in the JS Library
var runtimeTimestamp = timestamp;
logger.debug("ComputedValue Timestamp 1=" + runtimeTimestamp);


// Inject the computed value in a runtime variable
context.variableManager.setValue("runtimeTimestamp", runtimeTimestamp);