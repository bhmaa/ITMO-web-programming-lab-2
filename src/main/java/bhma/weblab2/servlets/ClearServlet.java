package bhma.weblab2.servlets;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ClearServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.getSession().setAttribute("table", null);

        response.sendRedirect(request.getContextPath() + "/results.jsp");
    }
}
