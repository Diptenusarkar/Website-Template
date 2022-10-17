import javax.swing.*;
import java.awt.event.*;
import java.awt.*;

    class TicTacToe implements ActionListener{
        JFrame f;
        JLabel l1,l2;
        JPanel p,p1;
        ImageIcon i1,i2;
        JButton b;
        TicTacToe(String s){

            f=new JFrame(s);
            f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

            p=new JPanel();
            p1=new JPanel();
            i1=new ImageIcon("backimg.PNG");
            i2=new ImageIcon("img.JPG");
            l1=new JLabel(i1);
            l2=new JLabel(i2);
            b=new JButton("PLAY");
            f.setSize(500,500);
            Container c=f.getContentPane();
            c.setBackground(Color.BLUE);
            b.setBounds(190,410,100,40);
            p.setBounds(90,10,300,150);
            p1.setBounds(90,150,300,250);
            p1.setBackground(Color.BLACK);
            p1.add(l2);
            p.add(l1);
            f.add(p);
            f.add(p1);
            f.add(b);
            f.setBackground(Color.RED);
            f.setLayout(null);
            f.setVisible(true);
            b.addActionListener(this);
        }
        public void actionPerformed(ActionEvent e){
            if(e.getSource()==b){
                f.dispose();
                new SelectMode("Tic Tac Toe");

            }
        }
        public static void main(String[] args) {
            new TicTacToe("Tic Tac Toe");
        }
    }

