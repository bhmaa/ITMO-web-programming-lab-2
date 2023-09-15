package bhma.weblab2.servlets;

import jakarta.servlet.*;
import jakarta.servlet.http.*;

import java.io.IOException;

public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("action") != null && request.getParameter("action").equals("clear")) {
            request.getServletContext().getRequestDispatcher("/ClearServlet").forward(request, response);
            return;
        }
        String strX = request.getParameter("x");
        String strY = request.getParameter("y");
        String strR = request.getParameter("r");
        if (isXValueCorrect(strX) && isYValueCorrect(strY) && isRValueCorrect(strR)) {
            request.getServletContext().getRequestDispatcher("/AreaCheckServlet").forward(request, response);
        }
    }


    private boolean isXValueCorrect(String strX) {
        if (strX == null) {
            return false;
        }
        try {
            double x = Double.parseDouble(strX.replace(',', '.'));
            return x == -3 || x == -2 || x == -1 || x == 0 || x == 1 || x == 2 || x == 3 || x == 4 || x == 5;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private boolean isYValueCorrect(String strY) {
        if (strY == null) {
            return false;
        }
        try {
            double y = Double.parseDouble(strY.replace(',', '.'));
            return y >= -5 && y <= 3 && strY.length() <= 12;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private boolean isRValueCorrect(String strR) {
        if (strR == null) {
            return false;
        }
        try {
            double r = Double.parseDouble(strR.replace(',', '.'));
            return r == 1 || r == 2 || r == 3 || r == 4 || r == 5;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
