package bhma.weblab2.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet("/controller")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        if (request.getParameter("action") != null && request.getParameter("action").equals("clear")) {
            request.getServletContext().getRequestDispatcher("/clear").forward(request, response);
            return;
        }
        String strX = request.getParameter("x");
        String strY = request.getParameter("y");
        String strR = request.getParameter("r");
        if (isDataCorrect(strX) && isDataCorrect(strY) && isRCorrect(strR)) {
            request.getServletContext().getRequestDispatcher("/check").forward(request, response);
            return;
        }
        request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    private boolean isDataCorrect(String str) {
        if (str == null) {
            return false;
        }
        try {
            Double.parseDouble(str.replace(',', '.'));
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    private boolean isRCorrect(String strR) {
        if (!isDataCorrect(strR)) {
            return false;
        }
        return Double.parseDouble(strR.replace(',', '.')) > 0;
    }
}
