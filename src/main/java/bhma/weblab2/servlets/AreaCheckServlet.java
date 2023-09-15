package bhma.weblab2.servlets;

import bhma.weblab2.beans.HitResult;
import bhma.weblab2.beans.ResultTable;
import bhma.weblab2.beans.TableRow;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.*;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final long startTime = System.nanoTime();
        double x = Double.parseDouble(request.getParameter("x").replace(',', '.'));
        double y = Double.parseDouble(request.getParameter("y").replace(',', '.'));
        double r = Double.parseDouble(request.getParameter("r").replace(',', '.'));
        String currentTime = request.getParameter("currentTime");
        if (currentTime == null) {
            DateTimeFormatter dtf = DateTimeFormatter.ofPattern("HH:mm:ss");
            currentTime = LocalTime.now().format(dtf);
        }
        boolean hit = check(x, y, r);
        final long endTime = System.nanoTime();
        TableRow tableRow = new TableRow(x, y, r, hit ? HitResult.HIT : HitResult.MISS, currentTime,
                (endTime - startTime) / 1000.0);
        ResultTable results = (ResultTable) request.getSession().getAttribute("table");
        if (results == null) {
            results = new ResultTable();
        }
        results.addRow(tableRow);
        request.getSession().setAttribute("table", results);
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter writer = response.getWriter();
        StringBuilder rows = new StringBuilder();
        for (TableRow row : results.getResults()) {
            rows.append("<tr>\n")
                    .append("<td>").append(row.getX()).append("</td>\n")
                    .append("<td>").append(row.getY()).append("</td>\n")
                    .append("<td>").append(row.getR()).append("</td>\n")
                    .append("<td>").append(row.getHitResult()).append("</td>\n")
                    .append("<td>").append(row.getCurrentTime()).append("</td>\n")
                    .append("<td>").append(row.getExecutionTime()).append("</td>\n")
                    .append("</tr>\n");
        }
        writer.println(rows);
    }

    private boolean check(double x, double y, double r) {
        if (x <= 0 && y >= 0) {
            return y <= x + r;
        }
        if (x <= 0 && y <= 0) {
            return x >= -r && y >= -r / 2;
        }
        if (x >= 0 && y <= 0) {
            return x * x + y * y <= r * r;
        }
        return false;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
