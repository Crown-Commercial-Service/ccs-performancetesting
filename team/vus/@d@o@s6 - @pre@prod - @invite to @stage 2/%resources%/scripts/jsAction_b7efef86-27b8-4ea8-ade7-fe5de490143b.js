// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var ProjectNameExtracted = context.variableManager.getValue("e_DOS6_ProjectName");
if (ProjectNameExtracted==null) {
        context.fail("Variable 'ProjectNameExtracted' not found");
}

// Path to the file where you want to append the variable
var filePath = "C:/Users/test_win1/Documents/NeoLoad Projects/CCS_v12/custom-resources/DOS6_InviteToStage2_Data.csv";

// Function to append content to a file
function appendToFile(file, content) {
    var writer = new java.io.FileWriter(file, true); // 'true' to append, 'false' to overwrite
    writer.write(content + "\n"); // Append content with a newline
    writer.close();
}

// Call the function
appendToFile(filePath, ProjectNameExtracted);

logger.debug("ComputedValue="+ProjectNameExtracted);

// Inject the computed value in a runtime variable
context.variableManager.setValue("computedVar",ProjectNameExtracted);