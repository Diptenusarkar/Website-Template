import java.awt.event.*;
import javax.swing.*;
import java.awt.*;
class SelectMode implements ActionListener{
    JFrame jf;
    JButton b1,b2;
    JLabel jl;
    JPanel jp;
    SelectMode(String s){
        jf=new JFrame(s);
        b1=new JButton("SOLOPLAY");
        b2=new JButton("MULTIPLAYER");
        jl=new JLabel(new ImageIcon("SelectMode.JFIF"));
        jp=new JPanel();
        jf.setSize(500,500);
        Container c=jf.getContentPane();
        c.setBackground(Color.BLUE);
        jp.setBounds(90,50,300,150);
        b1.setBounds(180,250,120,60);
        b2.setBounds(180,350,120,60);
        jp.add(jl);
        jf.add(jp);
        jf.add(b1);
        jf.add(b2);
        jf.setLayout(null);
        jf.setVisible(true);
        b1.addActionListener(this);
        b2.addActionListener(this);
    }
    public void actionPerformed(ActionEvent e){
        if(e.getSource()==b1){
            jf.dispose();
            new SoloPlay("Tic Tac Toe");
        }
        if(e.getSource()==b2){
            jf.dispose();
            new GamePlay("Tic Tac Toe");
        }
    }
}
