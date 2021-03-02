import os
try:
    f = open("init.txt")
    # Do something with the file
except IOError:
    # os.system('export DJANGO_SUPERUSER_PASSWORD="12345678"')
    # os.system('export DJANGO_SUPERUSER_USER=revand')
    # os.system('export DJANGO_SUPERUSER_EMAIL=revand@gmail.com')
    
    # os.system('pip install django-createsuperuser')
    os.system('python3 manage.py makemigrations')
    os.system('python3 manage.py migrate')
    os.system('python3 manage.py shell -c "from django.contrib.auth.models import User; User.objects.create_superuser(\'vicnx\', \'andanivicente@gmail.com\', \'12345678\')"')
    # os.system('cat <<EOF | python3 manage.py shell\
    #     from django.contrib.auth import get_user_model\
    #     User = get_user_model()\
    #     User.objects.filter(username=\'revand\').exists() or \
    #         User.objects.create_superuser(\'revand\', \'revand@example.com\', \'12345678\')\
    #     EOF')
    # os.system("python3 manage.py createuser2 --username test1 --password 123321 --noinput --email 'blank@email.com'")
    # os.system('export DJANGO_SETTINGS_MODULE=settings')
    # os.system('python -m django_createsuperuser "revand" "12345678" revand@gmail.com')


    # os.system('echo -e "revand\nrevand@gmail.com\n12345678\n12345678\ny" | python3 manage.py createsuperuser')
    # os.system('echo -e"from django.contrib.auth.models import User; User.objects.create_superuser(\'revand\', \'revand@example.com\', \'12345678\')" | python manage.py shell')

    # os.system('python3 manage.py createsuperuser')
    


    os.system('echo "true" > init.txt')


    
finally:
    os.system('python3 manage.py runserver 0.0.0.0:8000')