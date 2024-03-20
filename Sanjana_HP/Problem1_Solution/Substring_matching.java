import java.util.*;

public class Substring_matching {
    public static void main(String[] args) {
        // Sample Input 0
        String[][] inputs_0 = {{"abbab", "ba"}, {"hello", "world"}, {"banana", "nan"}};
        String[] outputs_0 = {"1 2", "No Match!", "0 2"};

        for (int i = 0; i < inputs_0.length; i++) {
            String patient_dna = inputs_0[i][0];
            String virus_dna = inputs_0[i][1];
            String expected_output = outputs_0[i];
            System.out.println("Expected Output: " + expected_output);
            System.out.print("Actual Output: ");
            virusIndices(patient_dna, virus_dna);
            System.out.println();
        }

        // Sample Input 1
        String[][] inputs_1 = {{"cgatcg", "gc"}, {"atcgatcga", "cgg"}, {"aardvark", "ab"}};
        String[] outputs_1 = {"1 3", "2 6", "0 1 5"};

        for (int i = 0; i < inputs_1.length; i++) {
            String patient_dna = inputs_1[i][0];
            String virus_dna = inputs_1[i][1];
            String expected_output = outputs_1[i];
            System.out.println("Expected Output: " + expected_output);
            System.out.print("Actual Output: ");
            virusIndices(patient_dna, virus_dna);
            System.out.println();
        }
    }

    public static void virusIndices(String p, String v) {
        List<Integer> indices = new ArrayList<>();
        int v_len = v.length();

        for (int i = 0; i < p.length(); i++) {
            if (i + v_len > p.length())
                break;

            String substring = p.substring(i, i + v_len);
            int mismatch_count = 0;

            for (int j = 0; j < v_len; j++) {
                if (substring.charAt(j) != v.charAt(j))
                    mismatch_count++;
            }

            if (mismatch_count <= 1)
                indices.add(i);
        }

        if (!indices.isEmpty())
            System.out.println(String.join(" ", indices.stream().map(Object::toString).toArray(String[]::new)));
        else
            System.out.println("No Match!");
    }
}
