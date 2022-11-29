package bhma.weblab2.beans;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ResultTable implements Serializable {
    List<TableRow> table;

    public ResultTable() {
        table = new ArrayList<>();
    }

    public ResultTable(List<TableRow> tableRows) {
        this.table = tableRows;
    }

    public List<TableRow> getResults() {
        return table;
    }

    public void setResults(List<TableRow> tableRows) {
        this.table = tableRows;
    }

    public void addRow(TableRow tableRow) {
        table.add(tableRow);
    }
}
