package bhma.weblab2.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;

import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("clear") != null && request.getParameter("clear").equals("true")) {
            request.getServletContext().getRequestDispatcher("/ClearServlet").forward(request, response);
            return;
        }
        String strX = request.getParameter("x");
        String strY = request.getParameter("y");
        String strR = request.getParameter("r");
        if (isIncorrectParameter(strR) || isIncorrectParameter(strX) || isIncorrectParameter(strY)) {
            request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            return;
        }
        request.getServletContext().getRequestDispatcher("/AreaCheckServlet").forward(request, response);
    }

    private boolean isIncorrectParameter(String parameter) {
        if (parameter == null) {
            return true;
        }
        try {
            Double.parseDouble(parameter.replace(',', '.'));
        } catch (NumberFormatException e) {
            return true;
        }
        return false;
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
