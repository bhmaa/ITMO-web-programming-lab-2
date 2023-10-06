package bhma.weblab2.servlets;

import bhma.weblab2.beans.HitResult;
import bhma.weblab2.beans.ResultTable;
import bhma.weblab2.beans.TableRow;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        final long startTime = System.nanoTime();

        double x = Double.parseDouble(request.getParameter("x").replace(',', '.'));
        double y = Double.parseDouble(request.getParameter("y").replace(',', '.'));
        double r = Double.parseDouble(request.getParameter("r").replace(',', '.'));

        OffsetDateTime currentTimeObject = OffsetDateTime.now(ZoneOffset.UTC);
        String currentTime;
        if (request.getParameter("timezone") != null && !request.getParameter("timezone").equals("")) {
            currentTimeObject = currentTimeObject.minusMinutes(Long.parseLong(request.getParameter("timezone")));
        }
        currentTime = currentTimeObject.format(DateTimeFormatter.ofPattern("HH:mm:ss"));

        boolean hit = check(x, y, r);
        final long endTime = System.nanoTime();
        TableRow tableRow = new TableRow(x, y, r, hit ? HitResult.HIT : HitResult.MISS, currentTime, endTime - startTime);
        ResultTable results = (ResultTable) request.getSession().getAttribute("table");
        if (results == null) {
            results = new ResultTable();
        }
        results.addRow(tableRow);
        request.getSession().setAttribute("table", results);

        response.sendRedirect(request.getContextPath() + "/results.jsp");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().getRequestDispatcher(request.getContextPath()).forward(request, response);
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
}
