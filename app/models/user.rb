# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  funds           :float            not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :email, :session_token, :password_digest, :funds, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: {minimum: 8, allow_nil: true}

    after_initialize :ensure_session_token, :default_funds

    has_many :holdings, dependent: :destroy

    has_many :watchlists, dependent: :destroy

    has_many :owned_tickers, through: :holdings, source: :ticker

    attr_reader :password

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def ensure_session_token
        self.session_token ||= User::generate_session_token
    end

    def reset_session_token!
        self.session_token = User:: generate_session_token
    end

    def default_funds
        self.funds ||= 100000.00
    end

    def receive_order(order)
        new_funds = self.funds - order[:quantity].to_f * order[:avg_price].to_f
        self.update_attribute(:funds, new_funds)
    end

    def sell_all(order)
        new_funds = self.funds + order[:quantity].to_f * order[:avg_price].to_f
        self.update_attribute(:funds, new_funds)
    end

    def buy_new(order)
        new_funds = self.funds - order[:quantity].to_f * order[:avg_price].to_f
        self.update_attribute(:funds, new_funds)
    end
end
